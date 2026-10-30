# NetSec 3D Simulator - Three.js Version

A browser-based 3D networking and security simulator built with Three.js, React, and TypeScript. Fix broken networks and insecure servers in an interactive server room through a Cisco IOS-style terminal, across four missions: orientation, VLAN connectivity, log triage, and web patching. Built to teach CCNA-level networking concepts and introductory security investigation hands-on.

All devices, packets, logs, HTTP responses, and code patches are simulated in the browser. No physical networking equipment, backend service, database, or PHP runtime is required.

## Contents

- [Features and missions](#features-and-missions)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [How to play](#how-to-play)
- [Development commands](#development-commands)
- [Production build and hosting](#production-build-and-hosting)
- [Project structure](#project-structure)
- [Development and verification](#development-and-verification)
- [Troubleshooting](#troubleshooting)
- [Scope and limitations](#scope-and-limitations)
- [License](#license)

## Features and missions

- Interactive Three.js server room with camera presets, equipment labels, clickable devices and ports, cable customization, and link indicators.
- Simulated routers, switches, PCs, and servers with IPv4 addressing, access VLANs, trunks, router subinterfaces, and connectivity checks.
- IOS-style configuration modes, command abbreviations, contextual help, terminal history, and completion.
- Live mission objectives, contextual guidance, mission restart, and completion tracking.
- SOC log viewer, threat map, and incident report form.
- Guided patch editor for SQL injection and reflected cross-site scripting exercises.
- Sound effects with mute controls.

| Mission | Title | Practice |
| --- | --- | --- |
| M0 | Orientation: First Connection | Locate a PC, use its terminal, and ping another host. |
| M1 | Day One: Get Them Talking | Cable PC-B, configure VLANs and a trunk, and set up router-on-a-stick connectivity. |
| M2 | Who Knocked? | Investigate authentication logs and submit an incident triage report. |
| M3 | Patch Tuesday | Demonstrate simulated SQL injection and reflected XSS, patch the affected code, and retest. |

The mission catalog unlocks missions as the preceding mission is completed.

## Requirements

- **Node.js 22 or newer** and **npm** for the setup workflow below. The locked Tailwind CSS native tooling requires at least Node.js 20; the project does not pin a Node version.
- **Git** to clone the repository.
- A desktop browser with **WebGL enabled**, a mouse or trackpad, and a keyboard. The interface relies on mouse navigation and terminal input.

The application uses React 18, Three.js 0.170, TypeScript 5, Vite 5, Tailwind CSS 4, and Lucide icons. Exact installed versions are recorded in [package-lock.json](package-lock.json).

## Quick start

```bash
git clone https://github.com/jimjamscott22/NetSec-3D-Three.js.git
cd NetSec-3D-Three.js
npm ci
npm run dev
```

Open **http://localhost:3000**. Stop the server with **Ctrl+C** in the terminal where it is running.

If you already have the repository, run `npm ci` and `npm run dev` from its root. `npm ci` installs dependencies from the committed lockfile.

The development server binds to `0.0.0.0`, making it reachable through the machine's network address as well as localhost. Port 3000 is strict: startup fails if it is already occupied. To use another port:

```bash
npm run dev -- --port 3001
```

### Configuration

No environment variables, API keys, or account setup are required. [.env.example](.env.example) contains a `VITE_APP_TITLE` example, but the current UI does not read that variable; copying it to `.env` is unnecessary.

## How to play

1. Start with **Orientation: First Connection**. The app opens the PC-A terminal and contextual guidance automatically.
2. Close the guidance overlay when ready, click the terminal input, and enter:

   ```text
   ping 192.168.1.20
   ```

3. Watch the objective panel for completion feedback. Use the mission button in the top bar to open the campaign catalog and launch the next available mission.
4. Follow the named devices, ports, and objectives in each mission. Open **Guidance (H)** whenever you need step-by-step instructions or suggested commands.

### Controls

| Action | Control |
| --- | --- |
| Change viewpoint | Use the camera angle buttons, such as Overview or the desk views. |
| Orbit the room | Hold the left mouse button and drag in the 3D viewport. |
| Zoom | Scroll in the 3D viewport. |
| Open a device console | Click a mission device or use the top-bar **CLI Terminal** button. |
| Change terminal device | Use the device selector in the terminal. |
| Connect a cable | Click a free source port, then a free destination port; a spare cable must be available. |
| Cancel a port selection | Click the selected source port again. |
| Disconnect a cable | Click an occupied port on an unlocked link. Locked scenario links cannot be removed. |
| Toggle guidance | Click **Guidance (H)** or press **H** while focus is outside a text input. |
| Run a command | Press **Enter** in the terminal. |
| Browse command history | Press **Up / Down** in the terminal. |
| Complete a command | Press **Tab** in the terminal. |
| Get IOS command help | Press **?** in a router or switch terminal. |
| Leave configuration mode | Press **Ctrl+Z** in an IOS terminal. |
| Open mission tools | Use **SOC Logs & Threat Map** in M2 or **Patch Editor** in M3. |
| Mute or unmute | Use the speaker controls. |

### Terminal examples

Commands are entered inside the simulator's terminal. Their availability depends on the selected device and current configuration mode.

| Device | Useful starting commands |
| --- | --- |
| PC | `help`, `ipconfig`, `ping 192.168.1.20` |
| Router or switch | `enable`, `show running-config`, `show ip interface brief` |
| Switch | `show vlan brief` from privileged EXEC mode |
| Server | `help`, `ls`, `cat /var/log/auth.log`, `tail -n 20 /var/log/auth.log` |

The terminal includes a cheatsheet, and mission guidance supplies the commands needed for each objective. This is a limited teaching command set rather than a complete Cisco IOS or operating-system shell.

### Saved progress

Completed mission IDs are saved in browser `localStorage` under `netsec_completed_missions`. They are local to that browser profile and site origin; changing the hostname or port uses separate storage.

Active device configuration, cables, report entries, and patches stay in memory. Reloading the page starts at orientation; loading or restarting a mission rebuilds its starting state. Completion badges are retained when browser storage is available. To reset completion history, remove that storage key through the browser's developer tools and reload.

## Development commands

Run these from the repository root after `npm ci`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite's development server on port 3000 with hot updates. |
| `npm run lint` | Run TypeScript checking with `tsc --noEmit`. This script does not run ESLint. |
| `npm run build` | Bundle the application into `dist/`. |
| `npm run preview` | Serve the built `dist/` locally, requesting port 3000. Run the build first. |

There is currently no `npm test` script or automated test suite in this checkout. Type checking and production bundling are separate checks; run both before submitting changes.

## Production build and hosting

```bash
npm run lint
npm run build
npm run preview
```

Stop the development server first if it is using port 3000. Open the URL printed by the preview command; preview may choose another port if its requested port is occupied.

Deploy the generated **`dist/` directory** to a static web host. Node.js is needed to build the app, but the deployed application runs entirely in the browser. Vite preview is for checking a build locally, not for operating a production server.

The default asset base is `/`. If hosting under a subdirectory, build with the matching base path. For a GitHub Pages project site for this repository:

```bash
npm run build -- --base=/NetSec-3D-Three.js/
```

Use the resulting `dist/` output for that deployment. See [Vite 5's static deployment guide](https://github.com/vitejs/vite/blob/v5.4.21/docs/guide/static-deploy.md) for hosting details.

This repository currently tracks `dist/`. A normal build may change those generated files; review them separately from source changes and build fresh output before deploying.

## Project structure

```text
src/
  main.tsx                 React entry point
  App.tsx                  Mission loading, panels, and saved completion state
  index.css                Global styles and Tailwind CSS import
  sim/
    core/network_sim.ts    Simulation facade and state-changing operations
    devices/               Device models and interface state
    cli/                   CLI sessions, tokenization, and output formatting
    net/                   IPv4 helpers and connectivity resolution
    scenario/              Mission definitions, objective evaluation, and guidance
    web/                   Code patch matching
    types.ts               Shared simulation types
  ui/                      Terminal, objectives, mission catalog, logs, and editor
  world/ServerRoom3D.tsx    Three.js scene, camera, equipment, and cabling
  utils/audio.ts           Browser sound effects
docs/                      Design documents and planning material
index.html                 HTML entry point
vite.config.ts             React/Tailwind plugins and development server settings
tsconfig.json              TypeScript compiler settings
```

Simulation logic lives under `src/sim/`; React panels and the Three.js world present that state and handle interaction. Mission definitions are TypeScript objects in [src/sim/scenario/scenarios.ts](src/sim/scenario/scenarios.ts), with shared guidance in [src/sim/scenario/guidance.ts](src/sim/scenario/guidance.ts).

### Design documents

- [Specification](docs/SPEC.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Equipment label toggle plan](docs/equipment-label-toggle-plan.md)

The specification, implementation plan, and `.claude/skills/netsec-sim/` references describe an earlier Godot/GDScript design, including proposed tests and features. They are background material and are not a reliable checklist of implemented browser features. The current runnable application is the React/TypeScript project described here; Godot is not required.

## Development and verification

Keep changes consistent with the existing separation between simulation logic and presentation. For mission changes, check the scenario definition, objective evaluator, contextual guidance, and affected panels together.

Before submitting a change:

1. Run `npm run lint` and `npm run build`.
2. Run the app and exercise the affected mission, including objective feedback and restart behavior.
3. For UI changes, check the browser console and confirm that the terminal, guidance overlays, and 3D interactions remain usable.
4. Describe the behavior changed and the checks actually performed in the pull request. Keep unrelated generated output and dependency changes separate.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| `npm` is not found or installation reports an unsupported engine | Install Node.js and npm, reopen your terminal, and check `node --version` and `npm --version`. Use Node.js 22 or newer for the workflow above. |
| Port 3000 is already in use | Stop the other server or run `npm run dev -- --port 3001`. |
| Blank or missing 3D room | Check the browser console, WebGL support, and hardware acceleration. Try a desktop browser with graphics acceleration enabled. |
| Guidance shortcut does not respond | Move focus out of the terminal or another text input, or click **Guidance (H)**. |
| A command is rejected | Confirm the selected device, IOS mode, and syntax using `?`, `help`, the cheatsheet, or mission guidance. |
| A cable cannot be connected | Check spare cable inventory, whether both ports are free, and whether either port is reserved. |
| Completion history disappears | Check browser storage permissions and that you are using the same browser profile, hostname, and port. |
| Hosted build cannot load JavaScript or CSS | Check that the full `dist/` directory was deployed and that the build's base path matches the hosting path. |

## Scope and limitations

- Network traffic is resolved from simulation state. `ping` and `curl` inside the app do not send traffic to real equipment or websites.
- Logs and threat-map data are mission fixtures, not live security monitoring or threat intelligence.
- The patch editor accepts predefined code patterns after normalization. It does not execute PHP or prove that arbitrary replacement code is secure.
- Only mission completion is persisted; there are no user accounts, cloud saves, or resumable in-progress sessions.
- The room includes decorative equipment and visual interactions beyond the mission's simulated devices. Follow objective names and guidance to identify relevant equipment.
- This is an educational simulator with a limited command set, not a full network emulator or a substitute for hands-on practice with real systems.

## License

[MIT](LICENSE) — Copyright (c) 2026 Jamie Scott.
