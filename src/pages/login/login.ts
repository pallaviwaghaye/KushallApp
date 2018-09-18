import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
  	this.navCtrl.push(SignupPage);
  }

  forgotpassword(){
    this.navCtrl.push(ForgotpasswordPage);
  }

  login(){
    this.navCtrl.setRoot(HomePage);
  }

  type="password";

  toggleShow(){
      var state =  this.type
      if(state == "password"){
          this.type='text';
      }
      else{
          this.type = "password";
      }
  }

}
