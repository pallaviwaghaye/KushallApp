import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { PasswordotpPage } from '../../pages/passwordotp/passwordotp';

import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  public error:any = "";
  data: any;
  loading:any; 
  responseData : any;

 constructor(public toastCtrl : ToastController,public alertCtrl: AlertController,
 	public loadingCtrl: LoadingController,public navCtrl: NavController, 
 	public navParams: NavParams,public apiProvider: ApiProvider) {
 	this.data = {};
    this.data.Email = '';
    this.responseData = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  /*otp(){
    this.navCtrl.push(PasswordotpPage);
  }*/

   otp()
  {
     //this.navCtrl.setRoot(HomePage);
      
      this.error = "";
        if((this.data.Email) == ""){
            this.error = "Please enter Email";
        }else{
            this.loading = this.loadingCtrl.create({
                content: "Please wait..."
            });
            this.loading.present();

            //var data = 'username=' + this.data.username + '&password=' + this.data.password;
            //var data = JSON.stringify({username: this.data.username, password: this.data.password});
            var data = {username: this.data.Email};
            console.log(data);

            var email = this.data.Email;
            var emailerror ="";
            var validemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!validemail.test(email)) {

              this.error = "Enter correct email"; 
              this.loading.dismiss();
            }else{
              this.error = ""; 

              this.apiProvider.forgot(this.data).then((result) =>
              {
                    this.responseData = result;
                    console.log(this.responseData);
                    this.loading.dismiss();
                    //this.navCtrl.setRoot(HomePage);
                    if(this.responseData != null)
                    {
                      this.navCtrl.push(PasswordotpPage, {Email: this.data.Email});
                      
                      let toast = this.toastCtrl.create({
                      message: 'OTP sent to your mail successfully.',
                      duration: 5000,
                      position: 'bottom'
                        });

                       toast.onDidDismiss(() => {
                          console.log('Dismissed toast');
                        });

                      toast.present();
                    
                    }
              },error =>{
                    this.loading.dismiss();
                    if(this.error!= null)
                    {
                      let toast = this.toastCtrl.create({
                      message: 'User not exist !!',
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
           /* this.http.post(link, data, { headers: headers })
                //.map(res => res.json())
                .subscribe(rdata => {
                    console.log(rdata);
                    //var obj = JSON.parse(rdata['_body']);
                    //console.log(obj);
                    this.loading.dismiss();
                    localStorage.setItem('access_token', rdata.access_token);
                    // this.alert.create(rdata);
                //this.alert.create(obj);
                //console.log(obj);
                    this.navCtrl.setRoot(HomePage);
            }, error => {
                    this.loading.dismiss();
                    this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
            }); */
        }
}


}
