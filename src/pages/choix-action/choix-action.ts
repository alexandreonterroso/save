import { PhotosPage } from './../photos/photos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-choix-action',
  templateUrl: 'choix-action.html'
})
export class ChoixActionPage {

  constructor(public navCtrl: NavController) {
  }
  photoVideo(){
    this.navCtrl.push(PhotosPage);
  }
}
