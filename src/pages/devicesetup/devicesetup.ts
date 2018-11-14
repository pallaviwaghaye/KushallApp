import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { WifisetupPage } from '../../pages/wifisetup/wifisetup';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DevicesetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devicesetup',
  templateUrl: 'devicesetup.html',
})
export class DevicesetupPage {

  public scannedCode:any;
  public error:any = "";
  data: any;
  loading:any;
  responseData : any;
  
  constructor(public apiProvider: ApiProvider,public navCtrl: NavController, public params: NavParams, public loadingCtrl: LoadingController) {
    this.scannedCode = params.get('scannedCode');
    this.data = {};
    this.data.device = {};
    this.data.deviceid = '';
    this.data.name = '';
    this.data.friendlyname = '';
    this.data.room = '';
    this.data.type = '';
    this.data.userid = localStorage.getItem('Email');
    console.log('emailid===',this.data.userid);
    this.responseData = {};
   // this.Users();
    this.data.manufacturer = 'Kushall.COM';
    //this.data.
    //this.DeviceData = params.get('deviceData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesetupPage');
  }

  closepage(){
  	this.navCtrl.setRoot(HomePage);
  }

  proccedforwifi(){

    this.data.device = {deviceid: this.data.deviceid, name: this.data.name,
      friendlyname:this.data.friendlyname, room: this.data.room,
      type: this.data.type,manufacturer: this.data.manufacturer};
      console.log(this.data.device);
    var data = {device:this.data.device,userid: this.data.userid};
     console.log(data);

     this.apiProvider.addDevice(this.data).then((result) =>
              {
                this.responseData = result;
                console.log(this.responseData);
                this.navCtrl.push(WifisetupPage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
    
  	
  }
}
