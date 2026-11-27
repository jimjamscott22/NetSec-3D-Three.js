# NetSec 3D Simulator

You’re the technician on shift in a virtual server room. Find the right device, trace a cable, open a console, and use the mission checklist to see whether your fix worked. The four-mission campaign covers CCNA-level networking fundamentals and introductory security operations.

This is the **Three.js browser fork of the original Godot 4 game**. The room runs in Three.js, the interface is built with React and TypeScript, and an Express server saves progress to SQLite. You don’t need Godot, physical networking equipment, or an external database.

<p align="center">
  <img src="public/terminal-command-wall.png" alt="Illustration of a terminal monitor between server racks" width="560">
</p>

## Run locally

You’ll need **Node.js 22.18 or newer**, npm, Git, and a WebGL-capable browser. Use the Express development command below so the game and its save API run together.

```sh
git clone https://github.com/jimjamscott22/NetSec-3D-Three.js.git
cd NetSec-3D-Three.js
npm ci
npm run dev
```

Open **http://localhost:3000**. Press `Ctrl+C` in the server terminal to stop it. No API keys or accounts are required.

| Environment variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | HTTP port for the game and its API. |
| `NETSEC_DB_PATH` | `./data/netsec.db` | SQLite file for saves and progress. Relative paths are resolved from the working directory. |

If the default port is busy, set `PORT` before starting the server. For example, in Bash or zsh: `PORT=3001 npm run dev`. See [`.env.example`](.env.example) for sample values. The Express entry point reads the process environment; copying the example to `.env` alone does not configure it.

## Play your first mission

1. Open **Missions** and choose **Orientation: First Connection**.
2. Select **PC-A console** in the mission panel. In the **in-game** terminal, run `ping 192.168.1.20` to reach PC-B.
3. Check the objective panel for verification, then select **View debrief** to continue to the next mission. Use **Guidance** (or `H` when you’re not typing) if you get stuck.

| Mission | What you’ll do |
| --- | --- |
| **M0 · Orientation: First Connection** | Find PC-A, open its console, and verify that PC-B responds. |
| **M1 · Day One: Get Them Talking** | Cable PC-B, configure VLANs and a trunk, and restore connectivity with router-on-a-stick routing. |
| **M2 · Who Knocked?** | Review simulated authentication logs and a threat map, then submit an incident report. |
| **M3 · Patch Tuesday** | Use the patch editor to fix simulated SQL injection and reflected cross-site scripting flaws and verify the fixes. |

Missions unlock in order when the preceding mission is verified.

### Room and console controls

| To… | Use… |
| --- | --- |
| Find a device | Choose a preset from **Room camera** (for example, **Rack A**, **Rear servicing**, or **Desk 1**). Toggle **Equipment labels** to identify hardware. |
| Look around | Drag the room to orbit or look. In orbit view, scroll to zoom. In first- or third-person view, move with `WASD`, the arrow keys, or the on-screen touch controls. Hold `Shift` to move faster on a keyboard. |
| Open a console | Click or tap a mission device, use the console button in the mission panel, or select **Terminal** in the toolbar and choose a device. |
| Patch a cable | Select one free port, then another, while a spare cable is available. Select the first port again to cancel. Locked links can’t be unplugged. |
| Use the terminal | Press `Enter` to run a command, `↑`/`↓` for history, and `Tab` for completion. On routers and switches, `?` shows IOS-style help. |
| Open security tools | Use **Incident report** in M2 or **Patch editor** in M3. |

The room also has a diagnostic cable view, cable styling tools, and interactive server hardware such as slide rails, drive bays, and power supplies. Not every rack object is part of a mission; follow the device and port names in the checklist.

## Saves and hosting

The game autosaves mission state to SQLite and restores the active checkpoint when you reopen it. **Save** creates a manual checkpoint; **Sessions** lets you create, resume, overwrite, or delete named saves. **Restart** resets the current mission without clearing verified missions or manual saves. To start the campaign over, use the reset option in **Sessions**.

For a production-style local run, stop the dev server first, then run:

```sh
npm run build
NODE_ENV=production npm start
```

Set `NODE_ENV` in the process environment before `npm start` if your shell doesn’t support inline assignments. Express serves `dist/` and the save API from the same port. `npm run preview` serves only the Vite build; it does not provide the save API.

For hosting with saves, run the Node server with a persistent, writable volume for `NETSEC_DB_PATH`. The server binds to `0.0.0.0`, and the save API is unauthenticated: all visitors to one instance share the same progress and saves. Keep the instance local or behind access controls. If saves don’t persist, check that you’re running through Express and that the database path is writable and hasn’t changed.

## Development

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs Express with Vite middleware for frontend development. |
| `npm run lint` | Runs the TypeScript checker (`tsc --noEmit`). |
| `npm test` | Runs the Vitest mission and SQLite persistence suites. |
| `npm run build` | Bundles the frontend into `dist/`. |
| `npm start` | Starts the Express entry point; set `NODE_ENV=production` to serve `dist/`. |

| Where | What lives there |
| --- | --- |
| [`src/sim/`](src/sim/) | Device and network models, CLI commands, mission definitions, objective checks, and guidance. Start with [`scenarios.ts`](src/sim/scenario/scenarios.ts) to change a mission. |
| [`src/world/ServerRoom3D.tsx`](src/world/ServerRoom3D.tsx) | Three.js room, cameras, equipment, and cables. |
| [`src/ui/`](src/ui/) | Mission panels, terminal, session manager, log viewer, and patch editor. |
| [`server.ts`](server.ts) and [`server/db.ts`](server/db.ts) | Express routes and SQLite-backed sessions and campaign progress. |
| [`tests/`](tests/) | Mission and persistence tests. |

The [original specification](docs/SPEC.md) and [implementation plan](docs/IMPLEMENTATION_PLAN.md) record the Godot/GDScript design. They’re historical references, not setup instructions or a feature checklist for the Three.js fork.

## Simulation scope

The network, devices, logs, and web responses are simulated. In-game commands don’t contact real networks, the terminal is not a full Cisco IOS or operating-system shell, and the patch editor checks expected changes without executing PHP. Use the game to practice diagnosis and verification, not as a live monitoring tool or full network emulator.

## License

[MIT](LICENSE) — Copyright (c) 2026 Jamie Scott.
