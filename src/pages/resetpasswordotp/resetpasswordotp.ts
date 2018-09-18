import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResetpasswordotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpasswordotp',
  templateUrl: 'resetpasswordotp.html',
})
export class ResetpasswordotpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordotpPage');
  }

  	confirmresetpassword(){
  
  	}

  	ptype="password";
  	ctype="password";

  	toggleShow(inputtype){
  		if(inputtype === 'pass'){
	      	var pstate =  this.ptype;
	      	if(pstate == "password"){
	          	this.ptype='text';
	      	}
	      	else{
	          	this.ptype = "password";
	      	}
  		}else if(inputtype === 'cpass'){
	      	var cstate =  this.ctype;
	      	if(cstate == "password"){
	          	this.ctype='text';
	      	}
	      	else{
	          	this.ctype = "password";
	      	}
  		}
  	}

}
