import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController } from 'ionic-angular';
import { ResetpasswordotpPage } from '../../pages/resetpasswordotp/resetpasswordotp';
import { LoginPage } from '../../pages/login/login';
import { ApiProvider } from '../../providers/api/api';
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

  public data:any;
  public Email:any;

  public error:any = "";
  //data: any;
  loading:any;
  responseData : any;


  constructor(public apiProvider: ApiProvider, public toastCtrl : ToastController,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.data = {};
    
    this.data.Code = '';
    this.data.Email = navParams.get('Email');
    console.log(this.data.Email);

    /*
    this.data.Code = '';
    //console.log(this.Code);

    this.data.Email = '';
    //console.log(this.Email);

    this.data.Pass = '';
    //this.confirmpassword = '';

    this.responseData = {};*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordotpPage');
  }

  resetpwd(){
    this.error = "";
    //send key and value of otp
    if(this.data.Code.length == 6)
    {
    this.navCtrl.push(ResetpasswordotpPage, {Code: this.data.Code, Email: this.data.Email});
    }
    else
    {
      this.error = "Enter correct otp";
    }
  }

  /*resetpwd()
  {
    this.error = "";
        if((this.data.Pass && this.data.Code) == ""){
            this.error = "Please enter otp and new password  ";
        }else{
            this.loading = this.loadingCtrl.create({
                content: "Please wait..."
            });
            this.loading.present();

            //var data = 'username=' + this.data.username + '&password=' + this.data.password;
            //var data = JSON.stringify({username: this.data.username, password: this.data.password});
            var data = {Pass: this.data.Pass, Code: this.data.Code, Email: this.data.Email };
            console.log(data);
           

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
          
    }
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
  }*/

}
