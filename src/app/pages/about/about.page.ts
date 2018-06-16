import { Component, OnInit } from '@angular/core';

import {GeolocationPosition, Plugins} from '@capacitor/core';

import {AlertController} from '@ionic/angular';

const {Geolocation} = Plugins;

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  position: GeolocationPosition;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    this.position = await Geolocation.getCurrentPosition();
  }

  async showAlert() {
    const lat = this.position.coords.latitude.toPrecision(8);
    const long = this.position.coords.longitude;
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
