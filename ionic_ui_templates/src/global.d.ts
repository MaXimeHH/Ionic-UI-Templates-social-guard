export interface ElectronAPI {
  send: (channel: string, data?: any) => void;
  getPoints: (callback: (points: number) => void) => void;
  goBackToTwitter: () => void;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
