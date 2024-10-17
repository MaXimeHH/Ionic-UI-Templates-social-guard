// src/global.d.ts
interface Window {
  electronAPI: {
    send: (channel: string, data?: any) => void;
    getPoints: (callback: (points: number) => void) => void;
    goBackToTwitter: () => void;
  };
}
