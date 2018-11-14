import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,ToastController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';
import { HomePage } from '../../pages/home/home';


import { ApiProvider } from '../../providers/api/api';


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

  public error:any = "";
  data: any;
  loading:any;
  access_token:any;
  client_id:any;
  responseData : any;
  //var error ="";
  //var emailerror ="";

 constructor(public toastCtrl : ToastController,public alertCtrl: AlertController,public loadingCtrl: LoadingController,
  public navCtrl: NavController, public navParams: NavParams,public apiProvider: ApiProvider) {
    this.data = {};
    this.data.Email = '';
    this.data.Pass = '';
    this.responseData = {};
   // this.Users();
    this.data.client_id = 'RKkWfsi0Z9';
  
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

  /*login()
  {
    // var link = AppModule.API_ENDPOINT+ '/api-login';
    //         var data = {username: this.data.username, password: this.data.password};
    //         this.http.post(link, data).subscribe(rdata => {       
    //             var obj = JSON.parse(rdata['_body']); 
    //         }

    if(this.data.username != "" || this.data.password != "") {
            var link = AppModule.API_ENDPOINT+ '/api-login';
            var data = JSON.stringify({username: this.data.username,password: this.data.password});
            this.error = "";
            var username = this.data.username;
            
            
            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = new RequestOptions({ headers: headers });

            var validemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
            if (!validemail.test(username)) {
                this.emailerror = "Enter correct Email";                
            }else {
                this.http.post(link,data,options).subscribe(rdata=> {
                    var obj = JSON.parse(rdata['_body']);
                    console.log('obj');
                  }, error => {
                    //this.loading.dismiss();
                    this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
                  });
                }
  }
}*/

  login()
  {
     //this.navCtrl.setRoot(HomePage);
      
      this.error = "";
        if((this.data.Email && this.data.Pass) == ""){
            this.error = "Please enter username and password";
        }else{
            this.loading = this.loadingCtrl.create({
                content: "Please wait..."
            });
            this.loading.present();

            //var data = 'username=' + this.data.username + '&password=' + this.data.password;
            //var data = JSON.stringify({username: this.data.username, password: this.data.password});
            var data = {username: this.data.Email, password: this.data.Pass, client_id: this.data.client_id};
             console.log(data);
             //localStorage.setItem('Emailid', username);
            var email = this.data.Email;
            var emailerror ="";
            var validemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!validemail.test(email)) {

              this.error = "Enter correct email"; 
              this.loading.dismiss();
            }else{
              this.error = ""; 

              this.apiProvider.loginUser(this.data).then((result) =>
              {
                    this.responseData = result;
                    console.log(this.responseData);
                    this.loading.dismiss();
                    //localStorage.setItem('Emailid', this.data.Email);
                    localStorage.setItem('access_token', this.responseData.access_token);
                    localStorage.setItem('Email', this.data.Email);
                    console.log(this.data.Email);
                    var userid = this.data.Email;
                    console.log('Emailid ==',userid);
                    this.navCtrl.setRoot(HomePage, {Email: userid});
              },error =>{
                    this.loading.dismiss();
                    if(this.error!= null)
                    {
                      let toast = this.toastCtrl.create({
                      message: 'Not a valid user !!',
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

/*Users()
{
  this.apiProvider.getUsers()
  .then(data => {
    console.log(data);
  });
}*/

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
