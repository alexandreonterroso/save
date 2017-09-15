import { ChoixActionPage } from './../choix-action/choix-action';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FTP } from '@ionic-native/ftp';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private fTP: FTP) {
    this.fTP.connect('192.168.0.5', 'alexandre', 'ale252')
      .then((res: any) => {
        console.log('Login successful', res);
        this.fTP.ls('/share/alexandre/photos').then((suc) => {
          console.log(suc);
        })
      })
      .catch((error: any) => console.error(error));

  }
  login() {
    this.navCtrl.push(ChoixActionPage);
  }
}
