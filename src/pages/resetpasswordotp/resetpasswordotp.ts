import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { ApiProvider } from '../../providers/api/api';
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
  public Code:any;

  public error:any = "";
  data: any;
  loading:any;
  responseData : any;

  public Email:any;

  constructor(public apiProvider: ApiProvider, public toastCtrl : ToastController,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,public navCtrl: NavController, 
    public navParams: NavParams) {
    
    this.data = {};

    this.Code = navParams.get('otpcode');
    console.log(this.Code);

    this.Email = navParams.get('Emailid');
    console.log(this.Email);

    this.data.Pass = '';
    this.confirmpassword = '';

    this.responseData = {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordotpPage');
  }

  confirmresetpassword()
  {
      this.error = "";
        if((this.data.Pass) == ""){
            this.error = "Please enter password and confirm password";
        }else{
            this.loading = this.loadingCtrl.create({
                content: "Please wait..."
            });
            this.loading.present();

            //var data = 'username=' + this.data.username + '&password=' + this.data.password;
            //var data = JSON.stringify({username: this.data.username, password: this.data.password});
            var data = {Pass: this.data.Pass, Email: this.Email, Code: this.Code};
            console.log(data);
            /*var password = this.data.Pass;
            var confirmpassword = this.confirmpassword;
             
             if (password == confirmpassword) {*/

              this.apiProvider.reset(this.data).then((result) =>
              {
                    this.responseData = result;
                    console.log(this.responseData);
                    this.loading.dismiss();
                    this.navCtrl.setRoot(LoginPage);
              },error =>{
                    this.loading.dismiss();
                    if(this.error!= null)
                    {
                      let toast = this.toastCtrl.create({
                      message: 'Server error!!',
                      duration: 2000,
                      position: 'top'
                        });

                       toast.onDidDismiss(() => {
                          console.log('Dismissed toast');
                        });

                      toast.present();
                    }
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
              });
            /*}else{
              this.error = "Password and Confirm password not match";
            }*/
    }
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
