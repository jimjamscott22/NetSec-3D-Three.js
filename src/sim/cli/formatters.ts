import { Device } from '../devices/device';
import { DeviceType } from '../types';
import { toShortName } from '../net/ifname';

export function formatRunningConfig(device: Device): string {
  const lines: string[] = [];
  lines.push('Building configuration...');
  lines.push('');
  lines.push('Current configuration : 1024 bytes');
  lines.push('!');
  lines.push('version 15.2');
  lines.push('no service timestamps log datetime msec');
  lines.push('no service password-encryption');
  lines.push('!');
  lines.push(`hostname ${device.hostname}`);
  lines.push('!');

  if (device.enableSecret) {
    lines.push(`enable secret 5 $1$mERr$${device.enableSecret.slice(0, 10)}...`);
    lines.push('!');
  }

  for (const [username] of device.users) {
    lines.push(`username ${username} secret 5 $1$...`);
  }

  if (device.type === DeviceType.SWITCH) {
    for (const [vlanId, name] of device.vlans) {
      if (vlanId === 1) continue;
      lines.push('!');
      lines.push(`vlan ${vlanId}`);
      lines.push(` name ${name}`);
    }
  }

  // Interfaces in canonical order
  for (const iface of device.getOrderedInterfaces()) {
    lines.push('!');
    lines.push(`interface ${iface.shortName}`);

    if (iface.isSubinterface && iface.dot1qVlan) {
      lines.push(` encapsulation dot1Q ${iface.dot1qVlan}`);
    }

    if (iface.ip && iface.mask) {
      lines.push(` ip address ${iface.ip} ${iface.mask}`);
    } else if (device.type === DeviceType.ROUTER && !iface.isSubinterface) {
      lines.push(' no ip address');
    }

    if (device.type === DeviceType.SWITCH) {
      if (iface.mode === 'trunk') {
        lines.push(' switchport mode trunk');
      } else if (iface.mode === 'access') {
        lines.push(' switchport mode access');
        if (iface.accessVlan && iface.accessVlan !== 1) {
          lines.push(` switchport access vlan ${iface.accessVlan}`);
        }
      }
    }

    if (iface.adminUp) {
      lines.push(' no shutdown');
    } else {
      lines.push(' shutdown');
    }
  }

  // Routes
  if (device.type === DeviceType.ROUTER) {
    for (const route of device.routes) {
      lines.push(`ip route ${route.network} ${route.mask} ${route.nextHop}`);
    }
  }

  lines.push('!');
  lines.push('line con 0');
  lines.push('line vty 0 4');
  lines.push(' login');
  lines.push('!');
  lines.push('end');

  return lines.join('\n');
}

export function formatIpInterfaceBrief(device: Device): string {
  const lines: string[] = [];
  lines.push('Interface              IP-Address      OK? Method Status                Protocol');

  for (const iface of device.getOrderedInterfaces()) {
    const namePadded = iface.shortName.padEnd(22, ' ');
    const ipPadded = (iface.ip || 'unassigned').padEnd(15, ' ');
    const ok = 'YES'.padEnd(4, ' ');
    const method = (iface.ip ? 'manual' : 'unset').padEnd(7, ' ');
    const status = (iface.adminUp ? 'up' : 'administratively down').padEnd(22, ' ');
    const protocol = iface.operUp ? 'up' : 'down';

    lines.push(`${namePadded} ${ipPadded}${ok}${method}${status}${protocol}`);
  }

  return lines.join('\n');
}

export function formatVlanBrief(device: Device): string {
  if (device.type !== DeviceType.SWITCH) {
    return '% This command is only supported on switches.';
  }

  const lines: string[] = [];
  lines.push('VLAN Name                             Status    Ports');
  lines.push('---- -------------------------------- --------- -------------------------------');

  for (const [vlanId, name] of device.vlans) {
    const vlanStr = String(vlanId).padEnd(4, ' ');
    const nameStr = name.padEnd(32, ' ');
    const statusStr = 'active   ';

    // Find ports assigned to this VLAN in access mode
    const assignedPorts: string[] = [];
    for (const iface of device.getOrderedInterfaces()) {
      if (iface.mode === 'access' && iface.accessVlan === vlanId) {
        assignedPorts.push(iface.shortName);
      }
    }

    const portsStr = assignedPorts.join(', ');
    lines.push(`${vlanStr} ${nameStr} ${statusStr} ${portsStr}`);
  }

  return lines.join('\n');
}

export function formatCiscoPing(dstIp: string, success: boolean, hopsCount: number = 2): string {
  const lines: string[] = [];
  lines.push('Type escape sequence to abort.');
  lines.push(`Sending 5, 100-byte ICMP Echos to ${dstIp}, timeout is 2 seconds:`);

  if (success) {
    lines.push('!!!!!');
    const rtt = Math.max(1, hopsCount * 2);
    lines.push(`Success rate is 100 percent (5/5), round-trip min/avg/max = ${rtt}/${rtt + 2}/${rtt + 5} ms`);
  } else {
    lines.push('.....');
    lines.push('Success rate is 0 percent (0/5)');
  }

  return lines.join('\n');
}

export function formatWindowsPing(dstIp: string, success: boolean): string {
  const lines: string[] = [];
  lines.push(`Pinging ${dstIp} with 32 bytes of data:`);

  if (success) {
    for (let i = 0; i < 4; i++) {
      lines.push(`Reply from ${dstIp}: bytes=32 time=2ms TTL=128`);
    }
    lines.push('');
    lines.push(`Ping statistics for ${dstIp}:`);
    lines.push('    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),');
    lines.push('Approximate round trip times in milli-seconds:');
    lines.push('    Minimum = 2ms, Maximum = 3ms, Average = 2ms');
  } else {
    for (let i = 0; i < 4; i++) {
      lines.push('Request timed out.');
    }
    lines.push('');
    lines.push(`Ping statistics for ${dstIp}:`);
    lines.push('    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),');
  }

  return lines.join('\n');
}
