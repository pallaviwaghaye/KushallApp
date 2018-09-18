import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { Http,Headers,RequestOptions} from '@angular/http';
import { AppModule } from '../../app/app.module';
import 'rxjs/add/operator/map'
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

 constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
    var link = AppModule.API_ENDPOINT+'/register';
    var data = JSON.stringify({email: 'nik@gmail.com', password: '1234',password_confirmation: '1234',name:'nikita'});
    var headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('X-Requested-With', 'XMLHttpRequest');
    let options = new RequestOptions({ headers: headers });
    this.http.post(link, data, options)
    .map(res => res.json())
    .subscribe(rdata => {
        console.log(rdata);
    }, error => {
        console.log(error);
    });
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
