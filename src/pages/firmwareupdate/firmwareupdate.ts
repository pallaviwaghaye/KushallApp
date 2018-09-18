import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the FirmwareupdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firmwareupdate',
  templateUrl: 'firmwareupdate.html',
})
export class FirmwareupdatePage {

	
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirmwareupdatePage');

  /*  let alert = this.alertCtrl.create({
      title: 'Firmware update',
      subtitle: 'Demo'
      });
      alert.present();*/
      
  }

 /* brightnessval(brightness){
      this.brightness == brightness;
    }*/

}
