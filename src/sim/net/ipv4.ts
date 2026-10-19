export function parseIp(ip: string): number {
  const parts = ip.trim().split('.');
  if (parts.length !== 4) return -1;
  let num = 0;
  for (let i = 0; i < 4; i++) {
    const n = Number(parts[i]);
    if (isNaN(n) || n < 0 || n > 255 || parts[i].trim() === '' || !/^\d+$/.test(parts[i])) {
      return -1;
    }
    num = (num << 8) | n;
  }
  return num >>> 0;
}

export function formatIp(num: number): string {
  const u = num >>> 0;
  return `${(u >>> 24) & 255}.${(u >>> 16) & 255}.${(u >>> 8) & 255}.${u & 255}`;
}

export function isValidIpv4(ip: string): boolean {
  return parseIp(ip) !== -1;
}

export function isValidMask(mask: string): boolean {
  const m = parseIp(mask);
  if (m === -1) return false;
  // Contiguous 1s followed by contiguous 0s
  const inverted = (~m) >>> 0;
  return ((inverted + 1) & inverted) === 0;
}

export function maskToCidr(mask: string): number {
  const m = parseIp(mask);
  if (m === -1) return -1;
  let count = 0;
  for (let i = 31; i >= 0; i--) {
    if ((m & (1 << i)) !== 0) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

export function cidrToMask(cidr: number): string {
  if (cidr < 0 || cidr > 32) return '0.0.0.0';
  if (cidr === 0) return '0.0.0.0';
  const mask = ((0xFFFFFFFF << (32 - cidr)) >>> 0);
  return formatIp(mask);
}

export function sameSubnet(ip1: string, ip2: string, mask: string): boolean {
  const a = parseIp(ip1);
  const b = parseIp(ip2);
  const m = parseIp(mask);
  if (a === -1 || b === -1 || m === -1) return false;
  return ((a & m) >>> 0) === ((b & m) >>> 0);
}

export function networkAddress(ip: string, mask: string): string {
  const a = parseIp(ip);
  const m = parseIp(mask);
  if (a === -1 || m === -1) return '0.0.0.0';
  return formatIp((a & m) >>> 0);
}

export function isHostIpInSubnet(ip: string, net: string, mask: string): boolean {
  return networkAddress(ip, mask) === networkAddress(net, mask);
}
