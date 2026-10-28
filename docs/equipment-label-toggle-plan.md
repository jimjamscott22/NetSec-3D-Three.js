# Equipment Label Toggle Plan

1. Add an accessible Equipment Labels toggle to the scene controls, with a mobile placement that remains reachable above the control dock.
2. Render compact, high-contrast HTML labels and leader arrows above the WebGL canvas for rack units and workstations.
3. Project equipment world positions into screen coordinates during the existing animation loop; hide off-screen and overlapping labels.
4. Keep the overlay non-interactive and default it off so existing camera, cabling, and equipment interactions remain unchanged.
5. Validate the production build and test the toggle, responsive placement, camera movement, and projected labels in-browser before merging and deploying.
