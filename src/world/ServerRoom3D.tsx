import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { NetworkSim } from '../sim/core/network_sim';
import { DeviceType } from '../sim/types';
import { sounds } from '../utils/audio';
import { Camera, Eye, HelpCircle, Layers, Radio, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ServerRoom3DProps {
  sim: NetworkSim;
  onOpenTerminal: (deviceId: string) => void;
  selectedPort: string | null;
  onSelectPort: (port: string | null) => void;
  onOpenThreatMap?: () => void;
  onOpenCodeEditor?: (deviceAndPath: string) => void;
}

interface PortMarker {
  portId: string; // "R1:Gi0/0"
  deviceId: string;
  shortName: string;
  position: THREE.Vector3;
  isReserved: boolean;
  mesh?: THREE.Mesh;
  ledMesh?: THREE.Mesh;
}

export const ServerRoom3D: React.FC<ServerRoom3DProps> = ({
  sim,
  onOpenTerminal,
  selectedPort,
  onSelectPort,
  onOpenThreatMap,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredPort, setHoveredPort] = useState<string | null>(null);
  const [hoveredDevice, setHoveredDevice] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Three.js instances refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const portMarkersRef = useRef<PortMarker[]>([]);
  const cableMeshesRef = useRef<THREE.Mesh[]>([]);
  const deviceClickablesRef = useRef<Array<{ deviceId: string; mesh: THREE.Mesh }>>([]);

  // Camera animation target
  const cameraTargetRef = useRef<{ pos: THREE.Vector3; lookAt: THREE.Vector3 }>({
    pos: new THREE.Vector3(0, 3.2, 5.0),
    lookAt: new THREE.Vector3(0, 1.2, 0),
  });

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  }, []);

  // Set camera view preset
  const setCameraPreset = (preset: 'overview' | 'rack_a' | 'desk_1' | 'desk_2' | 'soc') => {
    sounds.playKeyClick();
    if (preset === 'overview') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(0, 3.6, 5.5),
        lookAt: new THREE.Vector3(0, 1.2, 0),
      };
    } else if (preset === 'rack_a') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(-1.4, 1.8, 1.6),
        lookAt: new THREE.Vector3(-1.8, 1.5, 0),
      };
    } else if (preset === 'desk_1') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(1.2, 1.4, 2.0),
        lookAt: new THREE.Vector3(1.6, 1.0, 1.2),
      };
    } else if (preset === 'desk_2') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(1.2, 1.4, -0.8),
        lookAt: new THREE.Vector3(1.6, 1.0, -1.6),
      };
    } else if (preset === 'soc') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(0, 2.2, 2.0),
        lookAt: new THREE.Vector3(0, 2.2, -2.9),
      };
    }
  };

  // Re-sync cables and LEDs when state changes
  const updateCablesAndLeds = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 1. Remove old cable meshes
    for (const mesh of cableMeshesRef.current) {
      scene.remove(mesh);
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => m.dispose());
      } else {
        mesh.material.dispose();
      }
    }
    cableMeshesRef.current = [];

    // 2. Build cables for each active link
    for (const link of sim.links) {
      const markerA = portMarkersRef.current.find((p) => p.portId === link.a);
      const markerB = portMarkersRef.current.find((p) => p.portId === link.b);
      if (!markerA || !markerB) continue;

      const pA = markerA.position.clone();
      const pB = markerB.position.clone();

      // Create catenary sag curve
      const midPoint = pA.clone().lerp(pB, 0.5);
      const dist = pA.distanceTo(pB);
      // Droop downwards under gravity
      midPoint.y -= Math.min(0.6, dist * 0.25);

      const curve = new THREE.CatmullRomCurve3([pA, midPoint, pB]);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.018, 8, false);

      // Color cables: blue for general, cyan for trunk, amber for PC
      let cableColor = 0x3b82f6; // blue
      if (link.a.includes('Gi0/1') || link.b.includes('Gi0/1')) {
        cableColor = 0x06b6d4; // cyan for trunk
      } else if (link.a.includes('PC') || link.b.includes('PC')) {
        cableColor = 0xf59e0b; // amber
      }

      const tubeMat = new THREE.MeshStandardMaterial({
        color: cableColor,
        roughness: 0.4,
        metalness: 0.1,
      });

      const cableMesh = new THREE.Mesh(tubeGeo, tubeMat);
      cableMesh.castShadow = true;
      scene.add(cableMesh);
      cableMeshesRef.current.push(cableMesh);
    }

    // 3. Update Port LED colors
    for (const marker of portMarkersRef.current) {
      if (!marker.ledMesh) continue;

      const [devId, ifName] = marker.portId.split(':');
      const dev = sim.devices.get(devId);
      const iface = dev?.getInterface(ifName);

      const ledMat = marker.ledMesh.material as THREE.MeshStandardMaterial;

      if (marker.isReserved) {
        // Reserved port has distinct yellow dust cap
        ledMat.color.setHex(0xeab308);
        ledMat.emissive.setHex(0x713f12);
      } else if (!iface?.peer) {
        // Disconnected -> dark grey / off
        ledMat.color.setHex(0x1e293b);
        ledMat.emissive.setHex(0x000000);
      } else if (!iface.adminUp) {
        // Cabled but interface admin shut down -> Amber
        ledMat.color.setHex(0xf59e0b);
        ledMat.emissive.setHex(0xd97706);
      } else if (iface.operUp) {
        // Connected & oper-up -> Bright Green
        ledMat.color.setHex(0x22c55e);
        ledMat.emissive.setHex(0x16a34a);
      } else {
        // Link exists but remote end down -> Amber
        ledMat.color.setHex(0xf59e0b);
        ledMat.emissive.setHex(0xb45309);
      }
    }
  }, [sim]);

  useEffect(() => {
    updateCablesAndLeds();
  }, [sim.links, updateCablesAndLeds]);

  // Setup Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070b14);
    scene.fog = new THREE.FogExp2(0x070b14, 0.09);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 3.6, 5.5);
    camera.lookAt(0, 1.2, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x384252, 1.8);
    scene.add(ambientLight);

    const ceilingLight1 = new THREE.PointLight(0xa5f3fc, 2.5, 12);
    ceilingLight1.position.set(-1.8, 3.2, 0);
    scene.add(ceilingLight1);

    const ceilingLight2 = new THREE.PointLight(0xdbeafe, 2.2, 12);
    ceilingLight2.position.set(1.5, 3.2, 0);
    scene.add(ceilingLight2);

    const wallBlueGlow = new THREE.PointLight(0x0284c7, 3.5, 8);
    wallBlueGlow.position.set(0, 2.4, -2.8);
    scene.add(wallBlueGlow);

    // --- ENVIRONMENT ARCHITECTURE ---

    // Floor
    const floorGeo = new THREE.PlaneGeometry(14, 14);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.35,
      metalness: 0.6,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Floor grid lines
    const grid = new THREE.GridHelper(14, 28, 0x1e293b, 0x0f172a);
    grid.position.y = 0.005;
    scene.add(grid);

    // Back Wall
    const backWallGeo = new THREE.BoxGeometry(14, 5, 0.2);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.8 });
    const backWall = new THREE.Mesh(backWallGeo, wallMat);
    backWall.position.set(0, 2.5, -3.0);
    scene.add(backWall);

    // Left Wall
    const leftWallGeo = new THREE.BoxGeometry(0.2, 5, 14);
    const leftWall = new THREE.Mesh(leftWallGeo, wallMat);
    leftWall.position.set(-4.5, 2.5, 0);
    scene.add(leftWall);

    // Ceiling
    const ceilingGeo = new THREE.PlaneGeometry(14, 14);
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x050810, roughness: 0.9 });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.y = 4.0;
    ceiling.rotation.x = Math.PI / 2;
    scene.add(ceiling);

    // Ceiling Light Panels
    for (const zPos of [-1.5, 1.5]) {
      const panelGeo = new THREE.BoxGeometry(1.2, 0.05, 2.4);
      const panelMat = new THREE.MeshBasicMaterial({ color: 0xf0fdf4 });
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(-1.8, 3.98, zPos);
      scene.add(panel);

      const panel2 = new THREE.Mesh(panelGeo, panelMat);
      panel2.position.set(1.5, 3.98, zPos);
      scene.add(panel2);
    }

    // Wall SOC Threat Monitor
    const socFrameGeo = new THREE.BoxGeometry(3.6, 1.9, 0.1);
    const socFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 });
    const socFrame = new THREE.Mesh(socFrameGeo, socFrameMat);
    socFrame.position.set(0, 2.4, -2.88);
    scene.add(socFrame);

    const socScreenGeo = new THREE.PlaneGeometry(3.4, 1.7);
    const socScreenMat = new THREE.MeshBasicMaterial({ color: 0x0369a1 });
    const socScreen = new THREE.Mesh(socScreenGeo, socScreenMat);
    socScreen.position.set(0, 2.4, -2.82);
    scene.add(socScreen);

    // --- SERVER RACKS ---
    const buildRack = (x: number, z: number, rackName: string) => {
      const rackGroup = new THREE.Group();
      rackGroup.position.set(x, 0, z);

      // 4 Upright steel pillars
      const pillarGeo = new THREE.BoxGeometry(0.08, 2.8, 0.08);
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });

      const p1 = new THREE.Mesh(pillarGeo, pillarMat);
      p1.position.set(-0.46, 1.4, -0.46);
      rackGroup.add(p1);

      const p2 = new THREE.Mesh(pillarGeo, pillarMat);
      p2.position.set(0.46, 1.4, -0.46);
      rackGroup.add(p2);

      const p3 = new THREE.Mesh(pillarGeo, pillarMat);
      p3.position.set(-0.46, 1.4, 0.46);
      rackGroup.add(p3);

      const p4 = new THREE.Mesh(pillarGeo, pillarMat);
      p4.position.set(0.46, 1.4, 0.46);
      rackGroup.add(p4);

      // Top and bottom plates
      const plateGeo = new THREE.BoxGeometry(1.04, 0.08, 1.04);
      const topPlate = new THREE.Mesh(plateGeo, pillarMat);
      topPlate.position.set(0, 2.76, 0);
      rackGroup.add(topPlate);

      const botPlate = new THREE.Mesh(plateGeo, pillarMat);
      botPlate.position.set(0, 0.04, 0);
      rackGroup.add(botPlate);

      // Perforated side mesh panels
      const sidePanelGeo = new THREE.BoxGeometry(0.02, 2.6, 0.96);
      const sidePanelMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.7,
        wireframe: true,
      });
      const leftSide = new THREE.Mesh(sidePanelGeo, sidePanelMat);
      leftSide.position.set(-0.48, 1.4, 0);
      rackGroup.add(leftSide);

      const rightSide = new THREE.Mesh(sidePanelGeo, sidePanelMat);
      rightSide.position.set(0.48, 1.4, 0);
      rackGroup.add(rightSide);

      // Rack label
      scene.add(rackGroup);
      return rackGroup;
    };

    buildRack(-1.8, 0, 'Rack A');
    buildRack(-1.8, -1.4, 'Rack B');

    // --- WORKSTATION DESKS ---
    const buildDesk = (x: number, z: number, deskId: string) => {
      const deskGroup = new THREE.Group();
      deskGroup.position.set(x, 0, z);

      // Tabletop
      const topGeo = new THREE.BoxGeometry(1.4, 0.06, 0.9);
      const deskMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
      const top = new THREE.Mesh(topGeo, deskMat);
      top.position.set(0, 0.8, 0);
      deskGroup.add(top);

      // Legs
      const legGeo = new THREE.BoxGeometry(0.06, 0.8, 0.06);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 });
      for (const [lx, lz] of [
        [-0.62, -0.38],
        [0.62, -0.38],
        [-0.62, 0.38],
        [0.62, 0.38],
      ]) {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(lx, 0.4, lz);
        deskGroup.add(leg);
      }

      // Computer Monitor
      const standGeo = new THREE.BoxGeometry(0.16, 0.25, 0.16);
      const stand = new THREE.Mesh(standGeo, legMat);
      stand.position.set(0, 0.93, -0.15);
      deskGroup.add(stand);

      const monGeo = new THREE.BoxGeometry(0.7, 0.45, 0.05);
      const mon = new THREE.Mesh(monGeo, legMat);
      mon.position.set(0, 1.15, -0.15);
      deskGroup.add(mon);

      const monScreenGeo = new THREE.PlaneGeometry(0.64, 0.39);
      const screenMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const screen = new THREE.Mesh(monScreenGeo, screenMat);
      screen.position.set(0, 1.15, -0.12);
      deskGroup.add(screen);

      // Keyboard
      const kbGeo = new THREE.BoxGeometry(0.42, 0.02, 0.14);
      const kb = new THREE.Mesh(kbGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a }));
      kb.position.set(0, 0.83, 0.15);
      deskGroup.add(kb);

      // Tower Case
      const towerGeo = new THREE.BoxGeometry(0.22, 0.46, 0.48);
      const tower = new THREE.Mesh(towerGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 }));
      tower.position.set(0.5, 0.45, 0);
      deskGroup.add(tower);

      scene.add(deskGroup);
      return { deskGroup, tower, screen };
    };

    const desk1 = buildDesk(1.6, 1.2, 'desk_1');
    const desk2 = buildDesk(1.6, -1.2, 'desk_2');

    // --- INSTANTIATE HARDWARE DEVICES IN RACKS / DESKS ---
    const markers: PortMarker[] = [];
    const clickables: Array<{ deviceId: string; mesh: THREE.Mesh }> = [];

    // 1. Router R1 (at Rack A, slot 1: y = 2.1)
    const routerGeo = new THREE.BoxGeometry(0.88, 0.14, 0.7);
    const routerMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.3 });
    const routerMesh = new THREE.Mesh(routerGeo, routerMat);
    routerMesh.position.set(-1.8, 2.15, 0);
    scene.add(routerMesh);
    clickables.push({ deviceId: 'R1', mesh: routerMesh });

    // R1 Interfaces: Gi0/0 and Gi0/1
    const r1Ports = [
      { name: 'Gi0/0', canonical: 'GigabitEthernet0/0', x: -1.8 - 0.15, isRes: false },
      { name: 'Gi0/1', canonical: 'GigabitEthernet0/1', x: -1.8 + 0.15, isRes: true }, // Reserved port in M1
    ];

    for (const p of r1Ports) {
      const portId = `R1:${p.canonical}`;
      const isReserved = sim.reservedPorts.has(portId);

      // Socket housing
      const sockGeo = new THREE.BoxGeometry(0.05, 0.04, 0.03);
      const sockMat = new THREE.MeshStandardMaterial({ color: isReserved ? 0xeab308 : 0x0f172a });
      const sockMesh = new THREE.Mesh(sockGeo, sockMat);
      sockMesh.position.set(p.x, 2.15, 0.36);
      scene.add(sockMesh);

      // Port LED
      const ledGeo = new THREE.SphereGeometry(0.012, 8, 8);
      const ledMat = new THREE.MeshStandardMaterial({
        color: isReserved ? 0xeab308 : 0x1e293b,
        emissive: isReserved ? 0x713f12 : 0x000000,
      });
      const ledMesh = new THREE.Mesh(ledGeo, ledMat);
      ledMesh.position.set(p.x, 2.18, 0.365);
      scene.add(ledMesh);

      markers.push({
        portId,
        deviceId: 'R1',
        shortName: p.name,
        position: new THREE.Vector3(p.x, 2.15, 0.37),
        isReserved,
        mesh: sockMesh,
        ledMesh,
      });
    }

    // 2. Switch S1 (at Rack A, slot 3: y = 1.7)
    const switchGeo = new THREE.BoxGeometry(0.88, 0.12, 0.65);
    const switchMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.4 });
    const switchMesh = new THREE.Mesh(switchGeo, switchMat);
    switchMesh.position.set(-1.8, 1.75, 0);
    scene.add(switchMesh);
    clickables.push({ deviceId: 'S1', mesh: switchMesh });

    // Switch Ports: Fa0/1, Fa0/2, Fa0/3, Fa0/4, Fa0/5, ..., Gi0/1
    const switchKeyPorts = [
      { name: 'Fa0/1', canonical: 'FastEthernet0/1', x: -1.8 - 0.32 },
      { name: 'Fa0/2', canonical: 'FastEthernet0/2', x: -1.8 - 0.24 },
      { name: 'Fa0/3', canonical: 'FastEthernet0/3', x: -1.8 - 0.16 },
      { name: 'Fa0/4', canonical: 'FastEthernet0/4', x: -1.8 - 0.08 },
      { name: 'Fa0/5', canonical: 'FastEthernet0/5', x: -1.8 + 0.0 },
      { name: 'Gi0/1', canonical: 'GigabitEthernet0/1', x: -1.8 + 0.28 },
    ];

    for (const p of switchKeyPorts) {
      const portId = `S1:${p.canonical}`;
      const isReserved = sim.reservedPorts.has(portId);

      const sockGeo = new THREE.BoxGeometry(0.04, 0.035, 0.03);
      const sockMat = new THREE.MeshStandardMaterial({ color: isReserved ? 0xeab308 : 0x0f172a });
      const sockMesh = new THREE.Mesh(sockGeo, sockMat);
      sockMesh.position.set(p.x, 1.75, 0.33);
      scene.add(sockMesh);

      const ledGeo = new THREE.SphereGeometry(0.01, 8, 8);
      const ledMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
      const ledMesh = new THREE.Mesh(ledGeo, ledMat);
      ledMesh.position.set(p.x, 1.78, 0.335);
      scene.add(ledMesh);

      markers.push({
        portId,
        deviceId: 'S1',
        shortName: p.name,
        position: new THREE.Vector3(p.x, 1.75, 0.34),
        isReserved,
        mesh: sockMesh,
        ledMesh,
      });
    }

    // 3. Web Server WEB1 (at Rack A, slot 5: y = 1.35)
    const serverGeo = new THREE.BoxGeometry(0.88, 0.12, 0.75);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 });
    const serverMesh = new THREE.Mesh(serverGeo, serverMat);
    serverMesh.position.set(-1.8, 1.35, 0);
    scene.add(serverMesh);
    clickables.push({ deviceId: 'WEB1', mesh: serverMesh });

    // WEB1 Port Eth0
    const webPortId = 'WEB1:Ethernet0';
    const webSockGeo = new THREE.BoxGeometry(0.04, 0.035, 0.03);
    const webSockMesh = new THREE.Mesh(webSockGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    webSockMesh.position.set(-1.8 + 0.15, 1.35, 0.38);
    scene.add(webSockMesh);

    const webLedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    webLedMesh.position.set(-1.8 + 0.15, 1.38, 0.385);
    scene.add(webLedMesh);

    markers.push({
      portId: webPortId,
      deviceId: 'WEB1',
      shortName: 'Eth0',
      position: new THREE.Vector3(-1.8 + 0.15, 1.35, 0.39),
      isReserved: false,
      mesh: webSockMesh,
      ledMesh: webLedMesh,
    });

    // 4. PC-A / SOC-PC on Desk 1
    const pcAPortId = sim.devices.has('SOC-PC')
      ? 'SOC-PC:Ethernet0'
      : sim.devices.has('PC-1')
      ? 'PC-1:Ethernet0'
      : 'PC-A:Ethernet0';

    const pcAId = sim.devices.has('SOC-PC') ? 'SOC-PC' : sim.devices.has('PC-1') ? 'PC-1' : 'PC-A';
    clickables.push({ deviceId: pcAId, mesh: desk1.screen });
    clickables.push({ deviceId: pcAId, mesh: desk1.tower });

    const pcASockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    pcASockMesh.position.set(1.6 + 0.5, 0.45, 1.2 + 0.25);
    scene.add(pcASockMesh);

    const pcALedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    pcALedMesh.position.set(1.6 + 0.5, 0.48, 1.2 + 0.255);
    scene.add(pcALedMesh);

    markers.push({
      portId: pcAPortId,
      deviceId: pcAId,
      shortName: 'Eth0',
      position: new THREE.Vector3(1.6 + 0.5, 0.45, 1.2 + 0.26),
      isReserved: false,
      mesh: pcASockMesh,
      ledMesh: pcALedMesh,
    });

    // 5. PC-B on Desk 2
    if (sim.devices.has('PC-B')) {
      const pcBPortId = 'PC-B:Ethernet0';
      clickables.push({ deviceId: 'PC-B', mesh: desk2.screen });
      clickables.push({ deviceId: 'PC-B', mesh: desk2.tower });

      const pcBSockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
      pcBSockMesh.position.set(1.6 + 0.5, 0.45, -1.2 + 0.25);
      scene.add(pcBSockMesh);

      const pcBLedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      pcBLedMesh.position.set(1.6 + 0.5, 0.48, -1.2 + 0.255);
      scene.add(pcBLedMesh);

      markers.push({
        portId: pcBPortId,
        deviceId: 'PC-B',
        shortName: 'Eth0',
        position: new THREE.Vector3(1.6 + 0.5, 0.45, -1.2 + 0.26),
        isReserved: false,
        mesh: pcBSockMesh,
        ledMesh: pcBLedMesh,
      });
    }

    portMarkersRef.current = markers;
    deviceClickablesRef.current = clickables;

    // Initial render of cables and LEDs
    updateCablesAndLeds();

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check port markers
      const portMeshes = markers.map((m) => m.mesh).filter((m): m is THREE.Mesh => !!m);
      const portHits = raycaster.intersectObjects(portMeshes);
      if (portHits.length > 0) {
        const hitMesh = portHits[0].object as THREE.Mesh;
        const found = markers.find((m) => m.mesh === hitMesh);
        if (found) {
          setHoveredPort(found.portId);
          setHoveredDevice(null);
          container.style.cursor = 'pointer';
          return;
        }
      }

      // Check device clickables
      const devMeshes = clickables.map((c) => c.mesh);
      const devHits = raycaster.intersectObjects(devMeshes);
      if (devHits.length > 0) {
        const hitMesh = devHits[0].object as THREE.Mesh;
        const found = clickables.find((c) => c.mesh === hitMesh);
        if (found) {
          setHoveredDevice(found.deviceId);
          setHoveredPort(null);
          container.style.cursor = 'pointer';
          return;
        }
      }

      setHoveredPort(null);
      setHoveredDevice(null);
      container.style.cursor = 'default';
    };

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // 1. Check Port Click for cabling
      const portMeshes = markers.map((m) => m.mesh).filter((m): m is THREE.Mesh => !!m);
      const portHits = raycaster.intersectObjects(portMeshes);
      if (portHits.length > 0) {
        const hitMesh = portHits[0].object as THREE.Mesh;
        const found = markers.find((m) => m.mesh === hitMesh);
        if (found) {
          handlePortClick(found);
          return;
        }
      }

      // 2. Check Device Click for opening terminal
      const devMeshes = clickables.map((c) => c.mesh);
      const devHits = raycaster.intersectObjects(devMeshes);
      if (devHits.length > 0) {
        const hitMesh = devHits[0].object as THREE.Mesh;
        const found = clickables.find((c) => c.mesh === hitMesh);
        if (found) {
          sounds.playKeyClick();
          onOpenTerminal(found.deviceId);
          return;
        }
      }

      // 3. Check Wall Monitor click for Threat Map
      const socHits = raycaster.intersectObject(socScreen);
      if (socHits.length > 0 && onOpenThreatMap) {
        sounds.playKeyClick();
        onOpenThreatMap();
        return;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Mouse drag for smooth orbit rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseDrag = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      const target = cameraTargetRef.current;
      const radius = target.pos.distanceTo(target.lookAt);

      // Orbit around lookAt point
      const offset = target.pos.clone().sub(target.lookAt);
      const spherical = new THREE.Spherical().setFromVector3(offset);

      spherical.theta -= deltaX * 0.006;
      spherical.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.006));

      offset.setFromSpherical(spherical);
      target.pos.copy(target.lookAt).add(offset);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const target = cameraTargetRef.current;
      const dir = target.pos.clone().sub(target.lookAt).normalize();
      const dist = target.pos.distanceTo(target.lookAt);
      const newDist = Math.max(1.2, Math.min(10.0, dist + e.deltaY * 0.005));
      target.pos.copy(target.lookAt).add(dir.multiplyScalar(newDist));
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseDrag);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth camera interpolation towards target
      if (cameraRef.current) {
        const cam = cameraRef.current;
        const target = cameraTargetRef.current;
        cam.position.lerp(target.pos, 0.08);

        // Compute current lookAt direction
        const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion).add(cam.position);
        currentLookAt.lerp(target.lookAt, 0.08);
        cam.lookAt(currentLookAt);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseDrag);
      container.removeEventListener('wheel', handleWheel);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [sim, onOpenTerminal, onOpenThreatMap, updateCablesAndLeds]);

  // Handle clicking a port for cabling interaction
  const handlePortClick = (marker: PortMarker) => {
    sounds.playKeyClick();

    if (marker.isReserved) {
      sounds.playErrorBeep();
      showToast(`⚠️ Port ${marker.portId} is reserved (dust cap attached). Cabling blocked.`);
      return;
    }

    const [devId, ifName] = marker.portId.split(':');
    const dev = sim.devices.get(devId);
    const iface = dev?.getInterface(ifName);

    // If port already has a cable connected, clicking it unplugs it!
    if (iface?.peer) {
      const res = sim.disconnectLink(marker.portId);
      if (res.ok) {
        sounds.playCableSnap();
        showToast(`🔌 Unplugged cable from ${marker.portId}. Cable returned to inventory.`);
        onSelectPort(null);
        updateCablesAndLeds();
      } else {
        sounds.playErrorBeep();
        showToast(`⚠️ ${res.reason || 'Cannot unplug cable'}`);
      }
      return;
    }

    // Port is free
    if (!selectedPort) {
      // First click: pick up cable
      if (sim.spareCablesCount <= 0) {
        sounds.playErrorBeep();
        showToast('⚠️ No spare cables remaining in inventory.');
        return;
      }
      onSelectPort(marker.portId);
      showToast(`Selected port ${marker.portId}. Now click a destination port to plug in cable.`);
    } else {
      // Second click: connect cable between selectedPort and marker.portId
      if (selectedPort === marker.portId) {
        onSelectPort(null);
        showToast('Cabling cancelled.');
        return;
      }

      const res = sim.connectLink(selectedPort, marker.portId);
      if (res.ok) {
        sounds.playCableSnap();
        showToast(`✅ Connected Cat6 cable: ${selectedPort} ↔ ${marker.portId}`);
        onSelectPort(null);
        updateCablesAndLeds();
      } else {
        sounds.playErrorBeep();
        showToast(`❌ Cabling rejected: ${res.reason || 'Invalid connection'}`);
        onSelectPort(null);
      }
    }
  };

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Camera Navigation Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 shadow-xl text-xs font-medium text-slate-300">
        <span className="px-2 py-1 text-slate-400 flex items-center gap-1">
          <Camera className="w-3.5 h-3.5 text-cyan-400" /> Camera:
        </span>
        <button
          onClick={() => setCameraPreset('overview')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition flex items-center gap-1"
        >
          Overview
        </button>
        <button
          onClick={() => setCameraPreset('rack_a')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition flex items-center gap-1"
        >
          Rack A (Gear)
        </button>
        <button
          onClick={() => setCameraPreset('desk_1')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition flex items-center gap-1"
        >
          Desk 1 (PC-A)
        </button>
        {sim.devices.has('PC-B') && (
          <button
            onClick={() => setCameraPreset('desk_2')}
            className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition flex items-center gap-1"
          >
            Desk 2 (PC-B)
          </button>
        )}
        <button
          onClick={() => setCameraPreset('soc')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition flex items-center gap-1"
        >
          Wall SOC Screen
        </button>
      </div>

      {/* Cabling Status Bar */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-300">
            Spare Cables: <strong className="text-cyan-300 font-mono text-sm">{sim.spareCablesCount}</strong>
          </span>
        </div>

        {selectedPort && (
          <div className="flex items-center gap-2 pl-3 border-l border-slate-700">
            <span className="text-amber-300 animate-bounce">Holding cable from:</span>
            <span className="font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-semibold">
              {selectedPort}
            </span>
            <button
              onClick={() => onSelectPort(null)}
              className="text-slate-400 hover:text-red-400 ml-1 px-1.5 py-0.5 rounded bg-slate-800 hover:bg-red-950/60 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Hover Info Tooltip */}
      {hoveredPort && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <div>
            <div className="text-cyan-300 font-mono font-semibold">{hoveredPort}</div>
            <div className="text-slate-400 text-[11px]">
              {sim.reservedPorts.has(hoveredPort)
                ? '⚠️ Reserved Port (Dust Cap Attached)'
                : 'Click to attach / disconnect cable'}
            </div>
          </div>
        </div>
      )}

      {hoveredDevice && !hoveredPort && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div>
            <div className="text-emerald-300 font-semibold">{hoveredDevice}</div>
            <div className="text-slate-400 text-[11px]">Click device or screen to open terminal console</div>
          </div>
        </div>
      )}

      {/* Floating Instructions Pill */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400">
        <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
        <span>Drag mouse to rotate room • Scroll to zoom • Click ports to cable • Click racks/desks to open console</span>
      </div>

      {/* Quick Devices Console Opener */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl text-xs">
        <span className="px-2 text-slate-400 text-[11px]">Open Console:</span>
        {Array.from(sim.devices.values()).map((dev) => (
          <button
            key={dev.id}
            onClick={() => {
              sounds.playKeyClick();
              onOpenTerminal(dev.id);
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-200 border border-slate-700/60 transition font-mono font-medium"
          >
            {dev.hostname || dev.id}
          </button>
        ))}
      </div>

      {/* Interactive Toast Notifications */}
      {toastMessage && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2.5 rounded-xl bg-slate-900/95 backdrop-blur-lg border border-cyan-500/50 text-xs text-cyan-200 shadow-2xl animate-fade-in flex items-center gap-2.5 max-w-lg text-center">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
