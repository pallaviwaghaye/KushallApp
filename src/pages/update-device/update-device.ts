import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { WifisetupPage } from '../../pages/wifisetup/wifisetup';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the UpdateDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-device',
  templateUrl: 'update-device.html',
})
export class UpdateDevicePage {
  public error:any = "";
  data: any;
  loading:any;
  responseData : any;
  DeviceData : any;
  public device: any;
  public deviceIndex: any;


  constructor(private alertCtrl: AlertController,public apiProvider: ApiProvider,public navCtrl: NavController,
   public navParams: NavParams, public loadingCtrl: LoadingController) {

  	this.data = {};

    this.data.device = navParams.get("device");
    console.log(this.data.device);

    this.deviceIndex = navParams.get("index");
    console.log(this.deviceIndex);

  	/*this.DeviceData = localStorage.getItem('getDevicedata');
    //console.log(JSON.parse(this.DeviceData));

    this.data.device = JSON.parse(this.DeviceData);
    console.log(this.data.device[0]);*/

   	this.isReadonly();
    //this.data.device = {};
    this.data.deviceid = this.data.device.deviceid;
    console.log('update deviceid =',this.data.deviceid);
    this.data.name = this.data.device.name;
    this.data.friendlyname = this.data.device.friendlyname;
    this.data.room = this.data.device.room;
    this.data.type = this.data.device.type;
    this.data.userid = localStorage.getItem('Email');
    console.log('emailid===',this.data.userid);
    this.responseData = {};
   // this.Users();
    this.data.manufacturer = 'Kushall.COM';
    //this.data.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDevicePage');
  }

  isReadonly() {
    return true;   //return true/false 
  }

  updateDevice(){
/*
  	for(var i = 0 ; i < this.data.device.length ; i++)
  	{
  		if(this.data.device.deviceid == )

  		selectedRowIndex()
  		{
  			var rindex = this.rowIndex;
  		}
  	}
*/
    this.data.device = {deviceid: this.data.deviceid, name: this.data.name,
      friendlyname:this.data.friendlyname, room: this.data.room,
      type: this.data.type,manufacturer: this.data.manufacturer};
      console.log(this.data.device);
    var data = {device:this.data.device,userid: this.data.userid};
     console.log(data);
    
    let alert = this.alertCtrl.create({
      title: 'Update Device',
      cssClass:'alertCustomCss',
      message: 'Are you sure to update this device?',
      buttons: [
        {
          text: 'Update',
          handler: () => {

             this.apiProvider.updateDevice(this.data).then((result) =>
              {
                this.responseData = result;
                console.log(this.responseData);
                
                this.navCtrl.setRoot(HomePage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
    
             }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
    
    
  	
  }

}
