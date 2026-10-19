import { Device } from '../devices/device';
import { DeviceType, FailReason, PingResult, InterfaceState } from '../types';
import { sameSubnet, isHostIpInSubnet } from './ipv4';

export class ConnectivityResolver {
  private devices: Map<string, Device>;

  constructor(devices: Map<string, Device>) {
    this.devices = devices;
  }

  // Update all interface oper statuses across the network
  refreshAllOperStatuses(): void {
    for (const dev of this.devices.values()) {
      for (const iface of dev.interfaces.values()) {
        dev.updateOperStatus(iface.fullName, this.devices);
      }
    }
  }

  resolvePing(srcId: string, dstIp: string): PingResult {
    this.refreshAllOperStatuses();

    const srcDev = this.devices.get(srcId);
    if (!srcDev) {
      return { success: false, hops: [], failReason: FailReason.HOST_UNREACHABLE, failAt: srcId };
    }

    // 1. Forward path
    const forwardResult = this.resolveOneWay(srcDev, dstIp, true);
    if (!forwardResult.success) {
      return forwardResult;
    }

    // 2. Reply path from destination back to source
    const dstDevId = forwardResult.hops[forwardResult.hops.length - 1];
    const dstDev = this.devices.get(dstDevId);
    if (!dstDev) {
      return { success: false, hops: forwardResult.hops, failReason: FailReason.HOST_UNREACHABLE, failAt: dstIp };
    }

    const srcIp = this.getDeviceIp(srcDev, dstIp);
    if (!srcIp) {
      return { success: false, hops: forwardResult.hops, failReason: FailReason.NO_IP, failAt: srcId };
    }

    const replyResult = this.resolveOneWay(dstDev, srcIp, false);
    if (!replyResult.success) {
      // Reverse failure
      return {
        success: false,
        hops: forwardResult.hops,
        failReason: replyResult.failReason,
        failAt: replyResult.failAt,
      };
    }

    return {
      success: true,
      hops: forwardResult.hops,
      failReason: FailReason.NONE,
      failAt: '',
    };
  }

  private getDeviceIp(dev: Device, targetDstIp?: string): string | null {
    if (dev.type === DeviceType.HOST || dev.type === DeviceType.SERVER) {
      return dev.ip;
    }
    // For router, find matching connected interface
    for (const iface of dev.interfaces.values()) {
      if (iface.ip) {
        if (targetDstIp && iface.mask && sameSubnet(iface.ip, targetDstIp, iface.mask)) {
          return iface.ip;
        }
      }
    }
    // Fallback to first interface with IP
    for (const iface of dev.interfaces.values()) {
      if (iface.ip) return iface.ip;
    }
    return null;
  }

  private resolveOneWay(srcDev: Device, dstIp: string, isForward: boolean): PingResult {
    const visitedHops: string[] = [srcDev.id];
    let currentDev: Device = srcDev;

    // Safety hop limit to prevent infinite loops
    let maxHops = 15;

    while (maxHops-- > 0) {
      // Check if current device owns dstIp
      if (this.deviceOwnsIp(currentDev, dstIp)) {
        return { success: true, hops: visitedHops, failReason: FailReason.NONE, failAt: '' };
      }

      // Next hop determination
      let nextHopIp: string | null = null;
      let egressIface: InterfaceState | null = null;
      let targetVlan: number = 1;

      if (currentDev.type === DeviceType.HOST || currentDev.type === DeviceType.SERVER) {
        if (!currentDev.ip || !currentDev.mask) {
          return { success: false, hops: visitedHops, failReason: FailReason.NO_IP, failAt: currentDev.id };
        }

        // Single NIC Eth0
        egressIface = currentDev.getInterface('Ethernet0') || currentDev.getOrderedInterfaces()[0] || null;
        if (!egressIface) {
          return { success: false, hops: visitedHops, failReason: FailReason.NO_LINK, failAt: currentDev.id };
        }

        if (sameSubnet(currentDev.ip, dstIp, currentDev.mask)) {
          // Direct local delivery
          nextHopIp = dstIp;
        } else {
          // Off subnet
          if (!currentDev.gateway) {
            return { success: false, hops: visitedHops, failReason: FailReason.NO_GATEWAY, failAt: currentDev.id };
          }
          if (!sameSubnet(currentDev.ip, currentDev.gateway, currentDev.mask)) {
            return { success: false, hops: visitedHops, failReason: FailReason.WRONG_SUBNET, failAt: currentDev.id };
          }
          nextHopIp = currentDev.gateway;
        }
      } else if (currentDev.type === DeviceType.ROUTER) {
        // Router route lookup
        let bestMatch: { iface: InterfaceState; nextHop: string; maskBits: number } | null = null;

        // Check connected routes
        for (const iface of currentDev.interfaces.values()) {
          if (iface.ip && iface.mask && sameSubnet(iface.ip, dstIp, iface.mask)) {
            bestMatch = { iface, nextHop: dstIp, maskBits: 24 }; // connected route
            break;
          }
        }

        // Check static routes
        if (!bestMatch) {
          for (const route of currentDev.routes) {
            if (isHostIpInSubnet(dstIp, route.network, route.mask)) {
              // Find interface leading to route.nextHop
              for (const iface of currentDev.interfaces.values()) {
                if (iface.ip && iface.mask && sameSubnet(iface.ip, route.nextHop, iface.mask)) {
                  bestMatch = { iface, nextHop: route.nextHop, maskBits: 24 };
                  break;
                }
              }
            }
          }
        }

        if (!bestMatch) {
          return { success: false, hops: visitedHops, failReason: FailReason.NO_ROUTE, failAt: currentDev.id };
        }

        egressIface = bestMatch.iface;
        nextHopIp = bestMatch.nextHop;

        if (egressIface.isSubinterface && egressIface.dot1qVlan) {
          targetVlan = egressIface.dot1qVlan;
        }
      }

      if (!egressIface) {
        return { success: false, hops: visitedHops, failReason: FailReason.NO_ROUTE, failAt: currentDev.id };
      }

      // Check physical egress interface oper-up status
      const physicalIface = egressIface.isSubinterface && egressIface.parent
        ? currentDev.getInterface(egressIface.parent)
        : egressIface;

      if (!physicalIface) {
        return { success: false, hops: visitedHops, failReason: FailReason.NO_LINK, failAt: currentDev.id };
      }

      if (!egressIface.adminUp || !physicalIface.adminUp) {
        return {
          success: false,
          hops: visitedHops,
          failReason: FailReason.ADMIN_DOWN,
          failAt: `${currentDev.id}:${egressIface.shortName}`,
        };
      }

      if (!physicalIface.peer) {
        return {
          success: false,
          hops: visitedHops,
          failReason: FailReason.NO_LINK,
          failAt: `${currentDev.id}:${physicalIface.shortName}`,
        };
      }

      if (!physicalIface.operUp) {
        // Peer is down or peer admin down
        const [pDevId, pIfName] = physicalIface.peer.split(':');
        const pDev = this.devices.get(pDevId);
        const pIf = pDev?.getInterface(pIfName);
        if (pIf && !pIf.adminUp) {
          return {
            success: false,
            hops: visitedHops,
            failReason: FailReason.ADMIN_DOWN,
            failAt: `${pDevId}:${pIf.shortName}`,
          };
        }
        return {
          success: false,
          hops: visitedHops,
          failReason: FailReason.NO_LINK,
          failAt: `${currentDev.id}:${physicalIface.shortName}`,
        };
      }

      if (!nextHopIp) {
        return { success: false, hops: visitedHops, failReason: FailReason.NO_ROUTE, failAt: currentDev.id };
      }

      // Now traverse L2 across switches to find the device owning nextHopIp
      const l2Result = this.traverseL2(currentDev, egressIface, targetVlan, nextHopIp);
      if (!l2Result.success) {
        return {
          success: false,
          hops: [...visitedHops, ...l2Result.switchHops],
          failReason: l2Result.failReason,
          failAt: l2Result.failAt,
        };
      }

      for (const swHop of l2Result.switchHops) {
        visitedHops.push(swHop);
      }

      const nextDev = l2Result.targetDevice!;
      visitedHops.push(nextDev.id);
      currentDev = nextDev;

      // If we reached target dstIp, we are done
      if (this.deviceOwnsIp(currentDev, dstIp)) {
        return { success: true, hops: visitedHops, failReason: FailReason.NONE, failAt: '' };
      }
    }

    return { success: false, hops: visitedHops, failReason: FailReason.HOST_UNREACHABLE, failAt: dstIp };
  }

  private deviceOwnsIp(dev: Device, ip: string): boolean {
    if (dev.ip === ip) return true;
    for (const iface of dev.interfaces.values()) {
      if (iface.ip === ip) return true;
    }
    return false;
  }

  // BFS across L2 switches
  private traverseL2(
    startDev: Device,
    startIface: InterfaceState,
    startVlan: number,
    targetIp: string
  ): {
    success: boolean;
    targetDevice?: Device;
    targetIface?: InterfaceState;
    switchHops: string[];
    failReason: FailReason;
    failAt: string;
  } {
    const physicalStartIface = startIface.isSubinterface && startIface.parent
      ? startDev.getInterface(startIface.parent)!
      : startIface;

    if (!physicalStartIface.peer) {
      return {
        success: false,
        switchHops: [],
        failReason: FailReason.NO_LINK,
        failAt: `${startDev.id}:${physicalStartIface.shortName}`,
      };
    }

    const [peerDevId, peerIfName] = physicalStartIface.peer.split(':');
    const firstHopDev = this.devices.get(peerDevId);
    if (!firstHopDev) {
      return { success: false, switchHops: [], failReason: FailReason.HOST_UNREACHABLE, failAt: targetIp };
    }

    // Direct connection without switch
    if (firstHopDev.type !== DeviceType.SWITCH) {
      if (this.deviceOwnsIp(firstHopDev, targetIp)) {
        return {
          success: true,
          targetDevice: firstHopDev,
          targetIface: firstHopDev.getInterface(peerIfName),
          switchHops: [],
          failReason: FailReason.NONE,
          failAt: '',
        };
      }
      return { success: false, switchHops: [], failReason: FailReason.HOST_UNREACHABLE, failAt: targetIp };
    }

    // Switch BFS queue: [device, ingressPort, currentVlan, visitedSwitchIds]
    interface QueueItem {
      dev: Device;
      ingressIf: InterfaceState;
      vlan: number;
      switchHops: string[];
    }

    const queue: QueueItem[] = [];
    const firstHopIf = firstHopDev.getInterface(peerIfName)!;

    // Determine incoming VLAN at first switch
    let incomingVlan = startVlan;
    if (firstHopIf.mode === 'access') {
      incomingVlan = firstHopIf.accessVlan || 1;
      if (startIface.isSubinterface && startIface.dot1qVlan && startIface.dot1qVlan !== incomingVlan) {
        return {
          success: false,
          switchHops: [firstHopDev.id],
          failReason: FailReason.VLAN_MISMATCH,
          failAt: `${firstHopDev.id}:${firstHopIf.shortName}`,
        };
      }
    } else if (firstHopIf.mode === 'trunk') {
      // Trunk port
      const allowed = firstHopIf.trunkAllowed || [];
      if (allowed.length > 0 && !allowed.includes(startVlan)) {
        return {
          success: false,
          switchHops: [firstHopDev.id],
          failReason: FailReason.VLAN_MISMATCH,
          failAt: `${firstHopDev.id}:${firstHopIf.shortName}`,
        };
      }
      incomingVlan = startVlan;
    }

    queue.push({
      dev: firstHopDev,
      ingressIf: firstHopIf,
      vlan: incomingVlan,
      switchHops: [firstHopDev.id],
    });

    const visitedSwitches = new Set<string>([firstHopDev.id]);
    let lastMismatchAt = '';

    while (queue.length > 0) {
      const { dev, ingressIf, vlan, switchHops } = queue.shift()!;

      // Inspect all other ports on this switch
      for (const port of dev.interfaces.values()) {
        if (port.fullName === ingressIf.fullName || !port.peer) continue;

        // Check port membership in VLAN
        let portCarriesVlan = false;
        let egressTagged = false;

        if (port.mode === 'access') {
          if (port.accessVlan === vlan) {
            portCarriesVlan = true;
            egressTagged = false;
          } else {
            lastMismatchAt = `${dev.id}:${port.shortName}`;
          }
        } else if (port.mode === 'trunk') {
          const allowed = port.trunkAllowed || [];
          if (allowed.length === 0 || allowed.includes(vlan)) {
            portCarriesVlan = true;
            egressTagged = true;
          } else {
            lastMismatchAt = `${dev.id}:${port.shortName}`;
          }
        }

        if (!portCarriesVlan) continue;

        const [nbrDevId, nbrIfName] = port.peer.split(':');
        const nbrDev = this.devices.get(nbrDevId);
        if (!nbrDev) continue;

        const nbrIf = nbrDev.getInterface(nbrIfName);
        if (!nbrIf || !nbrIf.operUp) continue;

        if (nbrDev.type === DeviceType.SWITCH) {
          if (!visitedSwitches.has(nbrDev.id)) {
            visitedSwitches.add(nbrDev.id);
            queue.push({
              dev: nbrDev,
              ingressIf: nbrIf,
              vlan,
              switchHops: [...switchHops, nbrDev.id],
            });
          }
        } else if (nbrDev.type === DeviceType.ROUTER) {
          // Check if router has subinterface with dot1q vlan matching egressTagged vlan
          if (egressTagged) {
            for (const rSub of nbrDev.interfaces.values()) {
              if (
                rSub.isSubinterface &&
                rSub.parent === nbrIf.fullName &&
                rSub.dot1qVlan === vlan &&
                rSub.operUp
              ) {
                if (this.deviceOwnsIp(nbrDev, targetIp)) {
                  return {
                    success: true,
                    targetDevice: nbrDev,
                    targetIface: rSub,
                    switchHops,
                    failReason: FailReason.NONE,
                    failAt: '',
                  };
                }
              }
            }
          } else {
            // Untagged router interface
            if (nbrIf.operUp && this.deviceOwnsIp(nbrDev, targetIp)) {
              return {
                success: true,
                targetDevice: nbrDev,
                targetIface: nbrIf,
                switchHops,
                failReason: FailReason.NONE,
                failAt: '',
              };
            }
          }
        } else {
          // Host or Server
          if (this.deviceOwnsIp(nbrDev, targetIp)) {
            return {
              success: true,
              targetDevice: nbrDev,
              targetIface: nbrIf,
              switchHops,
              failReason: FailReason.NONE,
              failAt: '',
            };
          }
        }
      }
    }

    if (lastMismatchAt) {
      return {
        success: false,
        switchHops: [firstHopDev.id],
        failReason: FailReason.VLAN_MISMATCH,
        failAt: lastMismatchAt,
      };
    }

    return {
      success: false,
      switchHops: [firstHopDev.id],
      failReason: FailReason.HOST_UNREACHABLE,
      failAt: targetIp,
    };
  }
}
