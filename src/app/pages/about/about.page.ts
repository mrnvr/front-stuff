import { Component, Input, OnInit } from '@angular/core';

import { GeolocationPosition, Plugins } from '@capacitor/core';

import { AlertController } from '@ionic/angular';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @Input() public position: GeolocationPosition;
  public toggleGeolocationAlert: boolean;

  constructor(private alertCtrl: AlertController) {
    this.toggleGeolocationAlert = true;
  }

  ngOnInit() {
    this.getCurrentPosition()
      .then(() => this.toggleGeolocationAlert = true)
      .catch(err => {
        this.toggleGeolocationAlert = false;
        console.log(err);
      });
  }

  async getCurrentPosition() {
    this.position = await Geolocation.getCurrentPosition();
  }

  async showAlert() {
    const lat = this.position.coords.latitude.toPrecision(8);
    const long = this.position.coords.longitude.toPrecision(8);
    const al = await this.alertCtrl.create({
      header: 'Position',
      message: 'Lat: ' + lat + '\nLong: ' + long,
      buttons: [
        'ok'
      ]
    });
    await al.present();
  }
}
