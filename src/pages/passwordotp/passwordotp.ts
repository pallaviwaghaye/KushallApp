import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetpasswordotpPage } from '../../pages/resetpasswordotp/resetpasswordotp';
/**
 * Generated class for the PasswordotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordotp',
  templateUrl: 'passwordotp.html',
})
export class PasswordotpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordotpPage');
  }

  resetpwd(){
    this.navCtrl.push(ResetpasswordotpPage);
  }




}
