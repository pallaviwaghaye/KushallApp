import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { WifipasswordPage } from '../../pages/wifipassword/wifipassword';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
/**
 * Generated class for the WifisetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifisetup',
  templateUrl: 'wifisetup.html',
})
export class WifisetupPage {

  data: any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private hotspot: Hotspot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WifisetupPage');
    this.scanwifi();
  }
  
  scanwifi(){
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/preloader.gif"> Searching for networks'
    });
    loading.present();
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
      loading.dismiss();
      this.data=networks;
      // alert(JSON.stringify(this.data));
    });
  }

  doRefresh(refresher) {
    this.scanwifi();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  closepage(){
    this.navCtrl.setRoot(HomePage);
  }

  selectnw(data){
  	this.navCtrl.push(WifipasswordPage,{network:data.SSID});
  }
}
