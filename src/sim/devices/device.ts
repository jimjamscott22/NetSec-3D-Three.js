import {
  DeviceType,
  InterfaceState,
  StaticRoute,
  NatRule,
  AclRule,
  VulnDefinition,
} from '../types';
import { normalizeInterfaceName, toShortName, isSubinterfaceName, getParentInterfaceName, getSubinterfaceTag } from '../net/ifname';
import { getModelInterfaces } from './models';

export class Device {
  id: string;
  type: DeviceType;
  model: string;
  hostname: string;
  rack?: string;
  slot?: number;
  desk?: string;

  interfaces: Map<string, InterfaceState> = new Map();

  // Cisco IOS specifics
  enableSecret: string = '';
  users: Map<string, string> = new Map();
  domainName: string = '';
  hasRsaKey: boolean = false;

  // Switch specifics
  vlans: Map<number, string> = new Map(); // id -> name

  // Router specifics
  routes: StaticRoute[] = [];
  natRules: NatRule[] = [];
  acls: AclRule[] = [];
  ipRouting: boolean = true;

  // Host / Server specifics
  ip: string | null = null;
  mask: string | null = null;
  gateway: string | null = null;
  locked: boolean = false;

  // Server specifics
  files: Map<string, string> = new Map();
  services: Array<{ id: string; port: number; root: string }> = [];
  vulns: VulnDefinition[] = [];
  patchRevs: Map<string, number> = new Map(); // vulnId -> patchRev

  constructor(id: string, type: DeviceType, model: string, hostname?: string) {
    this.id = id;
    this.type = type;
    this.model = model;
    this.hostname = hostname || id;

    // Switch always has VLAN 1 default
    if (this.type === DeviceType.SWITCH) {
      this.vlans.set(1, 'default');
    }

    // Initialize canonical interfaces from model
    const ifList = getModelInterfaces(model);
    for (const ifName of ifList) {
      const canonical = normalizeInterfaceName(ifName);
      const isSwitch = this.type === DeviceType.SWITCH;
      const isRouter = this.type === DeviceType.ROUTER;

      this.interfaces.set(canonical, {
        fullName: canonical,
        shortName: toShortName(canonical),
        adminUp: !isRouter, // Routers start shut down; Switches/PCs start up
        operUp: false,
        ip: null,
        mask: null,
        peer: null,
        mode: isSwitch ? 'access' : undefined,
        accessVlan: isSwitch ? 1 : undefined,
        trunkAllowed: isSwitch ? [] : undefined, // empty = all allowed
      });
    }
  }

  getInterface(name: string): InterfaceState | undefined {
    const canonical = normalizeInterfaceName(name);
    return this.interfaces.get(canonical);
  }

  ensureSubinterface(name: string): InterfaceState | null {
    const canonical = normalizeInterfaceName(name);
    if (!isSubinterfaceName(canonical)) return null;

    if (this.interfaces.has(canonical)) {
      return this.interfaces.get(canonical)!;
    }

    const parentName = getParentInterfaceName(canonical);
    const parentIf = this.interfaces.get(parentName);
    if (!parentIf) return null;

    const tag = getSubinterfaceTag(canonical);

    // Create subinterface, starts adminUp by default as on real IOS
    const subIf: InterfaceState = {
      fullName: canonical,
      shortName: toShortName(canonical),
      adminUp: true,
      operUp: false,
      ip: null,
      mask: null,
      peer: null,
      isSubinterface: true,
      parent: parentName,
      dot1qVlan: tag || undefined,
    };
    this.interfaces.set(canonical, subIf);
    return subIf;
  }

  getOrderedInterfaces(): InterfaceState[] {
    return Array.from(this.interfaces.values());
  }

  // Update operUp status for an interface
  updateOperStatus(ifName: string, allDevices: Map<string, Device>): void {
    const iface = this.getInterface(ifName);
    if (!iface) return;

    if (iface.isSubinterface && iface.parent) {
      const parentIf = this.getInterface(iface.parent);
      iface.operUp = iface.adminUp && (parentIf?.operUp ?? false);
      return;
    }

    if (!iface.adminUp || !iface.peer) {
      iface.operUp = false;
      return;
    }

    // Check peer
    const [peerDevId, peerIfName] = iface.peer.split(':');
    const peerDev = allDevices.get(peerDevId);
    if (!peerDev) {
      iface.operUp = false;
      return;
    }

    const peerIf = peerDev.getInterface(peerIfName);
    iface.operUp = iface.adminUp && (peerIf?.adminUp ?? false);
  }
}
