import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  private electronAPI: any;

  constructor() {
    if ((window as any).electronAPI) {
      this.electronAPI = (window as any).electronAPI;
    }
  }

  send(channel: string, data?: any) {
    if (this.electronAPI) {
      this.electronAPI.send(channel, data);
    }
  }
}
