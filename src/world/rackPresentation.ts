import * as THREE from 'three';

export const RACK_LAYOUT = {
  'Rack A': { x: -1.8, z: 0, accent: '#67e8f9', frontOffset: -0.12 },
  'Rack B': { x: -0.3, z: -1.4, accent: '#fbbf24', frontOffset: -0.82 },
} as const;

export type RackName = keyof typeof RACK_LAYOUT;
export const PORTRAIT_ROOM_SHIFT = 0.05;

export function roomOverview() {
  return {
    pos: new THREE.Vector3(0.42, 3.45, 6.1),
    lookAt: new THREE.Vector3(0, 1.12, 0),
  };
}

export function roomOrbitFov(aspect: number, preset: string, focusedEquipmentId: string) {
  if (aspect >= 1) return 46;
  // In portrait the full cabinet needs to fit between the mission HUD and the camera tools.
  if ((preset === 'rack_a' || preset === 'rack_b') && !focusedEquipmentId) return 83;
  if (focusedEquipmentId || preset === 'overview') {
    return Math.min(104, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(31)) / aspect)));
  }
  return 46;
}

export function frontRackView(rack: RackName) {
  const { x, z, frontOffset } = RACK_LAYOUT[rack];
  return {
    pos: new THREE.Vector3(x + frontOffset, 1.62, z + 4.45),
    lookAt: new THREE.Vector3(x, 1.53, z + 0.4),
  };
}

export function rearRackView(rack: RackName) {
  const { x, z } = RACK_LAYOUT[rack];
  return {
    pos: new THREE.Vector3(x - 0.2, 1.76, z - 1.5),
    lookAt: new THREE.Vector3(x, 1.5, z - 0.36),
  };
}

export function rackUnitView(rack: RackName, y: number) {
  const { x, z } = RACK_LAYOUT[rack];
  return {
    pos: new THREE.Vector3(x + (rack === 'Rack B' ? -0.38 : 0.1), Math.max(0.8, y + 0.17), z + 2.12),
    lookAt: new THREE.Vector3(x, y + 0.035, z + 0.5),
  };
}

export function rackUnitAccent(model: string) {
  if (/^(router|switch|patch|fiber)_/.test(model)) return '#67e8f9';
  if (/^(server|storage)/.test(model)) return '#a5b4fc';
  if (/^(ats|ups)_/.test(model)) return '#fbbf24';
  if (/^(hsm|firewall|sensor)_/.test(model)) return '#f9a8d4';
  return '#cbd5e1';
}

export function createRackPlate(label: string, accent: string, width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = Math.round(512 * height / width);
  const context = canvas.getContext('2d');
  if (!context) return null;

  const { width: pixels, height: rows } = canvas;
  context.fillStyle = '#0f172a';
  context.fillRect(0, 0, pixels, rows);
  context.fillStyle = accent;
  context.fillRect(0, 0, 12, rows);
  context.fillRect(12, rows - 3, pixels - 12, 3);
  context.fillStyle = '#f8fafc';
  context.font = `bold ${Math.round(rows * 0.67)}px monospace`;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.fillText(label, (pixels + 12) / 2, rows / 2, pixels - 40);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ map: texture, toneMapped: false }),
  );
}
