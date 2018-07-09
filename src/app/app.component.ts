import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  readonly key = 'BJ194kBackiD-K1emxGtnXEPn1qlwyXVRGhITkaNWJzMokZ7RZLvOt0eVBvBfUMbJFiUafnkdCIGZWh6CGk8CLs';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push: SwPush,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.subscribeToPush();
    });
  }

  subscribeToPush() {
    this.push.messages.subscribe(msg => {
      console.log(msg);
    });

    this.push.requestSubscription({
      serverPublicKey: this.key
    })
      .then(pushSubscription => console.log(pushSubscription.toJSON()))
      .catch(err => console.log(err));
  }
}
