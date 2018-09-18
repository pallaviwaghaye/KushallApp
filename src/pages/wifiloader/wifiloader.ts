import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the WifiloaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifiloader',
  templateUrl: 'wifiloader.html',
})
export class WifiloaderPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.loading();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad WifiloaderPage');
  	}

  	loading(){
  		setTimeout(() => {
  			this.navCtrl.setRoot(HomePage);
  		}, 2000);
  	}

    closepage(){
        this.navCtrl.setRoot(HomePage);
    }

}
