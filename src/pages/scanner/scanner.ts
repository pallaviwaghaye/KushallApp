import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevicesetupPage } from '../../pages/devicesetup/devicesetup';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

public scanSub:any;
	public options:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner) {
  	}

  	ionViewDidLoad() {
	    console.log('ionViewDidLoad ScannerPage');
  	}

  	closepage(){
	  	this.navCtrl.setRoot(HomePage);
	}

  	scan(){
	    this.options = {
	        prompt : "Scan the QR code at the back of your device"
	    }
	    this.barcodeScanner.scan(this.options).then(barcodeData => {
	    	if (barcodeData.text != "") {
	        	this.navCtrl.push(DevicesetupPage,{scannedCode:barcodeData.text});
	    	}
	    })
  	}

}
