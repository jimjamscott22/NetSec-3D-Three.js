import { DeviceType } from '../types';

export interface DeviceModel {
  id: string;
  type: DeviceType;
  interfaces: string[]; // Canonical names
  defaultRackUnits?: number;
}

export const DEVICE_MODELS: Record<string, DeviceModel> = {
  router_2port: {
    id: 'router_2port',
    type: DeviceType.ROUTER,
    interfaces: ['GigabitEthernet0/0', 'GigabitEthernet0/1'],
    defaultRackUnits: 1,
  },
  switch_24: {
    id: 'switch_24',
    type: DeviceType.SWITCH,
    interfaces: [
      ...Array.from({ length: 24 }, (_, i) => `FastEthernet0/${i + 1}`),
      'GigabitEthernet0/1',
      'GigabitEthernet0/2',
    ],
    defaultRackUnits: 1,
  },
  pc: {
    id: 'pc',
    type: DeviceType.HOST,
    interfaces: ['Ethernet0'],
  },
  server: {
    id: 'server',
    type: DeviceType.SERVER,
    interfaces: ['Ethernet0'],
    defaultRackUnits: 1,
  },
};

export function getModelInterfaces(modelId: string): string[] {
  const model = DEVICE_MODELS[modelId];
  return model ? [...model.interfaces] : [];
}
