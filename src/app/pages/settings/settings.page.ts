import { Component, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  public image: SafeResourceUrl;

  constructor(
    private zone: NgZone,
    private domSanitizer: DomSanitizer
  ) { }

  async takePhoto() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    return this.domSanitizer.bypassSecurityTrustResourceUrl(result && result.base64Data);
  }
}
