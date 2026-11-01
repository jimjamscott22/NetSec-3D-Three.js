# Advanced 3D Server Room Interactions & Mechanical Simulation

A comprehensive mechanical and visual upgrade for the NetSec 3D Simulator, bringing realistic physical datacenter interactions to equipment racks, server chassis, and structured cabling.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during Phase 1 interactive clarification:
> - **Unified Interaction Scope**: All three areas (rack units, chassis mechanics, and cable customization) will be expanded in a cohesive, interconnected datacenter workflow.
> - **Chassis Mechanical Focus**: Hot-swap dual redundant power supplies (PSUs) with mechanical release levers, status LEDs, and rear service inspection will be added alongside existing drive and rail mechanics.
> - **Cable Customization Strategy**: Quick-apply preset color profiles grouped by network function (VLAN 10 Accounting, VLAN 20 Sales, 802.1Q Trunks, Management/IPMI, and Storage SAN) plus visual cable bundle grouping and velcro ties.

- **Non-Destructive Simulation Wiring**: All new visual units and mechanical components preserve 100% backward compatibility with existing mission objectives (M0 Orientation, M1 VLANs, M2 Log Triage, M3 Patching) and unit tests.
- **Performance Budget**: Reusable Three.js geometries and pre-allocated vectors ensure smooth 60fps rendering during orbit navigation and mechanical animations.

---

### 1. Overview & Core Concept

- **What It Does**: Enhances the interactive 3D server room with deep mechanical realism:
  1. **Chassis Servicing**: Hot-swap dual power supply units (PSU 1 & PSU 2) with eject levers, redundant AC failover states, and rear chassis servicing view.
  2. **Additional Datacenter Equipment**: Interactive rack transfer switches (ATS), modular patch bays, environmental sensor telemetry, and terminal-accessible appliances.
  3. **Structured Cable Management**: 1-click ANSI/TIA-606-C and VLAN bundle coloring, velcro cable comb groupings, catenary sag adjustments, and real-time signal pulse flow.
- **Target Persona**: Network engineering students, CCNA candidates, and security analysts who benefit from tactile spatial memory of physical cabling and enterprise server hardware.
- **Key Value**: Bridges the gap between abstract CLI configuration commands and physical datacenter hardware realities.

---

### 2. User Experience & Visual Design

#### Key User Flows

1. **Chassis & PSU Hot-Swap Servicing**:
   - The user selects any production server (e.g., `WEB1`, `DB1`, `APP2`) in the 3D room or bottom dock.
   - Clicking **"Extend Rails"** slides the chassis out on telescopic stainless steel rails.
   - Clicking **"Eject PSU 1"** triggers mechanical latch audio, pops the redundant power supply out by 12cm, and flips the power redundancy LED to amber standby while the server continues running on PSU 2.
   - Ejecting both PSUs switches the server status to unpowered and terminates live network traffic on its ports.

2. **VLAN & Cable Bundle Quick-Presets**:
   - In the **Cable Studio** tab, clicking **"Apply VLAN Standard Bundles"** instantly colors every cable based on connected endpoint roles:
     - Blue for VLAN 10 (Accounting Access)
     - Amber for VLAN 20 (Sales Access)
     - Aqua for 802.1Q Trunks (Router-on-a-stick links)
     - Emerald for Production Servers & Default Gateways
     - Purple for SOC / Tap Monitoring links
   - Clicking a cable in the 3D room highlights its path, displays port endpoints, and allows tension/sag tuning or instant recoloring.

3. **Rack Equipment Inspection & Telescopic Viewpoints**:
   - The user toggles camera presets (`Rack A`, `Rack B`, `Rear Servicing`, `KVM Drawer`, `Overview`).
   - Floating non-intrusive equipment labels provide instant spatial identification without cluttering the 3D viewport.

#### Visual Theme & Spatial Presence

- **Palette**: Deep slate/obsidian canvas (`#060911`), anodized equipment aluminum (`#1e293b`), brushed steel rails (`#94a3b8`), with sharp functional status accents:
  - Cyan (`#38bdf8`) for interface highlights and active selections
  - Emerald (`#22c55e`) for operational link status and dual PSU health
  - Amber (`#f59e0b`) for degraded redundancy or unlatched components
  - Crimson (`#ef4444`) for critical disconnections or tamper alerts
- **Typography**: Clean display sans (`Plus Jakarta Sans`) paired with monospace tabular figures (`JetBrains Mono` / `ui-monospace`) for port identifiers, MAC/IP telemetry, and rack slot units.
- **Ergonomics**: 100% unobstructed central 3D viewport with a sleek collapsible bottom glass dock, accessible equipment label toggle, and responsive touch/mouse controls.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Modular Component Hierarchy over Monolithic Meshes**:
  - *Approach*: Build equipment chassis as hierarchical `THREE.Group` instances with decoupled child meshes (outer shell, lid, rail slides, fan bulkheads, drive caddies, dual PSUs).
  - *Why*: Allows independent kinematic animation (exponential damping along individual axes) without re-instantiating the WebGL scene.
- **Decision 2: Persistent State Ref (`liveRef`) for Zero-Jank Rendering**:
  - *Approach*: Maintain latest interaction states and event callbacks in `liveRef` inside `ServerRoom3D.tsx`.
  - *Why*: Eliminates costly scene tear-downs or camera jumps when clicking UI buttons, maintaining 60 FPS animation loops and smooth camera lerping.
- **Decision 3: Zero-Broken-Dependency Audio & Geometry**:
  - *Approach*: 100% procedural procedural Web Audio synthesizers (relay clicks, mechanical latch snaps, fan spools) and procedural Three.js geometries.
  - *Why*: Zero 404 network requests or asset loading delays in hermetic environments.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                               React App                                │
│   ┌─────────────────────┐   ┌──────────────────────────────────────┐   │
│   │    NetworkSim       │   │           State & Store              │   │
│   │  (Devices, Links,   │◄──┤  • Selected unit / port / cable      │   │
│   │   Objectives, CLI)  │   │  • Chassis states (rails, PSUs, lid) │   │
│   └──────────┬──────────┘   │  • Cable colors & bundle presets     │   │
│              │              └──────────────────┬───────────────────┘   │
│              ▼                                 ▼                       │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                   ServerRoom3D (Three.js)                      │   │
│   │  ┌──────────────────────┐  ┌────────────────────────────────┐  │   │
│   │  │   Rack A & B Cages   │  │    Interactive Cabling Tube    │  │   │
│   │  │ • 18 Modular Units   │  │ • CatmullRom catenary curves   │  │   │
│   │  │ • Dual Redundant PSUs│  │ • VLAN color classification   │  │   │
│   │  │ • Telescopic Rails   │  │ • Signal packet light pulses   │  │   │
│   │  │ • Hot-Swap SAS Bays  │  │ • Catenary sag / tension       │  │   │
│   │  │ • Removable Top Lids │  └────────────────────────────────┘  │   │
│   │  │ • Spinning Blower Fan│  ┌────────────────────────────────┐  │   │
│   │  │ • KVM 17" LCD Hinge  │  │   Dynamic HTML Label Overlay   │  │   │
│   │  └──────────────────────┘  │ • World-to-screen projection   │  │   │
│   │                            │ • Occlusion & overlap cull     │  │   │
│   │                            └────────────────────────────────┘  │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                      ▲                                 │
│                                      │                                 │
│                     ┌────────────────┴───────────────┐                 │
│                     │ Collapsible Bottom Studio Dock │                 │
│                     │  [Chassis] [Cables] [Catalog]  │                 │
│                     └────────────────────────────────┘                 │
└────────────────────────────────────────────────────────────────────────┘
```

#### Component & State Implementation Status

1. **Chassis PSU Redundancy Subsystem (`ServerRoom3D.tsx`)** [COMPLETED]:
   - Added `ejectedPsus: Record<string, number[]>` tracking `[0, 1]` for primary and secondary PSUs.
   - Built procedural PSU module modeling with extraction lever, status LED, wire bail, and AC IEC inlet.
   - Synthesized audio feedback (`sounds.playLatchClick()`, `sounds.playSwitchClick()`, `sounds.playFanSpool()`).
   - Redundancy degradation logic: 1 PSU removed = warning amber LED (N+0 active); 2 PSUs removed = total power loss with fan spin-down and unpowered chassis.

2. **Cable Bundle & VLAN Auto-Classification** [COMPLETED]:
   - Added Quick-Apply preset selectors: `VLAN Standard`, `Datacenter Fabric`, `SAN Storage`, and `High-Contrast Audit`.
   - Added toggleable 3D velcro cable management grouping combs along cable catenary curves.
   - Individual cable selection, catenary sag tuning, recoloring, and disconnection working smoothly.

3. **New Rack Units & Telemetry** [COMPLETED]:
   - Added 1U Dual-Source Automatic Transfer Switch (`ATS1`) with dual source LEDs, fast transfer relay, and rear C20 inlets.
   - Added 1U 48-Port Keystone Passthrough Bay (`PATCH_48`) with high-density RJ45 port rows.
   - Added `Rear Servicing` camera angle preset for viewing rear I/O and hot-swap bays.

4. **Verification & Quality Checks** [VERIFIED]:
   - Vitest suite (`npm test`): 13/13 tests passed.
   - TypeScript check (`npm run lint`): 0 errors.
   - Production compilation (`compile_applet`): Clean build.
   - Updated `README.md` with full documentation of controls and mechanics.
