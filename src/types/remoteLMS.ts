export enum RemoteLMSType {
  MOODLE = 'MOODLE',
  INSENDI = 'INSENDI',
}

export enum SyncState {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
  FAILED = 'FAILED',
}

export type RemoteLMS = {
  displayName: 'Insendi' | 'Moodle - bsc' | 'Moodle - PM';
  type: RemoteLMSType;
  urlLink: string;
};
