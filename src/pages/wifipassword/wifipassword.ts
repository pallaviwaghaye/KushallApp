import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { WifiloaderPage } from '../../pages/wifiloader/wifiloader';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';

/**
 * Generated class for the WifipasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifipassword',
  templateUrl: 'wifipassword.html',
})
export class WifipasswordPage {

   public wifipassword:any;
    public network:any;
    public inputdata:any;
  	constructor(private hotspot: Hotspot,public navCtrl: NavController, public alertCtrl:AlertController,public params: NavParams,public loadingCtrl: LoadingController) {
      this.network = params.get('network');
      this.inputdata = {};
      this.inputdata.password = '';
  	}	

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad WifipasswordPage');
  	}

  	closepage(){
  		this.navCtrl.setRoot(HomePage);
  	}

  	setdevice(){
      var wifipassword = this.inputdata.password;
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '<img src="assets/imgs/preloader.gif"> Authenticating Wifi...'
      });
      loading.present();
        this.hotspot.connectToWifi(this.network, wifipassword).then( (data) => {
          loading.dismiss();
          let wificonnection = this.alertCtrl.create({
              title: "Wifi Connection",
              message: "wifi connected successfully",
              buttons: [{
                  text: 'Ok',
                  handler: () => {
                      this.navCtrl.push(WifiloaderPage);
                  }
              }],
              enableBackdropDismiss: false
          });
          wificonnection.present();
        }).catch( (error) => {
            loading.dismiss();
            let wificonnection = this.alertCtrl.create({
                title: "Wifi Connection",
                message: error,
                buttons: [{
                    text: 'Ok'
                }],
                enableBackdropDismiss: false
            });
            wificonnection.present();
        });
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
