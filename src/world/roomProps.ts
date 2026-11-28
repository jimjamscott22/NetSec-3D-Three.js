import * as THREE from 'three';
import { createRackPlate } from './rackPresentation';

type Vec3 = [number, number, number];

export function createRoomProps() {
  const roomProps = new THREE.Group();
  roomProps.name = 'Server room fixtures';

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 16);
  const steel = new THREE.MeshStandardMaterial({ color: 0x576477, metalness: 0.4, roughness: 0.65 });
  const sheet = new THREE.MeshStandardMaterial({ color: 0x364456, metalness: 0.25, roughness: 0.72 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x1a2433, metalness: 0.35, roughness: 0.75 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x090f19, roughness: 0.9 });
  const yellow = new THREE.MeshStandardMaterial({ color: 0xc68b29, metalness: 0.38, roughness: 0.6 });
  const red = new THREE.MeshStandardMaterial({ color: 0xc62828, emissive: 0x661010, emissiveIntensity: 0.22, roughness: 0.38 });
  const green = new THREE.MeshBasicMaterial({ color: 0x7ce2aa });
  const display = new THREE.MeshBasicMaterial({ color: 0x183f3b });
  const materials = [steel, sheet, trim, rubber, yellow, red, green, display];
  const plates: NonNullable<ReturnType<typeof createRackPlate>>[] = [];
  const batches: THREE.InstancedMesh[] = [];

  const fixture = (name: string, position: Vec3) => {
    const group = new THREE.Group();
    group.name = name;
    group.position.set(...position);
    roomProps.add(group);
    return group;
  };

  const part = (group: THREE.Group, material: THREE.Material, position: Vec3, size: Vec3, geometry: THREE.BufferGeometry = boxGeometry) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.scale.set(...size);
    group.add(mesh);
    return mesh;
  };

  const repeat = (group: THREE.Group, material: THREE.Material, size: Vec3, positions: Vec3[], tilt = 0) => {
    const mesh = new THREE.InstancedMesh(boxGeometry, material, positions.length);
    const transform = new THREE.Object3D();
    transform.scale.set(...size);
    transform.rotation.x = tilt;
    positions.forEach((position, index) => {
      transform.position.set(...position);
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
    });
    group.add(mesh);
    batches.push(mesh);
  };

  const label = (group: THREE.Group, text: string, accent: string, position: Vec3, width: number, height: number) => {
    const plate = createRackPlate(text, accent, width, height);
    if (!plate) return;
    plate.position.set(...position);
    group.add(plate);
    plates.push(plate);
  };

  const cooling = fixture('CRAC cooling cabinet', [3.42, 0, -2.96]);
  part(cooling, trim, [0, 0.065, 0], [1.12, 0.13, 0.32]);
  part(cooling, sheet, [0, 1.09, 0], [1.24, 1.96, 0.35]);
  part(cooling, steel, [0, 2.08, 0], [1.27, 0.055, 0.37]);
  part(cooling, steel, [0, 1.85, 0.181], [1.15, 0.26, 0.022]);
  label(cooling, 'CRAC 01', '#7dd3fc', [-0.26, 1.85, 0.196], 0.5, 0.12);
  part(cooling, rubber, [0.35, 1.86, 0.195], [0.22, 0.1, 0.018]);
  part(cooling, display, [0.33, 1.86, 0.207], [0.135, 0.045, 0.005]);
  part(cooling, green, [0.41, 1.86, 0.208], [0.015, 0.015, 0.006]);
  part(cooling, rubber, [0, 1.1, 0.183], [1.08, 1.12, 0.025]);
  repeat(cooling, steel, [1.035, 0.035, 0.035], Array.from({ length: 18 }, (_, i) => [0, 0.59 + i * 0.059, 0.202]), -0.35);
  part(cooling, trim, [0, 0.33, 0.183], [1.08, 0.31, 0.018]);
  part(cooling, steel, [0.38, 0.34, 0.199], [0.19, 0.03, 0.021]);

  const panel = fixture('Electrical distribution and conduit', [-3.57, 0, -3.09]);
  for (const x of [-0.15, 0.15]) {
    part(panel, steel, [x, 2.83, 0.055], [0.046, 1.4, 0.046], cylinderGeometry);
    repeat(panel, trim, [0.09, 0.045, 0.088], [2.45, 3.02, 3.45].map((y) => [x, y, 0.047]));
  }
  part(panel, trim, [0, 1.8, 0.095], [0.76, 0.86, 0.19]);
  part(panel, sheet, [0, 1.8, 0.2], [0.71, 0.8, 0.043]);
  label(panel, 'POWER / PDU', '#fbbf24', [0, 2.01, 0.224], 0.59, 0.11);
  part(panel, yellow, [-0.22, 1.65, 0.227], [0.115, 0.09, 0.012]);
  part(panel, steel, [0.24, 1.72, 0.233], [0.034, 0.14, 0.038]);

  const extinguisher = fixture('Wall-mounted fire extinguisher', [-4.34, 0, -3.09]);
  label(extinguisher, 'FIRE', '#f87171', [0, 1.84, 0.02], 0.32, 0.12);
  part(extinguisher, trim, [0, 1.05, 0.028], [0.25, 0.63, 0.045]);
  part(extinguisher, red, [0, 1.01, 0.18], [0.23, 0.4, 0.23], cylinderGeometry);
  const shoulderGeometry = new THREE.CylinderGeometry(0.29, 0.5, 1, 16);
  part(extinguisher, red, [0, 1.23, 0.18], [0.22, 0.07, 0.22], shoulderGeometry);
  part(extinguisher, steel, [0, 1.3, 0.18], [0.085, 0.1, 0.085], cylinderGeometry);
  part(extinguisher, rubber, [-0.042, 1.365, 0.18], [0.18, 0.028, 0.06]);
  label(extinguisher, 'CO₂', '#f8fafc', [0, 1.04, 0.297], 0.14, 0.067);
  const hose = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.032, 1.31, 0.18),
    new THREE.Vector3(0.15, 1.28, 0.18),
    new THREE.Vector3(0.16, 1.11, 0.186),
    new THREE.Vector3(0.115, 0.94, 0.2),
  ]);
  const hoseGeometry = new THREE.TubeGeometry(hose, 12, 0.016, 6, false);
  extinguisher.add(new THREE.Mesh(hoseGeometry, rubber));

  const ladder = fixture('Overhead ladder tray', [-1.8, 3.16, -0.6]);
  for (const x of [-0.28, 0.28]) {
    part(ladder, yellow, [x, 0, 0], [0.055, 0.1, 5]);
    repeat(ladder, steel, [0.045, 1, 0.045], [-1.92, 1.35].map((z) => [x, 0.54, z]));
  }
  repeat(ladder, yellow, [0.55, 0.035, 0.047], Array.from({ length: 21 }, (_, i) => [0, -0.022, (i - 10) * 0.238]));
  for (const x of [-0.165, -0.11, -0.055]) {
    part(ladder, trim, [x, 0.018, 0], [0.044, 4.94, 0.044], cylinderGeometry).rotation.x = Math.PI / 2;
  }
  repeat(ladder, steel, [0.21, 0.018, 0.045], [-2.1, -1.05, 0, 1.05, 2.1].map((z) => [-0.11, 0.043, z]));

  for (const [x, z] of [[-1.8, 0.92], [-0.3, -0.56], [-3.27, 0.92]]) {
    const grille = fixture('Raised-floor airflow tile', [x, 0, z]);
    part(grille, trim, [0, 0.006, 0], [0.67, 0.014, 0.4]);
    part(grille, rubber, [0, 0.014, 0], [0.607, 0.006, 0.34]);
    repeat(grille, steel, [0.568, 0.007, 0.011], Array.from({ length: 13 }, (_, i) => [0, 0.02, (i - 6) * 0.025]));
  }

  return {
    group: roomProps,
    dispose() {
      roomProps.removeFromParent();
      for (const mesh of batches) mesh.dispose();
      for (const plate of plates) {
        plate.material.map?.dispose();
        plate.material.dispose();
        plate.geometry.dispose();
      }
      for (const material of materials) material.dispose();
      shoulderGeometry.dispose();
      hoseGeometry.dispose();
      cylinderGeometry.dispose();
      boxGeometry.dispose();
    },
  };
}
