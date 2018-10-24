import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { ApiProvider } from '../../providers/api/api';
/**

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public data: any;
  public error: any = "";
  public loading: any;
  public emailerror:any;
  //public mobileerror:any;
  public responseData:any;

  /*"Email":"pallavi.waghaye@webakruti.in",
  "Pass":"pal@123"*/

 constructor(public apiProvider: ApiProvider,public alertCtrl: AlertController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
      this.data = {};
      this.data.Email = '';
      this.data.Pass = '';
      /*this.data.mobile = '';*/
      this.responseData = {};    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

 /* register()
  {
    
    //var link = AppModule.API_ENDPOINT+'/api-register';
        //var data = JSON.stringify({email: this.data.email, password: this.data.password,mobile: this.data.mobile});
        var data = {email: this.data.email, password: this.data.password,mobile: this.data.mobile};
          console.log(data);
        var password = this.data.password;
        var email = this.data.email;
        var mobile = this.data.mobile;
        var error ="";
        var emailerror ="";
        var mobileerror ="";
        var validmobile = /^[0-9]{10,10}$/;
        var validemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!validmobile.test(mobile)) {
          this.mobileerror = "Enter correct mobile";
        }else{
          this.mobileerror = "Mobile can't be empty";
          if (!validemail.test(email)) {
            this.emailerror = "Enter correct email"; 
          }else{
            this.emailerror = "Email can't be empty"; 
            if (password != "" ) {
              this.error = "";
              this.apiProvider.registration(this.data).then((result) =>
              {
                    this.responseData = result;
                    console.log(this.responseData);
                    var userId = this.responseData.id; 
                    var message = this.responseData.message;   
                    //this.loading.dismiss();
                    
                    this.navCtrl.setRoot(LoginPage);
              },error =>{
                    this.loading.dismiss();
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
              });

              this.http.post(link, data)
              .subscribe(rdata => {
                var regobj = JSON.parse(rdata['_body']);
                var userId = regobj.id;    
                var message = regobj.message;   
                if (this.responseData == "") {
                    localStorage.setItem("userId", userId);
                    let alert = this.alertCtrl.create({
                      title: 'CONGRATULATION!!!!',
                      subTitle: 'You Are Sucessfully Registered! You Can Login Now',
                      buttons: [
                      {
                          text: 'Ok',
                          handler: () => {
                              this.navCtrl.push(LoginPage);
                          }
                      }
                      ]
                    });
                    alert.present();
                }else{
                  if(this.responseData != "" && message == "The given data was invalid."){
                    let alert = this.alertCtrl.create({
                      title: 'SORRY',
                      subTitle: 'Email Already Registered',
                      buttons: ['OK']
                    });
                    alert.present();
                  }  
                }
              }, error => {
                let alert = this.alertCtrl.create({
                  title: 'SORRY',
                  subTitle: 'Server Error !! Something goes Wrong.',
                  buttons: ['OK']
                });
                alert.present();
              });
            }else{
              this.error = "Enter correct password";
            }
          }
        }
  }

*/

  register(){

        this.error = "";
          if((this.data.Email && this.data.Pass ) == ""){
            this.error = "Please Enter Email, password ";
        }else{

            this.loading = this.loadingCtrl.create({
                      content: "Please wait..."
                  });
            this.loading.present();


           // var data = 'email=' + this.data.email + '&password=' + this.data.password + '&mobile=' + this.data.mobile;
           // var data = JSON.stringify({email: this.data.email, password: this.data.password,mobile: this.data.mobile});
            var data = {email: this.data.Email, password: this.data.Pass};
            var email = this.data.Email;
            var emailerror ="";
            var validemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!validemail.test(email)) {

            this.error = "Enter correct email"; 
            this.loading.dismiss();
          }else{
            this.error = ""; 

            this.apiProvider.registration(this.data).then((result) =>
              {
                    this.responseData = result;
                    console.log(this.responseData);
                    this.loading.dismiss();

                    this.navCtrl.setRoot(LoginPage);

                    
            /*this.http.post(link, data, options)
                .map(res => res.json())
                .subscribe(rdata => {
                    this.loading.dismiss();
                    console.log(rdata);
                    this.navCtrl.setRoot(LoginPage);*/

            }, error => {
                    this.loading.dismiss();
                    if(this.error != null)
                    {
                      let alert = this.alertCtrl.create({
                      title: 'SORRY',
                      subTitle: 'Email Already Registered !! Please Login.',
                      buttons: [
                      {
                          text: 'Ok',
                          handler: () => {
                              let loader = this.loadingCtrl.create({
                                content: "Please wait...",
                                duration: 2000,
                              });
                              loader.present();
                              setTimeout(() => {
                                      this.navCtrl.setRoot(LoginPage);
                                  }, 2000);
                              //this.navCtrl.push(LoginPage);
                          }
                      }
                      ]
                    });
                    alert.present();
                  }
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
            });
  }
}
}

  /*login(){
    this.navCtrl.push(LoginPage);
  }*/

}
