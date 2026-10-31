import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { NetworkSim } from '../sim/core/network_sim';
import { sounds } from '../utils/audio';
import {
  Camera,
  Layers,
  Palette,
  Terminal,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Cpu,
  HardDrive,
  Activity,
  Sliders,
  Check,
  RotateCcw,
  Sparkles,
  Zap,
  Wind,
  Power,
  ShieldAlert,
  Server,
  Cable,
  FolderOpen,
  Info,
  Radio,
  SlidersHorizontal,
} from 'lucide-react';

interface ServerRoom3DProps {
  sim: NetworkSim;
  /** Rebuilds port sockets when the mission changes (different devices). */
  scenarioId: string;
  /** Changes whenever sim state changes (objective re-evaluation), so cables/LEDs redraw. */
  simRevision?: unknown;
  onOpenTerminal: (deviceId: string) => void;
  selectedPort: string | null;
  onSelectPort: (port: string | null) => void;
  onOpenThreatMap?: () => void;
  onOpenCodeEditor?: (deviceAndPath: string) => void;
}

interface PortMarker {
  portId: string; // canonical, e.g. "R1:GigabitEthernet0/0"
  deviceId: string;
  shortName: string;
  position: THREE.Vector3;
  isReserved: boolean;
  mesh?: THREE.Mesh;
  ledMesh?: THREE.Mesh;
}

interface EquipmentLabelTarget {
  id: string;
  object: THREE.Object3D;
  offset: THREE.Vector3;
}

export interface CableColorOption {
  id: string;
  label: string;
  role: string;
  hex: number;
  css: string;
}

export const CABLE_COLORS: CableColorOption[] = [
  { id: 'blue', label: 'Cat6 Blue', role: 'General LAN / Access', hex: 0x2563eb, css: '#2563eb' },
  { id: 'cyan', label: 'Aqua Cyan', role: '802.1Q Trunk / Uplink', hex: 0x06b6d4, css: '#06b6d4' },
  { id: 'amber', label: 'Amber Gold', role: 'Workstation / Sales VLAN 20', hex: 0xf59e0b, css: '#f59e0b' },
  { id: 'green', label: 'Emerald', role: 'Default Gateway / Core', hex: 0x10b981, css: '#10b981' },
  { id: 'red', label: 'Crimson Red', role: 'Firewall / DMZ Security', hex: 0xef4444, css: '#ef4444' },
  { id: 'purple', label: 'SOC Purple', role: 'SPAN / IDS Tap Sensor', hex: 0xa855f7, css: '#a855f7' },
  { id: 'orange', label: 'Fiber Orange', role: 'SAN Storage Array', hex: 0xea580c, css: '#ea580c' },
  { id: 'slate', label: 'Stealth Slate', role: 'Out-of-Band / IPMI Mgmt', hex: 0x475569, css: '#475569' },
  { id: 'yellow', label: 'High-Vis Yellow', role: 'Restricted / Audit Zone', hex: 0xeab308, css: '#eab308' },
  { id: 'white', label: 'Polar White', role: 'Inter-Rack Backbone Tie', hex: 0xf8fafc, css: '#f8fafc' },
];

export interface RackUnitSpec {
  id: string;
  name: string;
  rack: 'Rack A' | 'Rack B';
  slot: number;
  uHeight: number;
  y: number;
  zBase: number;
  color: number;
  canSlide: boolean;
  canTerminal: boolean;
  model: string;
  specs: string;
  isKvm?: boolean;
  driveCount?: number;
}

export const ALL_RACK_UNITS: RackUnitSpec[] = [
  // --- RACK A UNITS ---
  {
    id: 'KVM1',
    name: '1U Master Rack Console (KVM Drawer)',
    rack: 'Rack A',
    slot: 1,
    uHeight: 1,
    y: 2.62,
    zBase: 0,
    color: 0x0f172a,
    canSlide: true,
    canTerminal: false,
    model: 'kvm_1u',
    specs: '17" TFT 1080p Fold-Up LCD • 104-Key Chiclet Keyboard • USB/VGA Hub',
    isKvm: true,
  },
  {
    id: 'BRUSH_A',
    name: '1U Cable Management Duct',
    rack: 'Rack A',
    slot: 2,
    uHeight: 1,
    y: 2.44,
    zBase: 0,
    color: 0x0f172a,
    canSlide: false,
    canTerminal: false,
    model: 'duct_1u',
    specs: 'Horizontal high-density nylon brush passthrough with strain relief',
  },
  {
    id: 'R1',
    name: 'Router R1 (Cisco 2901 ISR)',
    rack: 'Rack A',
    slot: 3,
    uHeight: 1,
    y: 2.22,
    zBase: 0,
    color: 0x0284c7,
    canSlide: true,
    canTerminal: true,
    model: 'router_2port',
    specs: 'Cisco 2901 Integrated Services Router • 2x GigabitEthernet • Cisco IOS 15.1',
  },
  {
    id: 'PATCH_A',
    name: '1U 24-Port Cat6 Patch Bay',
    rack: 'Rack A',
    slot: 4,
    uHeight: 1,
    y: 2.02,
    zBase: 0,
    color: 0x1e293b,
    canSlide: false,
    canTerminal: false,
    model: 'patch_24',
    specs: '24-Port RJ45 Cat6 TIA-568A/B Unshielded 110 Punchdown Bay',
  },
  {
    id: 'FIBER_A',
    name: '1U OM4 LC Duplex Fiber Enclosure',
    rack: 'Rack A',
    slot: 5,
    uHeight: 1,
    y: 1.86,
    zBase: 0,
    color: 0x082f49,
    canSlide: false,
    canTerminal: false,
    model: 'fiber_1u',
    specs: '12x LC Duplex Aqua Couplers • 50/125µm Multimode 100G Trunking',
  },
  {
    id: 'S1',
    name: 'Switch S1 (Cisco Catalyst 2960)',
    rack: 'Rack A',
    slot: 6,
    uHeight: 1,
    y: 1.68,
    zBase: 0,
    color: 0x334155,
    canSlide: true,
    canTerminal: true,
    model: 'switch_24',
    specs: 'Cisco Catalyst 2960-24TT • 24x 10/100 + 2x 1000BASE-T • 802.1Q Trunking',
  },
  {
    id: 'WEB1',
    name: 'Server WEB1 (PowerEdge R640)',
    rack: 'Rack A',
    slot: 7,
    uHeight: 1,
    y: 1.48,
    zBase: 0,
    color: 0x1e293b,
    canSlide: true,
    canTerminal: true,
    model: 'server',
    specs: 'Dell PowerEdge R640 1U • 2x Intel Xeon Silver • 64GB DDR4 • Apache/PHP',
    driveCount: 8,
  },
  {
    id: 'HSM1',
    name: 'Hardware Security Module (HSM-100)',
    rack: 'Rack A',
    slot: 8,
    uHeight: 1,
    y: 1.32,
    zBase: 0,
    color: 0x701a75,
    canSlide: true,
    canTerminal: false,
    model: 'hsm_1u',
    specs: 'FIPS 140-2 Level 4 Crypto Processor • Zeroized Tamper Grid • OLED Screen',
  },
  {
    id: 'DB1',
    name: 'Server DB1 (Database Array)',
    rack: 'Rack A',
    slot: 9,
    uHeight: 2,
    y: 1.10,
    zBase: 0,
    color: 0x111827,
    canSlide: true,
    canTerminal: false,
    model: 'server_2u',
    specs: '2U Storage Server • 12x 3.84TB SAS SSD • Hardware RAID 10 • MySQL Core',
    driveCount: 12,
  },
  {
    id: 'FW1',
    name: 'Firewall FW1 (Next-Gen Appliance)',
    rack: 'Rack A',
    slot: 11,
    uHeight: 1,
    y: 0.82,
    zBase: 0,
    color: 0x991b1b,
    canSlide: true,
    canTerminal: false,
    model: 'firewall_1u',
    specs: 'Enterprise State-Inspection Firewall • Deep Packet Inspection • IPS Engine',
  },
  {
    id: 'ENV1',
    name: 'Rack Environmental & Thermal Monitor',
    rack: 'Rack A',
    slot: 12,
    uHeight: 1,
    y: 0.66,
    zBase: 0,
    color: 0x064e3b,
    canSlide: false,
    canTerminal: false,
    model: 'env_1u',
    specs: 'Dual Temp & Humidity Sensors (21.4°C / 42% RH) • 320 CFM Airflow Mon',
  },
  {
    id: 'PDU1',
    name: 'Smart Rack PDU & UPS Battery',
    rack: 'Rack A',
    slot: 13,
    uHeight: 2,
    y: 0.40,
    zBase: 0,
    color: 0x0f172a,
    canSlide: false,
    canTerminal: false,
    model: 'ups_2u',
    specs: 'APC Smart-UPS On-Line 3000VA • Dual Inverter • 208V/120V Pure Sine',
  },

  // --- RACK B UNITS ---
  {
    id: 'BRUSH_B',
    name: '1U Cable Management Duct B',
    rack: 'Rack B',
    slot: 1,
    uHeight: 1,
    y: 2.62,
    zBase: -1.4,
    color: 0x0f172a,
    canSlide: false,
    canTerminal: false,
    model: 'duct_1u',
    specs: 'Rack B Top-of-rack horizontal cable management duct',
  },
  {
    id: 'R2',
    name: 'Core Router R2 (Gateway B)',
    rack: 'Rack B',
    slot: 2,
    uHeight: 1,
    y: 2.38,
    zBase: -1.4,
    color: 0x0284c7,
    canSlide: true,
    canTerminal: false,
    model: 'router_2port',
    specs: 'Redundant Core Edge Router • Dual 10G SFP+ Uplinks • BGP Peering',
  },
  {
    id: 'PATCH_B',
    name: '1U Cat6A Shielded Patch Bay',
    rack: 'Rack B',
    slot: 3,
    uHeight: 1,
    y: 2.16,
    zBase: -1.4,
    color: 0x1e293b,
    canSlide: false,
    canTerminal: false,
    model: 'patch_24',
    specs: '24-Port STP Shielded Cat6A Patch Panel • 10GbE Certified',
  },
  {
    id: 'S2',
    name: 'Distribution Switch S2',
    rack: 'Rack B',
    slot: 4,
    uHeight: 1,
    y: 1.94,
    zBase: -1.4,
    color: 0x334155,
    canSlide: true,
    canTerminal: false,
    model: 'switch_24',
    specs: 'Catalyst 3850 24-Port Stackable Distribution Switch • Multigigabit',
  },
  {
    id: 'FIBER_B',
    name: '1U MPO/MTP High-Density Cassette',
    rack: 'Rack B',
    slot: 5,
    uHeight: 1,
    y: 1.76,
    zBase: -1.4,
    color: 0x082f49,
    canSlide: false,
    canTerminal: false,
    model: 'fiber_1u',
    specs: '24-Fiber MPO to LC Breakout Module • Low Insertion Loss',
  },
  {
    id: 'SAN1',
    name: 'SAN Storage Array (Enterprise Vault)',
    rack: 'Rack B',
    slot: 6,
    uHeight: 2,
    y: 1.52,
    zBase: -1.4,
    color: 0x1e293b,
    canSlide: true,
    canTerminal: false,
    model: 'storage_2u',
    specs: '12-Bay Fibre Channel / iSCSI SAN Storage Array • 192TB RAW',
    driveCount: 12,
  },
  {
    id: 'SAN_EXP',
    name: 'SAN High-Density Expansion Shelf',
    rack: 'Rack B',
    slot: 8,
    uHeight: 2,
    y: 1.20,
    zBase: -1.4,
    color: 0x111827,
    canSlide: true,
    canTerminal: false,
    model: 'storage_2u',
    specs: '12-Bay JBOD Expansion Enclosure • 12Gb/s SAS-3 Interconnect',
    driveCount: 12,
  },
  {
    id: 'IDS1',
    name: 'Security Sensor IDS1 (Suricata/Zeek)',
    rack: 'Rack B',
    slot: 10,
    uHeight: 1,
    y: 0.94,
    zBase: -1.4,
    color: 0x7e22ce,
    canSlide: true,
    canTerminal: false,
    model: 'sensor_1u',
    specs: 'Full-Packet Capture & Network Intrusion Detection Appliance • Tap Interface',
  },
  {
    id: 'APP2',
    name: 'Secondary Compute Node APP2',
    rack: 'Rack B',
    slot: 11,
    uHeight: 2,
    y: 0.68,
    zBase: -1.4,
    color: 0x111827,
    canSlide: true,
    canTerminal: false,
    model: 'server_2u',
    specs: 'Kubernetes Worker Node 02 • High-Memory 128GB • Docker Container Host',
    driveCount: 8,
  },
  {
    id: 'UPS2',
    name: 'Backup Battery Array UPS2',
    rack: 'Rack B',
    slot: 13,
    uHeight: 2,
    y: 0.36,
    zBase: -1.4,
    color: 0x0f172a,
    canSlide: false,
    canTerminal: false,
    model: 'ups_2u',
    specs: 'Redundant Power Distribution Unit • Phase Balanced • ATS Failover',
  },
];

/** Key for a cable. Uses '|' because device ids such as "PC-B" contain '-'. */
const linkKeyOf = (a: string, b: string) => `${a}|${b}`;

/** True if the port id names this interface, e.g. portIs('S1:GigabitEthernet0/1', 'GigabitEthernet0/1'). */
const portIs = (portId: string, ifName: string) => portId.endsWith(`:${ifName}`);

export const ServerRoom3D: React.FC<ServerRoom3DProps> = ({
  sim,
  scenarioId,
  simRevision,
  onOpenTerminal,
  selectedPort,
  onSelectPort,
  onOpenThreatMap,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  // Latest render's state and handlers, read by the long-lived Three.js loop and
  // event listeners so the scene doesn't have to be rebuilt on every state change.
  const liveRef = useRef<any>(null);

  // Interaction state
  const [hoveredPort, setHoveredPort] = useState<string | null>(null);
  const [hoveredDevice, setHoveredDevice] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string>('R1');
  const [slidOutUnitIds, setSlidOutUnitIds] = useState<string[]>(['WEB1']); // WEB1 slid out slightly by default
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Advanced Server Chassis Animations State
  const [ejectedDrives, setEjectedDrives] = useState<Record<string, number[]>>({ WEB1: [2] }); // Drive 2 ejected on WEB1 by default
  const [lidOpenUnits, setLidOpenUnits] = useState<string[]>(['WEB1']); // WEB1 lid open by default to show interior
  const [powerOffUnits, setPowerOffUnits] = useState<string[]>([]);
  const [isTurboFan, setIsTurboFan] = useState<boolean>(false);
  const [isKvmFoldedUp, setIsKvmFoldedUp] = useState<boolean>(true); // KVM monitor upright when slid
  const [explodedSeparation, setExplodedSeparation] = useState<number>(0); // 0 = flush, 1 = fully exploded layers

  // Cable Customization & Inspection State
  const [activeCableColor, setActiveCableColor] = useState<string>('#2563eb');
  const [customCableColors, setCustomCableColors] = useState<Record<string, number>>({});
  const [customCableTension, setCustomCableTension] = useState<number>(0.28); // Catenary sag multiplier
  const [isSignalPulseActive, setIsSignalPulseActive] = useState<boolean>(true);
  const [selectedCableKey, setSelectedCableKey] = useState<string | null>(null);
  const [customHexInput, setCustomHexInput] = useState<string>('#00e5ff');

  // UI Dock state
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [activeDockTab, setActiveDockTab] = useState<'cables' | 'chassis' | 'catalog' | 'cameras'>('chassis');
  const [areEquipmentLabelsVisible, setAreEquipmentLabelsVisible] = useState(false);
  const equipmentLabelsVisibleRef = useRef(false);
  const equipmentLabelTargetsRef = useRef<Map<string, EquipmentLabelTarget>>(new Map());
  const equipmentLabelElementsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  // Three.js instances refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const portMarkersRef = useRef<PortMarker[]>([]);
  const cableMeshesRef = useRef<Array<{ mesh: THREE.Mesh; linkKey: string; curve: THREE.CatmullRomCurve3 }>>([]);
  const pulseSpheresRef = useRef<Array<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }>>([]);
  const unitGroupsRef = useRef<
    Map<
      string,
      {
        group: THREE.Group;
        zBase: number;
        targetZ: number;
        fans: THREE.Mesh[];
        leds: THREE.Mesh[];
        drives: Array<{ mesh: THREE.Mesh; baseZ: number; driveIdx: number }>;
        lidMesh?: THREE.Mesh;
        kvmScreenGroup?: THREE.Group;
        subLayers?: Array<{ mesh: THREE.Object3D; baseY: number; explodeMult: number }>;
        powerLeds: THREE.Mesh[];
      }
    >
  >(new Map());
  const clickableMeshesRef = useRef<Array<{ id: string; mesh: THREE.Mesh; type: 'device' | 'rackUnit' | 'cable' | 'drive' | 'powerBtn'; meta?: any }>>([]);

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

  // Camera view preset handler
  const setCameraPreset = (preset: 'overview' | 'rack_a' | 'rack_b' | 'kvm' | 'desk_1' | 'desk_2' | 'soc') => {
    sounds.playKeyClick();
    if (preset === 'overview') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(0, 3.6, 5.5),
        lookAt: new THREE.Vector3(0, 1.2, 0),
      };
    } else if (preset === 'rack_a') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(-1.1, 1.8, 1.5),
        lookAt: new THREE.Vector3(-1.8, 1.5, 0),
      };
    } else if (preset === 'rack_b') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(-1.1, 1.8, -0.1),
        lookAt: new THREE.Vector3(-1.8, 1.5, -1.4),
      };
    } else if (preset === 'kvm') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(-1.4, 2.75, 0.95),
        lookAt: new THREE.Vector3(-1.8, 2.62, 0.45),
      };
    } else if (preset === 'desk_1') {
      cameraTargetRef.current = {
        // Frame the whole desk incl. the PC tower and its NIC socket.
        pos: new THREE.Vector3(0.8, 1.9, 3.3),
        lookAt: new THREE.Vector3(1.9, 0.2, 1.2),
      };
    } else if (preset === 'desk_2') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(0.8, 1.9, 0.9),
        lookAt: new THREE.Vector3(1.9, 0.2, -1.2),
      };
    } else if (preset === 'soc') {
      cameraTargetRef.current = {
        pos: new THREE.Vector3(0, 2.2, 1.8),
        lookAt: new THREE.Vector3(0, 2.2, -2.9),
      };
    }
  };

  // Toggle sliding out an equipment chassis
  const toggleSlideChassis = (unitId: string) => {
    sounds.playRailSlide();
    setSlidOutUnitIds((prev) => {
      const isOut = prev.includes(unitId);
      const next = isOut ? prev.filter((id) => id !== unitId) : [...prev, unitId];
      showToast(isOut ? `Retracted ${unitId} into rack rails.` : `Slid out ${unitId} chassis on telescopic rails.`);
      return next;
    });
  };

  // Toggle Chassis Top Lid / Cover
  const toggleLid = (unitId: string) => {
    sounds.playLatchClick();
    setLidOpenUnits((prev) => {
      const isOpen = prev.includes(unitId);
      const next = isOpen ? prev.filter((id) => id !== unitId) : [...prev, unitId];
      showToast(isOpen ? `Attached top cover lid to ${unitId}.` : `Removed top lid from ${unitId} (motherboard exposed).`);
      return next;
    });
  };

  // Toggle Power State of Chassis
  const toggleChassisPower = (unitId: string) => {
    sounds.playSwitchClick();
    setPowerOffUnits((prev) => {
      const isOff = prev.includes(unitId);
      const next = isOff ? prev.filter((id) => id !== unitId) : [...prev, unitId];
      showToast(isOff ? `Powering UP ${unitId} (POST boot sequence initiated).` : `Powering DOWN ${unitId} (Standby mode).`);
      return next;
    });
  };

  // Toggle Hot-Swap Drive Tray Ejection
  const toggleDriveEject = (unitId: string, driveIdx: number) => {
    sounds.playLatchClick();
    setEjectedDrives((prev) => {
      const currentList = prev[unitId] || [];
      const isEjected = currentList.includes(driveIdx);
      const updatedList = isEjected ? currentList.filter((i) => i !== driveIdx) : [...currentList, driveIdx];
      showToast(
        isEjected
          ? `Latched SAS Drive #${driveIdx + 1} into ${unitId} backplane.`
          : `⚠️ Unlatched & ejected SAS Drive #${driveIdx + 1} from ${unitId} tray.`
      );
      return { ...prev, [unitId]: updatedList };
    });
  };

  // Re-sync cables and LEDs when state changes
  const updateCablesAndLeds = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 1. Remove old cable meshes and pulse spheres
    for (const item of cableMeshesRef.current) {
      scene.remove(item.mesh);
      item.mesh.geometry.dispose();
      if (Array.isArray(item.mesh.material)) {
        item.mesh.material.forEach((m) => m.dispose());
      } else {
        item.mesh.material.dispose();
      }
    }
    cableMeshesRef.current = [];

    for (const p of pulseSpheresRef.current) {
      scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      (p.mesh.material as THREE.Material).dispose();
    }
    pulseSpheresRef.current = [];

    // Filter clickable meshes to drop previous cables
    clickableMeshesRef.current = clickableMeshesRef.current.filter((c) => c.type !== 'cable');

    // 2. Build cables for each active link
    for (const link of sim.links) {
      const markerA = portMarkersRef.current.find((p) => p.portId === link.a);
      const markerB = portMarkersRef.current.find((p) => p.portId === link.b);
      if (!markerA || !markerB) continue;

      const pA = markerA.position.clone();
      const pB = markerB.position.clone();

      // Catenary sag curve controlled by customCableTension
      const midPoint = pA.clone().lerp(pB, 0.5);
      const dist = pA.distanceTo(pB);
      midPoint.y -= Math.min(0.85, dist * customCableTension);

      const curve = new THREE.CatmullRomCurve3([pA, midPoint, pB]);
      const linkKey = linkKeyOf(link.a, link.b);
      const revKey = linkKeyOf(link.b, link.a);
      const isSelectedCable = selectedCableKey === linkKey || selectedCableKey === revKey;

      // Determine cable color: check custom color, then default role
      let cableHex = customCableColors[linkKey] || customCableColors[revKey];

      if (!cableHex) {
        if (portIs(link.a, 'GigabitEthernet0/1') || portIs(link.b, 'GigabitEthernet0/1')) {
          cableHex = 0x06b6d4; // aqua for trunk
        } else if (link.a.includes('PC-B') || link.b.includes('PC-B')) {
          cableHex = 0xf59e0b; // amber for PC-B
        } else if (link.a.includes('PC-A') || link.b.includes('PC-A') || link.a.includes('SOC') || link.b.includes('SOC')) {
          cableHex = 0x2563eb; // blue for PC-A
        } else {
          cableHex = 0x10b981; // green
        }
      }

      const tubeGeo = new THREE.TubeGeometry(curve, 38, isSelectedCable ? 0.026 : 0.019, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: cableHex,
        roughness: isSelectedCable ? 0.2 : 0.35,
        metalness: isSelectedCable ? 0.4 : 0.2,
        emissive: isSelectedCable ? cableHex : 0x000000,
        emissiveIntensity: isSelectedCable ? 0.35 : 0,
      });

      const cableMesh = new THREE.Mesh(tubeGeo, tubeMat);
      cableMesh.castShadow = true;
      scene.add(cableMesh);
      cableMeshesRef.current.push({ mesh: cableMesh, linkKey, curve });

      // Add to clickable raycaster
      clickableMeshesRef.current.push({
        id: linkKey,
        mesh: cableMesh,
        type: 'cable',
        meta: { link, hex: cableHex },
      });

      // Add signal pulse sphere if enabled
      if (isSignalPulseActive) {
        const pulseGeo = new THREE.SphereGeometry(0.026, 8, 8);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: isSelectedCable ? 0xffffff : 0x7dd3fc,
        });
        const pulseSphere = new THREE.Mesh(pulseGeo, pulseMat);
        scene.add(pulseSphere);
        pulseSpheresRef.current.push({
          mesh: pulseSphere,
          curve,
          progress: Math.random(),
          speed: 0.35 + Math.random() * 0.2,
        });
      }
    }

    // 3. Update Port LED colors
    for (const marker of portMarkersRef.current) {
      if (!marker.ledMesh) continue;

      const [devId, ifName] = marker.portId.split(':');
      const dev = sim.devices.get(devId);
      const iface = dev?.getInterface(ifName);
      const ledMat = marker.ledMesh.material as THREE.MeshStandardMaterial;

      if (marker.isReserved) {
        ledMat.color.setHex(0xeab308);
        ledMat.emissive.setHex(0x713f12);
      } else if (!iface?.peer) {
        ledMat.color.setHex(0x1e293b);
        ledMat.emissive.setHex(0x000000);
      } else if (!iface.adminUp) {
        ledMat.color.setHex(0xf59e0b);
        ledMat.emissive.setHex(0xd97706);
      } else if (iface.operUp) {
        ledMat.color.setHex(0x22c55e);
        ledMat.emissive.setHex(0x16a34a);
      } else {
        ledMat.color.setHex(0xf59e0b);
        ledMat.emissive.setHex(0xb45309);
      }
    }
  }, [sim, customCableColors, customCableTension, isSignalPulseActive, selectedCableKey]);

  useEffect(() => {
    updateCablesAndLeds();
  }, [sim.links, simRevision, customCableColors, customCableTension, isSignalPulseActive, selectedCableKey, updateCablesAndLeds]);

  // Recolor all cables to a selected palette
  const handleRecolorAllCables = (hex: number) => {
    sounds.playKeyClick();
    const updated: Record<string, number> = {};
    for (const link of sim.links) {
      updated[linkKeyOf(link.a, link.b)] = hex;
    }
    setCustomCableColors(updated);
    showToast('Applied color to all Cat6 network cables in the room.');
  };

  // Automatically color-code by TIA-606-C Standards
  const handleApplyTiaStandards = () => {
    sounds.playSuccessBeep();
    const updated: Record<string, number> = {};
    for (const link of sim.links) {
      const key = linkKeyOf(link.a, link.b);
      const either = (ifName: string) => portIs(link.a, ifName) || portIs(link.b, ifName);
      if (either('GigabitEthernet0/1')) {
        updated[key] = 0x06b6d4; // Aqua for 802.1Q Trunk
      } else if (link.a.includes('PC-B') || link.b.includes('PC-B') || either('FastEthernet0/2')) {
        updated[key] = 0xf59e0b; // Amber for Sales VLAN 20
      } else if (link.a.includes('PC-A') || link.b.includes('PC-A') || either('FastEthernet0/1')) {
        updated[key] = 0x2563eb; // Blue for Accounting VLAN 10
      } else if (link.a.includes('WEB') || link.b.includes('WEB')) {
        updated[key] = 0x10b981; // Emerald for Production Web Server
      } else {
        updated[key] = 0x2563eb;
      }
    }
    setCustomCableColors(updated);
    showToast('Color-coded all cables conforming to ANSI/TIA-606-C VLAN standards!');
  };

  // Color specific selected cable
  const handleColorSelectedCable = (hex: number) => {
    if (!selectedCableKey) return;
    sounds.playKeyClick();
    setCustomCableColors((prev) => ({
      ...prev,
      [selectedCableKey]: hex,
    }));
    showToast(`Updated color for cable ${selectedCableKey}`);
  };

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene with a command-wall backdrop and smooth depth fog.
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060911);
    scene.fog = new THREE.FogExp2(0x060911, 0.075);
    sceneRef.current = scene;

    const terminalBackdrop = new THREE.TextureLoader().load(
      '/terminal-command-wall.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        scene.background = texture;
        scene.backgroundIntensity = 0.42;
      }
    );

    // Camera
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.copy(cameraTargetRef.current.pos);
    camera.lookAt(cameraTargetRef.current.lookAt);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting Rig (Key, Fill, Rim)
    const ambientLight = new THREE.AmbientLight(0x2a3648, 1.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 1.3);
    scene.add(hemiLight);

    // Ceiling Key Lights
    const ceilingKeyLight = new THREE.PointLight(0xe0f2fe, 3.2, 16);
    ceilingKeyLight.position.set(-1.8, 3.5, 0.2);
    ceilingKeyLight.castShadow = true;
    scene.add(ceilingKeyLight);

    const ceilingKeyLightB = new THREE.PointLight(0xbae6fd, 2.6, 16);
    ceilingKeyLightB.position.set(-1.8, 3.5, -1.4);
    ceilingKeyLightB.castShadow = true;
    scene.add(ceilingKeyLightB);

    const ceilingFillLight = new THREE.PointLight(0x93c5fd, 2.2, 16);
    ceilingFillLight.position.set(1.5, 3.4, 0);
    scene.add(ceilingFillLight);

    // Wall Display Glow
    const socWallGlow = new THREE.PointLight(0x0284c7, 3.8, 8);
    socWallGlow.position.set(0, 2.4, -2.85);
    scene.add(socWallGlow);

    // --- ENVIRONMENT ARCHITECTURE ---
    // Floor Tiles with reflective finish
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0b1120,
      roughness: 0.28,
      metalness: 0.65,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Floor raised server-room grid lines
    const grid = new THREE.GridHelper(16, 32, 0x1e293b, 0x0f172a);
    grid.position.y = 0.005;
    scene.add(grid);

    // Back & Side Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x080d18, roughness: 0.85 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(16, 5, 0.2), wallMat);
    backWall.position.set(0, 2.5, -3.2);
    scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 5, 16), wallMat);
    leftWall.position.set(-5.0, 2.5, 0);
    scene.add(leftWall);

    // Ceiling
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), new THREE.MeshStandardMaterial({ color: 0x05070d, roughness: 0.9 }));
    ceiling.position.y = 4.2;
    ceiling.rotation.x = Math.PI / 2;
    scene.add(ceiling);

    // Recessed Fluorescent Panels
    for (const zPos of [-1.6, 0.2, 1.8]) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 2.0), new THREE.MeshBasicMaterial({ color: 0xf8fafc }));
      panel.position.set(-1.8, 4.18, zPos);
      scene.add(panel);

      const panel2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.05, 2.0), new THREE.MeshBasicMaterial({ color: 0xf8fafc }));
      panel2.position.set(1.5, 4.18, zPos);
      scene.add(panel2);
    }

    // Overhead Cable Trays (Yellow/Steel Ladder Racks along ceiling)
    const trayMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.7, roughness: 0.4 });
    const cableTrayA = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 5.0), trayMat);
    cableTrayA.position.set(-1.8, 3.1, -0.6);
    scene.add(cableTrayA);

    // Wall SOC Threat Screen Frame
    const socFrame = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.0, 0.1), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 }));
    socFrame.position.set(0, 2.4, -3.08);
    scene.add(socFrame);

    const socScreen = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.8), new THREE.MeshBasicMaterial({ color: 0x0284c7 }));
    socScreen.position.set(0, 2.4, -3.02);
    scene.add(socScreen);

    // --- 19" SERVER RACK CAGE BUILDER ---
    const buildRackFrame = (x: number, z: number, rackLabel: string) => {
      const rackGroup = new THREE.Group();
      rackGroup.position.set(x, 0, z);

      const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.25 });
      const pGeo = new THREE.BoxGeometry(0.08, 2.95, 0.08);

      for (const [px, pz] of [[-0.48, -0.48], [0.48, -0.48], [-0.48, 0.48], [0.48, 0.48]]) {
        const pillar = new THREE.Mesh(pGeo, pillarMat);
        pillar.position.set(px, 1.47, pz);
        pillar.castShadow = true;
        rackGroup.add(pillar);
      }

      // 19" Vertical Steel Equipment Mounting Rails (front and rear)
      const railMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9, roughness: 0.2 });
      const rGeo = new THREE.BoxGeometry(0.04, 2.8, 0.04);
      for (const rx of [-0.42, 0.42]) {
        const railFront = new THREE.Mesh(rGeo, railMat);
        railFront.position.set(rx, 1.47, 0.38);
        rackGroup.add(railFront);

        const railRear = new THREE.Mesh(rGeo, railMat);
        railRear.position.set(rx, 1.47, -0.38);
        rackGroup.add(railRear);
      }

      // Top and bottom heavy plates
      const plateMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.3 });
      const topPlate = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.08, 1.08), plateMat);
      topPlate.position.set(0, 2.92, 0);
      rackGroup.add(topPlate);

      const botPlate = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.08, 1.08), plateMat);
      botPlate.position.set(0, 0.04, 0);
      rackGroup.add(botPlate);

      // Perforated mesh side panels
      const sidePanelMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.8, wireframe: true });
      const leftSide = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.75, 0.98), sidePanelMat);
      leftSide.position.set(-0.49, 1.47, 0);
      rackGroup.add(leftSide);

      const rightSide = new THREE.Mesh(new THREE.BoxGeometry(0.02, 2.75, 0.98), sidePanelMat);
      rightSide.position.set(0.49, 1.47, 0);
      rackGroup.add(rightSide);

      scene.add(rackGroup);
      return rackGroup;
    };

    buildRackFrame(-1.8, 0, 'Rack A');
    buildRackFrame(-1.8, -1.4, 'Rack B');

    // --- WORKSTATION DESKS ---
    const buildDesk = (x: number, z: number, deskName: string) => {
      const deskGroup = new THREE.Group();
      deskGroup.position.set(x, 0, z);

      const top = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.9), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45 }));
      top.position.set(0, 0.8, 0);
      deskGroup.add(top);

      const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 });
      for (const [lx, lz] of [[-0.62, -0.38], [0.62, -0.38], [-0.62, 0.38], [0.62, 0.38]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.8, 0.06), legMat);
        leg.position.set(lx, 0.4, lz);
        deskGroup.add(leg);
      }

      // Computer Monitor
      const stand = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.25, 0.16), legMat);
      stand.position.set(0, 0.93, -0.15);
      deskGroup.add(stand);

      const mon = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.05), legMat);
      mon.position.set(0, 1.15, -0.15);
      deskGroup.add(mon);

      const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.39), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
      screen.position.set(0, 1.15, -0.12);
      deskGroup.add(screen);

      // Keyboard & PC Tower
      const kb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.14), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
      kb.position.set(0, 0.83, 0.15);
      deskGroup.add(kb);

      const tower = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.46, 0.48), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 }));
      tower.position.set(0.5, 0.45, 0);
      deskGroup.add(tower);

      scene.add(deskGroup);
      return { deskGroup, tower, screen };
    };

    const desk1 = buildDesk(1.6, 1.2, 'desk_1');
    const desk2 = buildDesk(1.6, -1.2, 'desk_2');

    // --- PROCEDURAL DETAILED RACK EQUIPMENT CHASSIS BUILDER ---
    const markers: PortMarker[] = [];
    const clickables: Array<{ id: string; mesh: THREE.Mesh; type: 'device' | 'rackUnit' | 'cable' | 'drive' | 'powerBtn'; meta?: any }> = [];
    const unitMap = new Map<
      string,
      {
        group: THREE.Group;
        zBase: number;
        targetZ: number;
        fans: THREE.Mesh[];
        leds: THREE.Mesh[];
        drives: Array<{ mesh: THREE.Mesh; baseZ: number; driveIdx: number }>;
        lidMesh?: THREE.Mesh;
        kvmScreenGroup?: THREE.Group;
        subLayers?: Array<{ mesh: THREE.Object3D; baseY: number; explodeMult: number }>;
        powerLeds: THREE.Mesh[];
      }
    >();

    // Helper to build high-detail composite server chassis
    const createChassis = (spec: RackUnitSpec) => {
      const chassisGroup = new THREE.Group();
      const xPos = -1.8;
      const zBase = spec.zBase;
      chassisGroup.position.set(xPos, spec.y, zBase);

      const heightMeters = spec.uHeight * 0.0444 + (spec.uHeight - 1) * 0.02; // 1U ≈ 0.045m, 2U ≈ 0.11m
      const widthMeters = 0.88;
      const depthMeters = 0.72;

      const subLayers: Array<{ mesh: THREE.Object3D; baseY: number; explodeMult: number }> = [];

      // 1. Outer Chassis Base Shell
      const outerMat = new THREE.MeshStandardMaterial({
        color: spec.color,
        metalness: 0.72,
        roughness: 0.35,
      });
      const outerBox = new THREE.Mesh(new THREE.BoxGeometry(widthMeters, heightMeters, depthMeters), outerMat);
      outerBox.castShadow = true;
      chassisGroup.add(outerBox);
      clickables.push({ id: spec.id, mesh: outerBox, type: spec.canTerminal ? 'device' : 'rackUnit' });

      // 2. Telescopic Side Rails (Left and Right stainless steel rails)
      const railMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 });
      const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.015, heightMeters * 0.7, depthMeters * 0.95), railMat);
      leftRail.position.set(-widthMeters / 2 - 0.01, 0, 0);
      chassisGroup.add(leftRail);

      const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.015, heightMeters * 0.7, depthMeters * 0.95), railMat);
      rightRail.position.set(widthMeters / 2 + 0.01, 0, 0);
      chassisGroup.add(rightRail);

      // 3. Front Faceplate Details
      const faceplateMat = new THREE.MeshStandardMaterial({ color: 0x0a0f1d, metalness: 0.8, roughness: 0.3 });
      const faceplate = new THREE.Mesh(new THREE.BoxGeometry(widthMeters + 0.02, heightMeters, 0.02), faceplateMat);
      faceplate.position.set(0, 0, depthMeters / 2 + 0.01);
      chassisGroup.add(faceplate);

      // Rack Ears (Mounting brackets with screw holes)
      const earMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9, roughness: 0.2 });
      for (const earX of [-widthMeters / 2 - 0.03, widthMeters / 2 + 0.03]) {
        const ear = new THREE.Mesh(new THREE.BoxGeometry(0.04, heightMeters, 0.01), earMat);
        ear.position.set(earX, 0, depthMeters / 2 + 0.01);
        chassisGroup.add(ear);
      }

      // Front Power Button & Power Status LED
      const powerLeds: THREE.Mesh[] = [];
      const powerBtnGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.012, 12);
      const powerBtnMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8 });
      const powerBtn = new THREE.Mesh(powerBtnGeo, powerBtnMat);
      powerBtn.rotation.x = Math.PI / 2;
      powerBtn.position.set(widthMeters / 2 - 0.04, 0, depthMeters / 2 + 0.022);
      chassisGroup.add(powerBtn);

      const powerLedGeo = new THREE.SphereGeometry(0.005, 8, 8);
      const powerLedMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a });
      const powerLed = new THREE.Mesh(powerLedGeo, powerLedMat);
      powerLed.position.set(widthMeters / 2 - 0.04, heightMeters * 0.28, depthMeters / 2 + 0.023);
      chassisGroup.add(powerLed);
      powerLeds.push(powerLed);

      clickables.push({ id: spec.id, mesh: powerBtn, type: 'powerBtn', meta: { unitId: spec.id } });

      // 4. Removable Top Chassis Cover Lid
      let lidMesh: THREE.Mesh | undefined;
      if (spec.canSlide && !spec.isKvm) {
        const lidGeo = new THREE.BoxGeometry(widthMeters - 0.02, 0.008, depthMeters - 0.04);
        const lidMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.25 });
        lidMesh = new THREE.Mesh(lidGeo, lidMat);
        lidMesh.position.set(0, heightMeters / 2 + 0.004, -0.01);
        chassisGroup.add(lidMesh);
        subLayers.push({ mesh: lidMesh, baseY: heightMeters / 2 + 0.004, explodeMult: 1.4 });
      }

      // 5. Detailed Interior Motherboard Components
      const internalFans: THREE.Mesh[] = [];
      const driveLeds: THREE.Mesh[] = [];
      const driveMeshes: Array<{ mesh: THREE.Mesh; baseZ: number; driveIdx: number }> = [];

      if (spec.canSlide && !spec.isKvm) {
        // Motherboard PCB (Dark green / black circuitry)
        const pcbMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, metalness: 0.4, roughness: 0.6 });
        const pcb = new THREE.Mesh(new THREE.BoxGeometry(widthMeters - 0.06, 0.008, depthMeters - 0.15), pcbMat);
        pcb.position.set(0, -heightMeters / 2 + 0.01, -0.04);
        chassisGroup.add(pcb);
        subLayers.push({ mesh: pcb, baseY: -heightMeters / 2 + 0.01, explodeMult: 0.0 });

        // Dual CPU Sockets with Aluminum Micro-Fin Heatsinks
        const heatsinkMat = new THREE.MeshStandardMaterial({ color: 0xc0c8d0, metalness: 0.85, roughness: 0.2 });
        for (const cpuX of [-0.14, 0.14]) {
          const heatsink = new THREE.Mesh(new THREE.BoxGeometry(0.12, heightMeters * 0.6, 0.12), heatsinkMat);
          heatsink.position.set(cpuX, -heightMeters / 2 + heightMeters * 0.3 + 0.015, -0.06);
          chassisGroup.add(heatsink);
          subLayers.push({ mesh: heatsink, baseY: -heightMeters / 2 + heightMeters * 0.3 + 0.015, explodeMult: 0.6 });
        }

        // 8x RAM DIMM Sticks with Gold Edge Pins
        const ramMat = new THREE.MeshStandardMaterial({ color: 0x15803d, metalness: 0.5, roughness: 0.4 });
        for (let r = 0; r < 8; r++) {
          const rx = -0.32 + r * 0.035;
          const ram = new THREE.Mesh(new THREE.BoxGeometry(0.012, heightMeters * 0.45, 0.11), ramMat);
          ram.position.set(rx, -heightMeters / 2 + heightMeters * 0.23, -0.06);
          chassisGroup.add(ram);
          subLayers.push({ mesh: ram, baseY: -heightMeters / 2 + heightMeters * 0.23, explodeMult: 0.4 });
        }

        // Mid-Chassis Cooling Fan Bulkhead with Spinning Fan Impellers
        const fanBulkhead = new THREE.Mesh(
          new THREE.BoxGeometry(widthMeters - 0.08, heightMeters * 0.75, 0.03),
          new THREE.MeshStandardMaterial({ color: 0x0f172a })
        );
        fanBulkhead.position.set(0, -heightMeters / 2 + heightMeters * 0.4, 0.12);
        chassisGroup.add(fanBulkhead);
        subLayers.push({ mesh: fanBulkhead, baseY: -heightMeters / 2 + heightMeters * 0.4, explodeMult: 0.8 });

        const fanMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.3 });
        for (let f = 0; f < 5; f++) {
          const fx = -0.28 + f * 0.14;
          const fanRotor = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.02, 8), fanMat);
          fanRotor.rotation.x = Math.PI / 2;
          fanRotor.position.set(fx, -heightMeters / 2 + heightMeters * 0.4, 0.135);
          chassisGroup.add(fanRotor);
          internalFans.push(fanRotor);
        }
      }

      // 6. Interactive Hot-Swap Drive Bays with Ejectable Trays
      if (spec.driveCount) {
        const driveCount = spec.driveCount;
        const cols = spec.uHeight === 2 ? Math.min(12, driveCount) : Math.min(8, driveCount);
        const colWidth = 0.085;
        const startX = -((cols - 1) * colWidth) / 2;

        for (let d = 0; d < cols; d++) {
          const dx = startX + d * colWidth;
          const caddyGroup = new THREE.Mesh(
            new THREE.BoxGeometry(0.075, heightMeters * 0.72, 0.024),
            new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.75, roughness: 0.3 })
          );
          const baseZ = depthMeters / 2 + 0.02;
          caddyGroup.position.set(dx, 0, baseZ);
          chassisGroup.add(caddyGroup);

          // Eject Latch Handle on front of caddy
          const latch = new THREE.Mesh(
            new THREE.BoxGeometry(0.045, 0.012, 0.008),
            new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.6 })
          );
          latch.position.set(0, -heightMeters * 0.22, 0.015);
          caddyGroup.add(latch);

          // Drive Activity LED
          const driveLed = new THREE.Mesh(
            new THREE.SphereGeometry(0.006, 6, 6),
            new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a })
          );
          driveLed.position.set(0.022, heightMeters * 0.24, 0.015);
          caddyGroup.add(driveLed);
          driveLeds.push(driveLed);

          driveMeshes.push({ mesh: caddyGroup, baseZ, driveIdx: d });
          clickables.push({
            id: `${spec.id}_drive_${d}`,
            mesh: caddyGroup,
            type: 'drive',
            meta: { unitId: spec.id, driveIdx: d },
          });
        }
      }

      // 7. Special KVM Console Drawer (1U) with Fold-Up LCD Screen & Chiclet Keyboard
      let kvmScreenGroup: THREE.Group | undefined;
      if (spec.isKvm) {
        // Keyboard & trackball embedded in drawer base
        const kbBase = new THREE.Mesh(
          new THREE.BoxGeometry(widthMeters - 0.1, 0.012, depthMeters - 0.2),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 })
        );
        kbBase.position.set(0, 0, 0.05);
        chassisGroup.add(kbBase);

        // Keys grid texture simulation
        const keyMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
        const keyCluster = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.006, 0.22), keyMat);
        keyCluster.position.set(-0.1, 0.01, 0.05);
        chassisGroup.add(keyCluster);

        // Trackball
        const trackball = new THREE.Mesh(new THREE.SphereGeometry(0.018, 12, 12), new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9 }));
        trackball.position.set(0.26, 0.015, 0.05);
        chassisGroup.add(trackball);

        // Fold-Up 17" LCD Monitor Hinged Unit
        kvmScreenGroup = new THREE.Group();
        kvmScreenGroup.position.set(0, heightMeters / 2, -depthMeters / 2 + 0.12); // Hinge line

        const monFrame = new THREE.Mesh(
          new THREE.BoxGeometry(0.68, 0.42, 0.02),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 })
        );
        monFrame.position.set(0, 0.21, 0);
        kvmScreenGroup.add(monFrame);

        const kvmDisplay = new THREE.Mesh(
          new THREE.PlaneGeometry(0.62, 0.36),
          new THREE.MeshBasicMaterial({ color: 0x0284c7 })
        );
        kvmDisplay.position.set(0, 0.21, 0.012);
        kvmScreenGroup.add(kvmDisplay);

        chassisGroup.add(kvmScreenGroup);
      }

      // 8. Special HSM 1U (Hardware Security Module) with Crypto Display
      if (spec.id === 'HSM1') {
        const oledFrame = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, 0.024, 0.01),
          new THREE.MeshBasicMaterial({ color: 0x000000 })
        );
        oledFrame.position.set(-0.18, 0, depthMeters / 2 + 0.022);
        chassisGroup.add(oledFrame);

        const oledScreen = new THREE.Mesh(
          new THREE.PlaneGeometry(0.22, 0.02),
          new THREE.MeshBasicMaterial({ color: 0x10b981 })
        );
        oledScreen.position.set(-0.18, 0, depthMeters / 2 + 0.028);
        chassisGroup.add(oledScreen);
      }

      // 9. Special Environmental Monitor 1U with Dual Digital Readouts
      if (spec.id === 'ENV1') {
        for (let s = 0; s < 2; s++) {
          const sx = -0.16 + s * 0.32;
          const numDisplay = new THREE.Mesh(
            new THREE.PlaneGeometry(0.12, 0.024),
            new THREE.MeshBasicMaterial({ color: s === 0 ? 0x38bdf8 : 0x10b981 })
          );
          numDisplay.position.set(sx, 0, depthMeters / 2 + 0.022);
          chassisGroup.add(numDisplay);
        }
      }

      scene.add(chassisGroup);
      unitMap.set(spec.id, {
        group: chassisGroup,
        zBase,
        targetZ: zBase,
        fans: internalFans,
        leds: driveLeds,
        drives: driveMeshes,
        lidMesh,
        kvmScreenGroup,
        subLayers,
        powerLeds,
      });
      return chassisGroup;
    };

    // Instantiate all rack units across Rack A and Rack B
    for (const spec of ALL_RACK_UNITS) {
      createChassis(spec);
    }

    // --- INTERACTIVE SOCKETS FOR MISSION DEVICES ---
    // Router R1 Sockets (Rack A)
    const r1Ports = [
      { name: 'Gi0/0', canonical: 'GigabitEthernet0/0', x: -1.8 - 0.16, isRes: false },
      { name: 'Gi0/1', canonical: 'GigabitEthernet0/1', x: -1.8 + 0.16, isRes: true },
    ];
    for (const p of r1Ports) {
      const portId = `R1:${p.canonical}`;
      const isReserved = sim.reservedPorts.has(portId);

      const sockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.038, 0.03), new THREE.MeshStandardMaterial({ color: isReserved ? 0xeab308 : 0x0f172a }));
      sockMesh.position.set(p.x, 2.22, 0.38);
      scene.add(sockMesh);

      const ledMesh = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshStandardMaterial({ color: isReserved ? 0xeab308 : 0x1e293b }));
      ledMesh.position.set(p.x, 2.245, 0.385);
      scene.add(ledMesh);

      markers.push({
        portId,
        deviceId: 'R1',
        shortName: p.name,
        position: new THREE.Vector3(p.x, 2.22, 0.39),
        isReserved,
        mesh: sockMesh,
        ledMesh,
      });
    }

    // Switch S1 Sockets (Rack A)
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

      const sockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: isReserved ? 0xeab308 : 0x0f172a }));
      sockMesh.position.set(p.x, 1.68, 0.38);
      scene.add(sockMesh);

      const ledMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      ledMesh.position.set(p.x, 1.705, 0.385);
      scene.add(ledMesh);

      markers.push({
        portId,
        deviceId: 'S1',
        shortName: p.name,
        position: new THREE.Vector3(p.x, 1.68, 0.39),
        isReserved,
        mesh: sockMesh,
        ledMesh,
      });
    }

    // Server WEB1 Socket (Rack A)
    const webPortId = 'WEB1:Ethernet0';
    const webSockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    webSockMesh.position.set(-1.8 + 0.16, 1.48, 0.38);
    scene.add(webSockMesh);

    const webLedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    webLedMesh.position.set(-1.8 + 0.16, 1.505, 0.385);
    scene.add(webLedMesh);

    markers.push({
      portId: webPortId,
      deviceId: 'WEB1',
      shortName: 'Eth0',
      position: new THREE.Vector3(-1.8 + 0.16, 1.48, 0.39),
      isReserved: false,
      mesh: webSockMesh,
      ledMesh: webLedMesh,
    });

    // PC Workstations Sockets
    const pcAId = sim.devices.has('SOC-PC') ? 'SOC-PC' : sim.devices.has('PC-1') ? 'PC-1' : 'PC-A';
    clickables.push({ id: pcAId, mesh: desk1.screen, type: 'device' });
    clickables.push({ id: pcAId, mesh: desk1.tower, type: 'device' });

    const pcASockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    pcASockMesh.position.set(1.6 + 0.5, 0.45, 1.2 + 0.25);
    scene.add(pcASockMesh);

    const pcALedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    pcALedMesh.position.set(1.6 + 0.5, 0.48, 1.2 + 0.255);
    scene.add(pcALedMesh);

    markers.push({
      portId: `${pcAId}:Ethernet0`,
      deviceId: pcAId,
      shortName: 'Eth0',
      position: new THREE.Vector3(1.6 + 0.5, 0.45, 1.2 + 0.26),
      isReserved: false,
      mesh: pcASockMesh,
      ledMesh: pcALedMesh,
    });

    if (sim.devices.has('PC-B')) {
      clickables.push({ id: 'PC-B', mesh: desk2.screen, type: 'device' });
      clickables.push({ id: 'PC-B', mesh: desk2.tower, type: 'device' });

      const pcBSockMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.035, 0.03), new THREE.MeshStandardMaterial({ color: 0x0f172a }));
      pcBSockMesh.position.set(1.6 + 0.5, 0.45, -1.2 + 0.25);
      scene.add(pcBSockMesh);

      const pcBLedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      pcBLedMesh.position.set(1.6 + 0.5, 0.48, -1.2 + 0.255);
      scene.add(pcBLedMesh);

      markers.push({
        portId: 'PC-B:Ethernet0',
        deviceId: 'PC-B',
        shortName: 'Eth0',
        position: new THREE.Vector3(1.6 + 0.5, 0.45, -1.2 + 0.26),
        isReserved: false,
        mesh: pcBSockMesh,
        ledMesh: pcBLedMesh,
      });
    }

    portMarkersRef.current = markers;
    unitGroupsRef.current = unitMap;
    clickableMeshesRef.current = clickables;
    equipmentLabelTargetsRef.current = new Map([
      ...Array.from(unitMap.entries()).map(([id, data]) => [
        id,
        { id, object: data.group, offset: new THREE.Vector3(0, 0, 0.42) } as EquipmentLabelTarget,
      ] as const),
      [
        pcAId,
        { id: pcAId, object: desk1.screen, offset: new THREE.Vector3(0, 0.3, 0) } as EquipmentLabelTarget,
      ] as const,
      ...(sim.devices.has('PC-B')
        ? [[
            'PC-B',
            { id: 'PC-B', object: desk2.screen, offset: new THREE.Vector3(0, 0.3, 0) } as EquipmentLabelTarget,
          ] as const]
        : []),
    ]);

    liveRef.current.updateCablesAndLeds();

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // 1. Port sockets hover
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

      // 2. Cables hover
      const cableMeshes = cableMeshesRef.current.map((c) => c.mesh);
      const cableHits = raycaster.intersectObjects(cableMeshes);
      if (cableHits.length > 0) {
        const hitMesh = cableHits[0].object as THREE.Mesh;
        const found = cableMeshesRef.current.find((c) => c.mesh === hitMesh);
        if (found) {
          setHoveredPort(null);
          setHoveredDevice(`Cable: ${found.linkKey}`);
          container.style.cursor = 'pointer';
          return;
        }
      }

      // 3. Rack units & devices hover
      const devMeshes = clickableMeshesRef.current.map((c) => c.mesh);
      const devHits = raycaster.intersectObjects(devMeshes);
      if (devHits.length > 0) {
        const hitMesh = devHits[0].object as THREE.Mesh;
        const found = clickableMeshesRef.current.find((c) => c.mesh === hitMesh);
        if (found) {
          if (found.type === 'drive') {
            setHoveredDevice(`${found.meta.unitId} Drive #${found.meta.driveIdx + 1} (Hot-Swap)`);
          } else if (found.type === 'powerBtn') {
            setHoveredDevice(`${found.meta.unitId} Power Switch`);
          } else {
            setHoveredDevice(found.id);
          }
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
      // Ignore the click that ends an orbit drag.
      if (dragDistance > 6) return;
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check Port Click for cabling
      const portMeshes = markers.map((m) => m.mesh).filter((m): m is THREE.Mesh => !!m);
      const portHits = raycaster.intersectObjects(portMeshes);
      if (portHits.length > 0) {
        const hitMesh = portHits[0].object as THREE.Mesh;
        const found = markers.find((m) => m.mesh === hitMesh);
        if (found) {
          liveRef.current.handlePortClick(found);
          return;
        }
      }

      // Check Cable Click for cable inspector & color customization
      const cableMeshes = cableMeshesRef.current.map((c) => c.mesh);
      const cableHits = raycaster.intersectObjects(cableMeshes);
      if (cableHits.length > 0) {
        const hitMesh = cableHits[0].object as THREE.Mesh;
        const found = cableMeshesRef.current.find((c) => c.mesh === hitMesh);
        if (found) {
          sounds.playKeyClick();
          setSelectedCableKey(found.linkKey);
          setActiveDockTab('cables');
          showToast(`Selected cable: ${found.linkKey}. Customize jacket color, sag, or disconnect below.`);
          return;
        }
      }

      // Check Drive / Power Button / Device Click
      const devMeshes = clickableMeshesRef.current.map((c) => c.mesh);
      const devHits = raycaster.intersectObjects(devMeshes);
      if (devHits.length > 0) {
        const hitMesh = devHits[0].object as THREE.Mesh;
        const found = clickableMeshesRef.current.find((c) => c.mesh === hitMesh);
        if (found) {
          if (found.type === 'drive') {
            liveRef.current.toggleDriveEject(found.meta.unitId, found.meta.driveIdx);
            return;
          }

          if (found.type === 'powerBtn') {
            liveRef.current.toggleChassisPower(found.meta.unitId);
            return;
          }

          // Holding a cable and clicking a PC/server: plug into its only NIC.
          if (liveRef.current.selectedPort && found.type === 'device') {
            const nics = markers.filter((m) => m.deviceId === found.id);
            if (nics.length === 1) {
              liveRef.current.handlePortClick(nics[0]);
              return;
            }
          }

          sounds.playKeyClick();
          setSelectedUnitId(found.id);

          if (found.type === 'device' && sim.devices.has(found.id)) {
            liveRef.current.onOpenTerminal(found.id);
          }
          return;
        }
      }

      // Check Wall Monitor click
      const socHits = raycaster.intersectObject(socScreen);
      if (socHits.length > 0 && liveRef.current.onOpenThreatMap) {
        sounds.playKeyClick();
        liveRef.current.onOpenThreatMap();
        return;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Mouse drag for smooth orbit rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let dragDistance = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        isDragging = true;
        dragDistance = 0;
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
      dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      const target = cameraTargetRef.current;
      const offset = target.pos.clone().sub(target.lookAt);
      const spherical = new THREE.Spherical().setFromVector3(offset);

      spherical.theta -= deltaX * 0.0055;
      spherical.phi = Math.max(0.08, Math.min(Math.PI / 2 - 0.04, spherical.phi - deltaY * 0.0055));

      offset.setFromSpherical(spherical);
      target.pos.copy(target.lookAt).add(offset);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const target = cameraTargetRef.current;
      const dir = target.pos.clone().sub(target.lookAt).normalize();
      const dist = target.pos.distanceTo(target.lookAt);
      const newDist = Math.max(1.1, Math.min(9.5, dist + e.deltaY * 0.0045));
      target.pos.copy(target.lookAt).add(dir.multiplyScalar(newDist));
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseDrag);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Animation & Kinematics Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Camera smooth damping
      if (cameraRef.current) {
        const cam = cameraRef.current;
        const target = cameraTargetRef.current;
        cam.position.lerp(target.pos, 0.08);

        const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion).add(cam.position);
        currentLookAt.lerp(target.lookAt, 0.08);
        cam.lookAt(currentLookAt);
      }

      // Signal photon pulses travelling along network cables
      if (liveRef.current.isSignalPulseActive) {
        for (const pulse of pulseSpheresRef.current) {
          pulse.progress = (pulse.progress + delta * pulse.speed) % 1.0;
          const pos = pulse.curve.getPointAt(pulse.progress);
          pulse.mesh.position.copy(pos);
        }
      }

      // Chassis Slide Kinematics & Advanced Mechanics (Fans, Drives, Lid, KVM, Power, Exploded Layers)
      for (const [unitId, data] of unitMap.entries()) {
        const isSlid = liveRef.current.slidOutUnitIds.includes(unitId);
        const isPowerOff = liveRef.current.powerOffUnits.includes(unitId);
        const isLidOff = liveRef.current.lidOpenUnits.includes(unitId);
        const isSelectedChassis = liveRef.current.selectedUnitId === unitId;

        data.targetZ = isSlid ? data.zBase + 0.58 : data.zBase;

        // 1. Exponential smooth glide along rack rails
        data.group.position.z = THREE.MathUtils.damp(data.group.position.z, data.targetZ, 9, delta);

        // 2. Exploded layer separation (only the selected chassis; others reassemble)
        if (data.subLayers) {
          const separation = isSelectedChassis ? liveRef.current.explodedSeparation : 0;
          for (const layer of data.subLayers) {
            const targetY = layer.baseY + separation * layer.explodeMult * 0.18;
            layer.mesh.position.y = THREE.MathUtils.damp(layer.mesh.position.y, targetY, 8, delta);
          }
        }

        // 3. Top Lid Visibility
        if (data.lidMesh) {
          data.lidMesh.visible = !isLidOff;
        }

        // 4. Power Status LEDs
        for (const pLed of data.powerLeds) {
          const mat = pLed.material as THREE.MeshStandardMaterial;
          if (isPowerOff) {
            mat.color.setHex(0xf59e0b);
            mat.emissive.setHex(0x78350f); // Amber standby
          } else {
            mat.color.setHex(0x22c55e);
            mat.emissive.setHex(0x16a34a); // Operational green
          }
        }

        // 5. Spin internal cooling blower fans
        if (data.fans.length > 0) {
          if (!isPowerOff) {
            const baseSpinSpeed = liveRef.current.isTurboFan ? 58 : isSlid ? 28 : 14;
            for (const fan of data.fans) {
              fan.rotation.z += delta * baseSpinSpeed;
            }
          }
        }

        // 6. Drive Caddies Ejection Kinematics
        const unitEjected = liveRef.current.ejectedDrives[unitId] || [];
        for (const d of data.drives) {
          const isDriveEjected = unitEjected.includes(d.driveIdx);
          const targetDriveZ = isDriveEjected ? d.baseZ + 0.14 : d.baseZ;
          d.mesh.position.z = THREE.MathUtils.damp(d.mesh.position.z, targetDriveZ, 12, delta);
        }

        // 7. Drive Activity LEDs
        if (data.leds.length > 0 && !isPowerOff && Math.random() < 0.2) {
          const randomIdx = Math.floor(Math.random() * data.leds.length);
          const randomLed = data.leds[randomIdx];
          const isDriveEjected = unitEjected.includes(randomIdx);
          const ledMat = randomLed.material as THREE.MeshStandardMaterial;

          if (isDriveEjected) {
            ledMat.color.setHex(0xf59e0b);
            ledMat.emissive.setHex(0xd97706); // Warning amber
          } else {
            ledMat.color.setHex(Math.random() > 0.4 ? 0x22c55e : 0x0284c7);
            ledMat.emissive.setHex(Math.random() > 0.4 ? 0x16a34a : 0x0284c7);
          }
        }

        // 8. KVM Screen Fold Up / Down Hinge Kinematics
        if (data.kvmScreenGroup) {
          const targetAngle = isSlid && liveRef.current.isKvmFoldedUp ? -Math.PI * 0.42 : 0;
          data.kvmScreenGroup.rotation.x = THREE.MathUtils.damp(data.kvmScreenGroup.rotation.x, targetAngle, 8, delta);
        }
      }

      const labelElements = equipmentLabelElementsRef.current;
      if (equipmentLabelsVisibleRef.current) {
        const viewportWidth = container.clientWidth;
        const viewportHeight = container.clientHeight;
        const occupiedRects: Array<{ left: number; top: number; right: number; bottom: number }> = [];
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);

        for (const target of equipmentLabelTargetsRef.current.values()) {
          const element = labelElements.get(target.id);
          if (!element) continue;

          const worldPosition = target.object.localToWorld(target.offset.clone());
          const towardTarget = worldPosition.clone().sub(camera.position);
          const projected = worldPosition.clone().project(camera);
          const isInFront = cameraDirection.dot(towardTarget) > 0;
          const isOnScreen = projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 0.94 && Math.abs(projected.y) < 0.9;

          if (!isInFront || !isOnScreen) {
            element.style.opacity = '0';
            continue;
          }

          const anchorX = (projected.x * 0.5 + 0.5) * viewportWidth;
          const anchorY = (-projected.y * 0.5 + 0.5) * viewportHeight;
          const labelWidth = Math.min(152, Math.max(104, viewportWidth * 0.3));
          const labelHeight = 30;
          const left = Math.min(viewportWidth - labelWidth - 8, Math.max(8, anchorX + 18));
          const top = Math.min(viewportHeight - labelHeight - 8, Math.max(56, anchorY - labelHeight / 2));
          const rect = { left, top, right: left + labelWidth, bottom: top + labelHeight };
          const overlaps = occupiedRects.some(
            (placed) => rect.left < placed.right + 6 && rect.right + 6 > placed.left && rect.top < placed.bottom + 4 && rect.bottom + 4 > placed.top
          );

          if (overlaps) {
            element.style.opacity = '0';
            continue;
          }

          occupiedRects.push(rect);
          element.style.width = `${labelWidth}px`;
          element.style.opacity = '1';
          element.style.transform = `translate3d(${left}px, ${top}px, 0)`;

          const leader = element.querySelector<HTMLElement>('[data-equipment-leader]');
          if (leader) {
            const deltaX = anchorX - left;
            const deltaY = anchorY - (top + labelHeight / 2);
            leader.style.width = `${Math.hypot(deltaX, deltaY)}px`;
            leader.style.transform = `rotate(${Math.atan2(deltaY, deltaX)}rad)`;
          }
        }
      } else {
        for (const element of labelElements.values()) {
          element.style.opacity = '0';
        }
      }

      renderer.render(scene, camera);
    };

    animate();

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
      terminalBackdrop.dispose();
      renderer.dispose();
    };
  }, [sim, scenarioId]);

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

    // Holding a cable and clicking an occupied port: refuse instead of unplugging it.
    if (iface?.peer && selectedPort && selectedPort !== marker.portId) {
      sounds.playErrorBeep();
      showToast(`⚠️ Port ${marker.portId} is already in use. Pick a free port (dark LED).`);
      return;
    }

    // If port already has a cable connected, clicking it unplugs it!
    if (iface?.peer) {
      const res = sim.disconnectLink(marker.portId);
      if (res.ok) {
        sounds.playCableSnap();
        showToast(`🔌 Unplugged cable from ${marker.portId}. Cable returned to inventory.`);
        onSelectPort(null);
        setSelectedCableKey(null);
        updateCablesAndLeds();
      } else {
        sounds.playErrorBeep();
        showToast(`⚠️ ${res.reason || 'Cannot unplug cable'}`);
      }
      return;
    }

    // Port is free
    if (!selectedPort) {
      if (sim.spareCablesCount <= 0) {
        sounds.playErrorBeep();
        showToast('⚠️ No spare cables remaining in inventory.');
        return;
      }
      onSelectPort(marker.portId);
      showToast(`Selected port ${marker.portId}. Now click a destination port to plug in cable.`);
    } else {
      if (selectedPort === marker.portId) {
        onSelectPort(null);
        showToast('Cabling cancelled.');
        return;
      }

      const res = sim.connectLink(selectedPort, marker.portId);
      if (res.ok) {
        sounds.playCableSnap();
        const activeColorHex = CABLE_COLORS.find((c) => c.css === activeCableColor)?.hex || 0x2563eb;
        const linkKey = linkKeyOf(selectedPort, marker.portId);
        setCustomCableColors((prev) => ({
          ...prev,
          [linkKey]: activeColorHex,
        }));
        setSelectedCableKey(linkKey);

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

  liveRef.current = {
    slidOutUnitIds,
    ejectedDrives,
    lidOpenUnits,
    powerOffUnits,
    isTurboFan,
    isKvmFoldedUp,
    explodedSeparation,
    selectedUnitId,
    isSignalPulseActive,
    selectedPort,
    handlePortClick,
    toggleDriveEject,
    toggleChassisPower,
    onOpenTerminal,
    onOpenThreatMap,
    updateCablesAndLeds,
  };

  const selectedUnitSpec = useMemo(() => {
    return ALL_RACK_UNITS.find((u) => u.id === selectedUnitId) || ALL_RACK_UNITS[2];
  }, [selectedUnitId]);

  const equipmentLabels = useMemo(() => {
    const workstationId = sim.devices.has('SOC-PC') ? 'SOC-PC' : sim.devices.has('PC-1') ? 'PC-1' : 'PC-A';
    return [
      ...ALL_RACK_UNITS.map((unit) => ({ id: unit.id, name: unit.name })),
      { id: workstationId, name: `Workstation ${workstationId}` },
      ...(sim.devices.has('PC-B') ? [{ id: 'PC-B', name: 'Sales Workstation PC-B' }] : []),
    ];
  }, [sim, scenarioId]);

  const toggleEquipmentLabels = () => {
    sounds.playKeyClick();
    setAreEquipmentLabelsVisible((current) => {
      const next = !current;
      equipmentLabelsVisibleRef.current = next;
      return next;
    });
  };

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950 font-sans">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      <div className="pointer-events-none absolute inset-0 z-[8] overflow-hidden" aria-hidden={!areEquipmentLabelsVisible}>
        {equipmentLabels.map((label) => (
          <div
            key={label.id}
            ref={(element) => {
              if (element) equipmentLabelElementsRef.current.set(label.id, element);
              else equipmentLabelElementsRef.current.delete(label.id);
            }}
            className="absolute left-0 top-0 h-[30px] opacity-0 transition-opacity duration-150 will-change-transform"
          >
            <span
              data-equipment-leader
              className="absolute left-0 top-1/2 h-px origin-left bg-cyan-300 shadow-[0_0_5px_rgba(103,232,249,0.95)] after:absolute after:-right-0.5 after:-top-[3px] after:h-2 after:w-2 after:rotate-45 after:border-r after:border-t after:border-cyan-200"
            />
            <span className="relative z-10 flex h-[30px] items-center gap-1.5 rounded-md border border-cyan-300/70 bg-slate-950/95 px-2 text-[10px] font-semibold text-cyan-50 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(103,232,249,0.9)]" />
              <span className="font-mono text-cyan-300">{label.id}</span>
              <span className="truncate text-slate-300">{label.name}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Top Left Camera Presets Bar */}
      <div className="absolute top-2 left-2 right-2 z-10 flex max-w-max flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1.5 text-xs font-medium text-slate-300 shadow-xl sm:top-4 sm:left-4 sm:right-auto">
        <span className="px-2 py-1 text-slate-400 flex items-center gap-1">
          <Camera className="w-3.5 h-3.5 text-cyan-400" /> Angles:
        </span>
        <button
          onClick={() => setCameraPreset('overview')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition"
        >
          Overview
        </button>
        <button
          onClick={() => setCameraPreset('rack_a')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Rack A
        </button>
        <button
          onClick={() => setCameraPreset('rack_b')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          Rack B
        </button>
        <button
          onClick={() => setCameraPreset('kvm')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-purple-400 transition"
        >
          KVM Drawer
        </button>
        <button
          onClick={() => setCameraPreset('desk_1')}
          className="px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition"
        >
          Desk 1
        </button>
        {sim.devices.has('PC-B') && (
          <button
            onClick={() => setCameraPreset('desk_2')}
            className="min-h-11 px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition sm:min-h-0"
          >
            Desk 2
          </button>
        )}
        <button
          type="button"
          onClick={toggleEquipmentLabels}
          aria-pressed={areEquipmentLabelsVisible}
          aria-label={`${areEquipmentLabelsVisible ? 'Hide' : 'Show'} equipment labels`}
          className={`hidden min-h-11 items-center gap-1.5 rounded-lg border px-2.5 py-1 font-semibold transition sm:flex sm:min-h-0 ${
            areEquipmentLabelsVisible
              ? 'border-cyan-300/70 bg-cyan-400/20 text-cyan-200'
              : 'border-slate-700 bg-slate-950/50 text-slate-300 hover:border-cyan-600 hover:text-cyan-300'
          }`}
        >
          <Info className="h-3.5 w-3.5" />
          <span>Labels</span>
          <span className={`h-1.5 w-1.5 rounded-full ${areEquipmentLabelsVisible ? 'bg-cyan-300' : 'bg-slate-600'}`} />
        </button>
      </div>

      <button
        type="button"
        onClick={toggleEquipmentLabels}
        aria-pressed={areEquipmentLabelsVisible}
        aria-label={`${areEquipmentLabelsVisible ? 'Hide' : 'Show'} equipment labels`}
        className={`absolute right-2 top-[270px] z-20 flex min-h-11 items-center gap-2 rounded-xl border px-3 text-xs font-semibold shadow-xl backdrop-blur-md transition sm:hidden ${
          areEquipmentLabelsVisible
            ? 'border-cyan-300/80 bg-cyan-950/95 text-cyan-100'
            : 'border-slate-600 bg-slate-900/95 text-slate-200'
        }`}
      >
        <Info className="h-4 w-4" />
        <span>Equipment labels</span>
        <span className={`h-2 w-2 rounded-full ${areEquipmentLabelsVisible ? 'bg-cyan-300' : 'bg-slate-500'}`} />
      </button>

      {/* Top Right Cabling & Active Color Badge */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-slate-300">
            Spare Cables: <strong className="text-cyan-300 font-mono text-sm">{sim.spareCablesCount}</strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5 pl-2 border-l border-slate-700">
          <span className="text-slate-400 text-[11px]">Active Color:</span>
          <span
            className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
            style={{ backgroundColor: activeCableColor }}
            title={activeCableColor}
          />
        </div>

        {selectedCableKey && (
          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-700">
            <span className="text-cyan-300 font-mono text-[11px] truncate max-w-[140px]" title={selectedCableKey}>
              {selectedCableKey}
            </span>
            <button
              onClick={() => setSelectedCableKey(null)}
              className="text-slate-400 hover:text-white px-1"
            >
              ×
            </button>
          </div>
        )}

        {selectedPort && (
          <div className="flex items-center gap-2 pl-3 border-l border-slate-700">
            <span className="text-amber-300">Holding cable from:</span>
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
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
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
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-indigo-400" />
          <div>
            <div className="text-indigo-300 font-semibold">{hoveredDevice}</div>
            <div className="text-slate-400 text-[11px]">Click to inspect unit, slide rails, or eject drive</div>
          </div>
        </div>
      )}

      {/* CONSOLIDATED BOTTOM INTERACTION DOCK */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-5xl w-[96%]">
        {/* Collapse / Expand Toggle Tab */}
        <button
          onClick={() => {
            sounds.playKeyClick();
            setIsDockCollapsed(!isDockCollapsed);
          }}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl bg-slate-900/90 border-t border-x border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition shadow-lg"
        >
          {isDockCollapsed ? <ChevronUp className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />}
          <span>{isDockCollapsed ? 'Expand 3D Server Room Studio Controls' : 'Hide Controls'}</span>
        </button>

        {!isDockCollapsed && (
          <div className="w-full rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden animate-fade-in flex flex-col">
            {/* Dock Navigation Tabs */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setActiveDockTab('chassis')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${
                    activeDockTab === 'chassis'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Chassis Mechanics & Rails</span>
                </button>

                <button
                  onClick={() => setActiveDockTab('cables')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${
                    activeDockTab === 'cables'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Cable Studio & Palette</span>
                </button>

                <button
                  onClick={() => setActiveDockTab('catalog')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${
                    activeDockTab === 'catalog'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Rack Equipment Catalog</span>
                </button>

                <button
                  onClick={() => setActiveDockTab('cameras')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${
                    activeDockTab === 'cameras'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Camera Angles</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 font-mono hidden md:block">
                Click chassis/ports/cables to interact • Drag to orbit • Scroll to zoom
              </div>
            </div>

            {/* TAB CONTENT 1: CHASSIS MECHANICS & RAILS */}
            {activeDockTab === 'chassis' && (
              <div className="p-4 flex flex-col gap-3 text-xs">
                {/* Unit Details Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm flex items-center gap-2">
                        <span>{selectedUnitSpec.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700">
                          {selectedUnitSpec.rack} • Slot {selectedUnitSpec.slot} ({selectedUnitSpec.uHeight}U)
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                            powerOffUnits.includes(selectedUnitSpec.id)
                              ? 'bg-amber-950 text-amber-300 border-amber-800'
                              : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          }`}
                        >
                          {powerOffUnits.includes(selectedUnitSpec.id) ? 'STANDBY' : 'RUNNING'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{selectedUnitSpec.specs}</p>
                    </div>
                  </div>

                  {/* Unit Selector Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-slate-400 text-[11px] mr-1">Select Unit:</span>
                    {ALL_RACK_UNITS.filter((u) => u.canSlide || u.driveCount || u.isKvm).map((u) => (
                      <button
                        key={u.id}
                        onClick={() => {
                          sounds.playKeyClick();
                          setSelectedUnitId(u.id);
                        }}
                        className={`px-2 py-0.8 rounded text-[11px] font-mono transition ${
                          selectedUnitId === u.id
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {u.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Mechanical Controls Row */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Telescopic Slide Rails Button */}
                    {selectedUnitSpec.canSlide && (
                      <button
                        onClick={() => toggleSlideChassis(selectedUnitSpec.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg transition ${
                          slidOutUnitIds.includes(selectedUnitSpec.id)
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30'
                        }`}
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>{slidOutUnitIds.includes(selectedUnitSpec.id) ? 'Retract Rails' : 'Extend Rails (Slide Out)'}</span>
                      </button>
                    )}

                    {/* Top Cover / Lid Toggle */}
                    {selectedUnitSpec.canSlide && !selectedUnitSpec.isKvm && (
                      <button
                        onClick={() => toggleLid(selectedUnitSpec.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                          lidOpenUnits.includes(selectedUnitSpec.id)
                            ? 'bg-amber-600/30 border border-amber-500/50 text-amber-300'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>{lidOpenUnits.includes(selectedUnitSpec.id) ? 'Replace Top Lid' : 'Remove Top Lid (Inspect Board)'}</span>
                      </button>
                    )}

                    {/* KVM Screen Fold Up Toggle */}
                    {selectedUnitSpec.isKvm && (
                      <button
                        onClick={() => {
                          sounds.playKeyClick();
                          setIsKvmFoldedUp(!isKvmFoldedUp);
                          showToast(isKvmFoldedUp ? 'Folded LCD display down.' : 'Flipped LCD display up 75° to view status.');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                          isKvmFoldedUp
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'bg-slate-800 text-purple-300 hover:bg-slate-700'
                        }`}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isKvmFoldedUp ? 'Fold LCD Down' : 'Flip LCD Monitor Up'}</span>
                      </button>
                    )}

                    {/* Power Cycle Button */}
                    <button
                      onClick={() => toggleChassisPower(selectedUnitSpec.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                        powerOffUnits.includes(selectedUnitSpec.id)
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-red-400 border border-red-500/30'
                      }`}
                    >
                      <Power className="w-3.5 h-3.5" />
                      <span>{powerOffUnits.includes(selectedUnitSpec.id) ? 'Boot / Power Up' : 'Power Down'}</span>
                    </button>

                    {/* Fan Turbo Speed Toggle */}
                    <button
                      onClick={() => {
                        sounds.playFanSpool();
                        setIsTurboFan(!isTurboFan);
                        showToast(!isTurboFan ? '🌪️ Turbo Fan Mode Enabled: 14,500 RPM full blast.' : 'Fan speed returned to normal (4,500 RPM).');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                        isTurboFan
                          ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                          : 'bg-slate-800 hover:bg-slate-700 text-cyan-300'
                      }`}
                    >
                      <Wind className="w-3.5 h-3.5" />
                      <span>{isTurboFan ? 'Turbo Fan 14,500 RPM' : 'Normal Fan Speed'}</span>
                    </button>

                    {/* Open Console if device */}
                    {sim.devices.has(selectedUnitSpec.id) && (
                      <button
                        onClick={() => {
                          sounds.playKeyClick();
                          onOpenTerminal(selectedUnitSpec.id);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition border border-cyan-500/30"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Open Console</span>
                      </button>
                    )}
                  </div>

                  {/* Exploded View Slider */}
                  <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-400 text-[11px]">Exploded View:</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={explodedSeparation}
                      onChange={(e) => setExplodedSeparation(parseFloat(e.target.value))}
                      className="w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <span className="font-mono text-[10px] text-indigo-300 w-8">{Math.round(explodedSeparation * 100)}%</span>
                  </div>
                </div>

                {/* Hot-Swap Drive Bays Sub-Panel */}
                {selectedUnitSpec.driveCount && (
                  <div className="mt-1 p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300 font-medium text-[11px]">
                        Hot-Swap SAS Drive Trays ({selectedUnitSpec.driveCount} Bays):
                      </span>
                      <span className="text-[10px] text-slate-500">Click tray number to eject or latch back:</span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {Array.from({ length: selectedUnitSpec.driveCount }).map((_, dIdx) => {
                        const isEjected = (ejectedDrives[selectedUnitSpec.id] || []).includes(dIdx);
                        return (
                          <button
                            key={dIdx}
                            onClick={() => toggleDriveEject(selectedUnitSpec.id, dIdx)}
                            className={`px-2 py-0.5 rounded font-mono text-[10px] flex items-center gap-1 transition ${
                              isEjected
                                ? 'bg-amber-500 text-slate-950 font-bold border border-amber-400'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                            }`}
                            title={`Drive #${dIdx + 1}: ${isEjected ? 'Ejected' : 'Latched in backplane'}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isEjected ? 'bg-amber-950' : 'bg-emerald-400'}`} />
                            <span>#{dIdx + 1}</span>
                            {isEjected && <span className="text-[9px] uppercase">OUT</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 2: CABLE STUDIO & PALETTE */}
            {activeDockTab === 'cables' && (
              <div className="p-4 flex flex-col gap-3 text-xs">
                {/* Top Controls Row */}
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-400 text-xs font-semibold flex items-center gap-1.5">
                      <Cable className="w-4 h-4 text-cyan-400" /> Palette:
                    </span>
                    {CABLE_COLORS.map((c) => {
                      const isSelected = activeCableColor === c.css;
                      return (
                        <button
                          key={c.id}
                          onClick={() => {
                            sounds.playKeyClick();
                            setActiveCableColor(c.css);
                            if (selectedCableKey) {
                              handleColorSelectedCable(c.hex);
                            } else {
                              showToast(`Selected ${c.label} (${c.role}) for next cables.`);
                            }
                          }}
                          className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${
                            isSelected
                              ? 'bg-slate-800 border-white text-white font-bold shadow-md'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/30 shrink-0"
                            style={{ backgroundColor: c.css }}
                          />
                          <span className="text-[11px]">{c.label}</span>
                          {isSelected && <Check className="w-3 h-3 text-white ml-0.5" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Hex Color Picker */}
                  <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
                    <input
                      type="color"
                      value={customHexInput}
                      onChange={(e) => {
                        setCustomHexInput(e.target.value);
                        setActiveCableColor(e.target.value);
                        if (selectedCableKey) {
                          handleColorSelectedCable(parseInt(e.target.value.replace('#', '0x'), 16));
                        }
                      }}
                      className="w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent"
                      title="Custom Color Picker"
                    />
                    <input
                      type="text"
                      value={customHexInput}
                      onChange={(e) => {
                        setCustomHexInput(e.target.value);
                        if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                          setActiveCableColor(e.target.value);
                          if (selectedCableKey) {
                            handleColorSelectedCable(parseInt(e.target.value.replace('#', '0x'), 16));
                          }
                        }
                      }}
                      className="w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-300 font-mono text-[11px]"
                    />
                  </div>
                </div>

                {/* Cable Options, Batch Tools & Inspector */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
                  {/* Selected Cable Inspector Card */}
                  {selectedCableKey ? (
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs">
                      <span className="text-cyan-300 font-semibold flex items-center gap-1">
                        <Cable className="w-3.5 h-3.5" /> Selected Cable:
                      </span>
                      <span className="font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-semibold">
                        {selectedCableKey}
                      </span>
                      <button
                        onClick={() => {
                          const hex = CABLE_COLORS.find((c) => c.css === activeCableColor)?.hex || 0x2563eb;
                          handleColorSelectedCable(hex);
                        }}
                        className="px-2 py-0.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-[11px]"
                      >
                        Apply Active Color
                      </button>
                      <button
                        onClick={() => {
                          const [pA] = selectedCableKey.split('|');
                          const res = sim.disconnectLink(pA);
                          if (res.ok) {
                            sounds.playCableSnap();
                            setSelectedCableKey(null);
                            updateCablesAndLeds();
                            showToast(`Unplugged cable ${selectedCableKey}`);
                          } else {
                            sounds.playErrorBeep();
                            showToast(`⚠️ ${res.reason || 'Cannot unplug cable'}`);
                          }
                        }}
                        className="px-2 py-0.5 rounded bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-[11px]"
                      >
                        Unplug
                      </button>
                      <button
                        onClick={() => setSelectedCableKey(null)}
                        className="text-slate-400 hover:text-white px-1 ml-1"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Click any cable directly in the 3D server room to customize its jacket color & tension.</span>
                    </div>
                  )}

                  {/* Batch Tools & Controls */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* TIA-606-C Standards Auto-Color */}
                    <button
                      onClick={handleApplyTiaStandards}
                      className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/20 transition"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>TIA-606-C Standards Auto-Color</span>
                    </button>

                    {/* Apply Active Color to All Cables */}
                    <button
                      onClick={() => {
                        const hex = CABLE_COLORS.find((c) => c.css === activeCableColor)?.hex || 0x2563eb;
                        handleRecolorAllCables(hex);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Color All Cables</span>
                    </button>

                    {/* Cable Sag / Droop Slider */}
                    <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
                      <span className="text-slate-400 text-[11px]">Sag:</span>
                      <input
                        type="range"
                        min="0.10"
                        max="0.55"
                        step="0.02"
                        value={customCableTension}
                        onChange={(e) => setCustomCableTension(parseFloat(e.target.value))}
                        className="w-16 accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer"
                        title="Cable Slack / Catenary Curve"
                      />
                    </div>

                    {/* Signal Pulse Toggle */}
                    <button
                      onClick={() => {
                        sounds.playKeyClick();
                        setIsSignalPulseActive(!isSignalPulseActive);
                        showToast(!isSignalPulseActive ? 'Active packet light pulses enabled.' : 'Packet pulses paused.');
                      }}
                      className={`p-1.5 rounded-lg border transition ${
                        isSignalPulseActive
                          ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                      title="Toggle animated packet pulses"
                    >
                      <Zap className="w-3.5 h-3.5" />
                    </button>

                    {/* Reset to Defaults */}
                    <button
                      onClick={() => {
                        sounds.playKeyClick();
                        setCustomCableColors({});
                        setSelectedCableKey(null);
                        showToast('Reset all cables to enterprise role standards.');
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition"
                      title="Reset all colors to default standards"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: RACK EQUIPMENT CATALOG */}
            {activeDockTab === 'catalog' && (
              <div className="p-4 flex flex-col gap-3 text-xs max-h-56 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Rack A Column */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                    <div className="font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <span>Rack A (Production Infrastructure)</span>
                      <span className="text-[10px] text-slate-500 font-mono">19" 42U Standard Cage</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {ALL_RACK_UNITS.filter((u) => u.rack === 'Rack A').map((u) => (
                        <div
                          key={u.id}
                          onClick={() => {
                            sounds.playKeyClick();
                            setSelectedUnitId(u.id);
                            setActiveDockTab('chassis');
                          }}
                          className={`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                            selectedUnitId === u.id
                              ? 'bg-indigo-950/60 border-indigo-500/60 text-white'
                              : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-xs flex items-center gap-1.5">
                              <span className="font-mono text-cyan-400 text-[11px]">{u.id}</span>
                              <span>{u.name}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 truncate max-w-sm">{u.specs}</div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono shrink-0">
                            Slot {u.slot} • {u.uHeight}U
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rack B Column */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                    <div className="font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <span>Rack B (SAN Storage & Redundant Core)</span>
                      <span className="text-[10px] text-slate-500 font-mono">19" 42U Standard Cage</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {ALL_RACK_UNITS.filter((u) => u.rack === 'Rack B').map((u) => (
                        <div
                          key={u.id}
                          onClick={() => {
                            sounds.playKeyClick();
                            setSelectedUnitId(u.id);
                            setActiveDockTab('chassis');
                          }}
                          className={`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${
                            selectedUnitId === u.id
                              ? 'bg-indigo-950/60 border-indigo-500/60 text-white'
                              : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-xs flex items-center gap-1.5">
                              <span className="font-mono text-cyan-400 text-[11px]">{u.id}</span>
                              <span>{u.name}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 truncate max-w-sm">{u.specs}</div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono shrink-0">
                            Slot {u.slot} • {u.uHeight}U
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: CAMERA ANGLES */}
            {activeDockTab === 'cameras' && (
              <div className="p-4 flex items-center justify-between gap-2 flex-wrap text-xs">
                <span className="text-slate-400 text-xs font-semibold">Camera Positions:</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setCameraPreset('overview')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition"
                  >
                    Full Room Overview
                  </button>
                  <button
                    onClick={() => setCameraPreset('rack_a')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition"
                  >
                    Rack A (Production Gear)
                  </button>
                  <button
                    onClick={() => setCameraPreset('rack_b')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition"
                  >
                    Rack B (SAN & Secondary)
                  </button>
                  <button
                    onClick={() => setCameraPreset('kvm')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-600/30 hover:text-purple-300 text-slate-300 transition"
                  >
                    KVM Console Drawer
                  </button>
                  <button
                    onClick={() => setCameraPreset('desk_1')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition"
                  >
                    Desk 1 (PC-A / SOC)
                  </button>
                  {sim.devices.has('PC-B') && (
                    <button
                      onClick={() => setCameraPreset('desk_2')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-600/30 hover:text-amber-300 text-slate-300 transition"
                    >
                      Desk 2 (Sales PC-B)
                    </button>
                  )}
                  <button
                    onClick={() => setCameraPreset('soc')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600/30 hover:text-sky-300 text-slate-300 transition"
                  >
                    Wall SOC Monitor
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Floating Instructions Pill */}
      <div className="absolute bottom-4 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
        <span>Click ports to cable • Click cables to recolor • Click chassis to extend rails • Click drive trays to eject</span>
      </div>

      {/* Interactive Toast Notifications */}
      {toastMessage && (
        <div className="absolute top-32 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-xs text-cyan-200 shadow-2xl animate-fade-in flex items-center gap-2 max-w-lg text-center">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
