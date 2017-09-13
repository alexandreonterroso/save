import { ChoixActionPage } from './../choix-action/choix-action';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  login() {
    this.navCtrl.push(ChoixActionPage);
  }
}
