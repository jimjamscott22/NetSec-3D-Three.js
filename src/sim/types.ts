export enum CliMode {
  USER_EXEC = 'USER_EXEC',
  PRIV_EXEC = 'PRIV_EXEC',
  GLOBAL_CONFIG = 'GLOBAL_CONFIG',
  INTERFACE_CONFIG = 'INTERFACE_CONFIG',
  VLAN_CONFIG = 'VLAN_CONFIG',
  LINE_CONFIG = 'LINE_CONFIG',
}

export enum DeviceType {
  ROUTER = 'router',
  SWITCH = 'switch',
  HOST = 'host',
  SERVER = 'server',
}

export enum FailReason {
  NONE = 'NONE',
  NO_IP = 'NO_IP',
  NO_LINK = 'NO_LINK',
  ADMIN_DOWN = 'ADMIN_DOWN',
  VLAN_MISMATCH = 'VLAN_MISMATCH',
  WRONG_SUBNET = 'WRONG_SUBNET',
  NO_GATEWAY = 'NO_GATEWAY',
  NO_ROUTE = 'NO_ROUTE',
  HOST_UNREACHABLE = 'HOST_UNREACHABLE',
  ACL_DENIED = 'ACL_DENIED',
}

export enum ShellAction {
  NONE = 'NONE',
  CLOSE_SESSION = 'CLOSE_SESSION',
  OPEN_EDITOR = 'OPEN_EDITOR',
}

export enum HttpOutcome {
  VULNERABLE = 'VULNERABLE',
  PATCHED = 'PATCHED',
  NORMAL = 'NORMAL',
  ERROR = 'ERROR',
}

export interface InterfaceState {
  fullName: string;
  shortName: string;
  adminUp: boolean;
  operUp: boolean;
  ip: string | null;
  mask: string | null;
  peer: string | null; // e.g. "S1:Fa0/1"
  mode?: 'access' | 'trunk';
  accessVlan?: number;
  trunkAllowed?: number[];
  isSubinterface?: boolean;
  parent?: string;
  dot1qVlan?: number;
}

export interface StaticRoute {
  network: string;
  mask: string;
  nextHop: string;
}

export interface NatRule {
  insideLocal: string;
  insideGlobal: string;
}

export interface AclRule {
  id: number;
  action: 'permit' | 'deny';
  network: string;
  wildcard: string;
}

export interface DeviceConfig {
  id: string;
  type: DeviceType;
  model: string;
  hostname: string;
  rack?: string;
  slot?: number;
  desk?: string;
  interfaces: Record<string, InterfaceState>;
  vlans?: Record<number, string>; // Switch: VLAN ID -> Name
  routes?: StaticRoute[];
  natRules?: NatRule[];
  acls?: AclRule[];
  enableSecret?: string;
  users?: Record<string, string>;
  domainName?: string;
  hasRsaKey?: boolean;
  ip?: string; // Host / Server
  mask?: string;
  gateway?: string;
  locked?: boolean;
  files?: Record<string, string>; // Server
  services?: Array<{ id: string; port: number; root: string }>;
  vulns?: VulnDefinition[];
}

export interface PatchRegion {
  file: string;
  firstLine: number;
  lastLine: number;
}

export interface VulnDefinition {
  id: string;
  kind: 'sqli' | 'xss' | string;
  service: string;
  route: string;
  region: PatchRegion;
  accept: string[];
  acceptFixtures?: string[];
  rejectFixtures?: string[];
  hint: string;
  exploit: {
    param: string;
    payload: string;
    vulnerableBody: string;
    patchedBody: string;
  };
}

export interface Link {
  a: string; // "R1:Gi0/0"
  b: string; // "S1:Gi0/1"
  locked?: boolean;
}

export interface StepGuidance {
  targetDevice?: string;
  actionType: 'cable' | 'terminal' | 'report' | 'editor';
  summary: string;
  steps: string[];
  suggestedCommands?: string[];
  explanation: string;
}

export interface ObjectiveDef {
  id: string;
  type: 'ping' | 'config' | 'report' | 'vuln_patched' | 'exploit_test' | 'no_ping' | 'ssh';
  description: string;
  order?: number;
  from?: string;
  to_ip?: string;
  to_device?: string;
  via?: string;
  /** ping: also require the player to have run this ping from a terminal. */
  require_run?: boolean;
  expect_reason?: FailReason;
  device?: string;
  path?: string | string[];
  equals?: any;
  field?: string;
  vuln?: string;
  expect?: 'vulnerable' | 'patched';
  guidance?: StepGuidance;
}

export interface ObjectiveState {
  id: string;
  type: string;
  description: string;
  order?: number;
  locked: boolean;
  passed: boolean;
  failed: boolean;
  failReason: FailReason;
  hint: string;
  detail: string;
  guidance?: StepGuidance;
}

export interface LogLine {
  t: string;
  text: string;
  src_ip?: string;
  geo?: string;
}

export interface LogDescriptor {
  source: string;
  file: string;
  lineCount: number;
}

export interface ReportEvidenceRef {
  source: string;
  file: string;
  line: number;
}

export interface ReportFieldDef {
  id: string;
  label: string;
  kind: 'text' | 'ipv4' | 'choice';
  options?: string[];
  evidence?: ReportEvidenceRef[];
}

export interface ReportFieldState {
  id: string;
  label: string;
  kind: string;
  options?: string[];
  attemptsLeft: number;
  lastValue: string | null;
  solved: boolean;
  maxAttempts: number;
}

export interface ScenarioDef {
  schema_version: number;
  id: string;
  sequence: number;
  title: string;
  briefing: string;
  devices: any[];
  links: Link[];
  spare_cables?: number;
  reserved_ports?: string[];
  logs?: Array<{ source: string; file: string; lines: LogLine[] }>;
  report?: {
    fields: ReportFieldDef[];
    max_attempts?: number;
  };
  objectives: ObjectiveDef[];
  hints?: Array<{ reason: FailReason; text: string }>;
  debrief?: string;
  solution?: any[];
}

export interface PingResult {
  success: boolean;
  hops: string[];
  failReason: FailReason;
  failAt: string;
}

export interface CliResult {
  output: string;
  ok: boolean;
  action: ShellAction;
  actionArg?: string;
}

export interface HttpResult {
  ok: boolean;
  status: number;
  body: string;
  outcome: HttpOutcome;
}

export interface PatchView {
  vulnId: string;
  file: string;
  firstLine: number;
  lastLine: number;
  hint: string;
  isPatched: boolean;
}

export interface DebriefView {
  debrief: string;
  objectives: ObjectiveState[];
  reportAnswers?: Record<string, { answer: string; evidence: Array<{ source: string; file: string; line: number; text: string }> }>;
  vulnPatches?: Array<{ vulnId: string; startingText: string; currentText: string; accepted: boolean }>;
}
