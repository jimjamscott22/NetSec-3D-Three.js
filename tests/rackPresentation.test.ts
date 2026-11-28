import { PerspectiveCamera, Vector3 } from 'three';
import { describe, expect, it } from 'vitest';
import { ALL_RACK_UNITS } from '../src/world/ServerRoom3D';
import {
  frontRackView, rackUnitView, roomOrbitFov, roomOverview, PORTRAIT_ROOM_SHIFT, RACK_LAYOUT,
  type RackName,
} from '../src/world/rackPresentation';

const racks = Object.keys(RACK_LAYOUT) as RackName[];

describe.each([[1440, 840], [390, 720], [320, 650]])('rack cameras at %i × %i', (width, height) => {
  function cameraFor(view: ReturnType<typeof roomOverview>, preset: string, unitId = '') {
    const aspect = width / height;
    const camera = new PerspectiveCamera(roomOrbitFov(aspect, preset, unitId), aspect, 0.1, 100);
    if (aspect < 1) camera.setViewOffset(width, height, 0, -height * PORTRAIT_ROOM_SHIFT, width, height);
    camera.position.copy(view.pos);
    camera.lookAt(view.lookAt);
    camera.updateMatrixWorld();
    return camera;
  }

  function projectCorners(camera: PerspectiveCamera, rack: RackName, bottom: number, top: number, depth: number, halfWidth: number) {
    const { x, z } = RACK_LAYOUT[rack];
    return [-halfWidth, halfWidth].flatMap((offsetX) => [bottom, top].map((y) => (
      new Vector3(x + offsetX, y, z + depth).project(camera)
    )));
  }

  function expectOnScreen(points: Vector3[]) {
    for (const point of points) {
      expect(Math.max(Math.abs(point.x), Math.abs(point.y), Math.abs(point.z))).toBeLessThan(1);
    }
  }

  it('shows both cabinet fronts without overlapping them', () => {
    const camera = cameraFor(roomOverview(), 'overview');
    const [left, right] = racks.map((rack) => projectCorners(camera, rack, 0, 2.97, 0.56, 0.55));
    expectOnScreen([...left, ...right]);
    expect(Math.max(...left.map(({ x }) => x))).toBeLessThan(Math.min(...right.map(({ x }) => x)));
  });

  it('frames each full rack independently', () => {
    for (const [index, rack] of racks.entries()) {
      const camera = cameraFor(frontRackView(rack), index === 0 ? 'rack_a' : 'rack_b');
      expectOnScreen(projectCorners(camera, rack, 0, 2.97, 0.56, 0.55));
    }
  });

  it('keeps each unit and its tag framed, including extended chassis', () => {
    for (const unit of ALL_RACK_UNITS) {
      const camera = cameraFor(rackUnitView(unit.rack, unit.y), unit.rack === 'Rack A' ? 'rack_a' : 'rack_b', unit.id);
      expectOnScreen(projectCorners(camera, unit.rack, unit.y - 0.06, unit.y + 0.13, unit.canSlide ? 0.98 : 0.4, 0.5));
    }
  });
});
