import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { WifisetupPage } from '../../pages/wifisetup/wifisetup';

/**
 * Generated class for the DevicesetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devicesetup',
  templateUrl: 'devicesetup.html',
})
export class DevicesetupPage {

  public scannedCode:any;
  
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.scannedCode = params.get('scannedCode');
    //this.DeviceData = params.get('deviceData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesetupPage');
  }

  closepage(){
  	this.navCtrl.setRoot(HomePage);
  }

  proccedforwifi(){
  	this.navCtrl.push(WifisetupPage);
  }
}
