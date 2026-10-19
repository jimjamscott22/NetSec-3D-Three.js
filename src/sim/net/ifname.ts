export function normalizeInterfaceName(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';

  const subMatch = trimmed.match(/^([^.]+)\.(\d+)$/);
  if (subMatch) {
    const parent = normalizeInterfaceName(subMatch[1]);
    return `${parent}.${subMatch[2]}`;
  }

  const match = trimmed.match(/^([a-zA-Z]+)\s*(\d+(?:\/\d+)*(?:\.\d+)?)$/);
  if (!match) return trimmed;

  const prefix = match[1].toLowerCase();
  const port = match[2];

  if (prefix.startsWith('gi') || prefix.startsWith('g')) {
    return `GigabitEthernet${port}`;
  }
  if (prefix.startsWith('fa') || prefix.startsWith('f')) {
    return `FastEthernet${port}`;
  }
  if (prefix.startsWith('et') || prefix.startsWith('e')) {
    return `Ethernet${port}`;
  }
  return `${match[1]}${port}`;
}

export function toShortName(fullName: string): string {
  const trimmed = fullName.trim();
  const subMatch = trimmed.match(/^([^.]+)\.(\d+)$/);
  if (subMatch) {
    return `${toShortName(subMatch[1])}.${subMatch[2]}`;
  }

  if (trimmed.startsWith('GigabitEthernet')) {
    return `Gi${trimmed.slice(15)}`;
  }
  if (trimmed.startsWith('FastEthernet')) {
    return `Fa${trimmed.slice(12)}`;
  }
  if (trimmed.startsWith('Ethernet')) {
    return `Eth${trimmed.slice(8)}`;
  }
  return trimmed;
}

export function isSubinterfaceName(name: string): boolean {
  return name.includes('.');
}

export function getParentInterfaceName(name: string): string {
  const parts = name.split('.');
  return parts[0];
}

export function getSubinterfaceTag(name: string): number | null {
  const parts = name.split('.');
  if (parts.length > 1) {
    const n = parseInt(parts[1], 10);
    return isNaN(n) ? null : n;
  }
  return null;
}
