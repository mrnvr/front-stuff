import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  uAttempt: string;
  pAttempt: string;

  constructor(private alert: AlertController, private router: Router) { }

  ngOnInit() {
    this.username = 'marin';
    this.password = 'keyclic';
    this.uAttempt = '';
    this.pAttempt = '';
  }

  onSubmit() {
    return this.checkCredentials();
  }

  async checkCredentials() {
    if (this.uAttempt !== this.username) {
      const a = await this.alert.create({
        header: 'Wrong username',
        subHeader: 'Can\'t remember my name',
        buttons: ['I agree'],
      });
      await a.present();
      this.resetCredentials();
      return;
    }
    if (this.pAttempt !== this.password) {
      const a = await this.alert.create({
        header: 'Wrong password',
        subHeader: 'Try again',
        buttons: ['ok'],
      });
      await a.present();
      this.resetCredentials();
      return;
    }
    this.resetCredentials();
    return this.router.navigateByUrl('/tabs/(about:about)');
  }

  resetCredentials() {
    this.uAttempt = '';
    this.pAttempt = '';
  }
}
