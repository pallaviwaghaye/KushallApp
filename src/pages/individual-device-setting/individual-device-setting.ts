import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirmwareupdatePage } from '../../pages/firmwareupdate/firmwareupdate';

import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../../pages/home/home';
import { UpdateDevicePage } from '../../pages/update-device/update-device';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the IndividualDeviceSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-individual-device-setting',
  templateUrl: 'individual-device-setting.html',
})
export class IndividualDeviceSettingPage {

	private data: any;
  public DeviceData:any;
  public device: any;
  public indexArray : any;
  public response : any;
  public item: any;

  public deviceIndex: any;

  //private _htmlProperty: string = '<progress></progress>';

/*
<div class="progress">
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
      50%
    </div>
  </div>
*/
  constructor(public apiProvider: ApiProvider,public navCtrl: NavController, public navParams: NavParams, 
  	private alertCtrl: AlertController, public loadingCtrl: LoadingController,
    private _sanitizer: DomSanitizer) {

    this.data = {};
    this.data.device = navParams.get("device");
    console.log(this.data.device);

    this.deviceIndex = navParams.get("index");
    console.log(this.deviceIndex);
   /* this.DeviceData = localStorage.getItem('getDevicedata');
    console.log(JSON.parse(this.DeviceData));
    
    this.data.device = JSON.parse(this.DeviceData);
    //this.device = localStorage.getItem('getDevice');
    console.log(this.data.device);*/

    this.data.userid = localStorage.getItem('Email');
    console.log(this.data.userid);
    /*this.device = localStorage.getItem('addDevicedata');
    console.log(this.device);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualDeviceSettingPage');
  }

  DeviceName()
  {
	   let alert = this.alertCtrl.create({
          title: 'Device Name',
          cssClass:'alertCustomCss',
          inputs: [
              {
                  name: "Name",
                  placeholder: "Enter device name"
              }
          ],
          buttons: [
              {
                  text: "Save",
                  cssClass:'alertCustomCss'
                  /*handler: data => {
                      this.donationHistoryList.push({
                          date: data.date,
                          time: data.time
                      });
                  }*/
              },
              {
                  
                  text: "Cancel",
                  role: 'cancel',
                  cssClass:'alertCustomCss'
                  
              }
          ]
      });
      alert.present();

  }

  DeviceLocation()
  {

     let alert = this.alertCtrl.create({
          title: 'Location Name',
          cssClass:'alertCustomCss',
          inputs: [
              {
                  name: "Name",
                  placeholder: "Enter new location"
              }
          ],
          buttons: [
              {
                  text: "Update",
                  cssClass:'alertCustomCss'
                  /*handler: data => {
                      this.donationHistoryList.push({
                          date: data.date,
                          time: data.time
                      });
                  }*/
              },
              {  
                  text: "Cancel",
                  role: 'cancel',
                  cssClass:'alertCustomCss' 
              }
          ]
      });
      alert.present();

  }

  FirmwareUpdate()
  {
    // var html = <any> this.htmlProperty();

        let loader = this.loadingCtrl.create({
          spinner: 'hide'
      });
      loader.present();

      let counter: number = 0;
      let interval = setInterval(() => {

        loader.data.content = this.getProgressBar(counter);
        
        /*let alert = this.alertCtrl.create({
             title: loader.data.content = this.getProgressBar(counter),
             subtitle: 'Updating...'
           });
        alert.present();*/

        counter++;
        if (counter == 41) {
          
          clearInterval(interval);
          setTimeout(() => {
          loader.dismiss();
        }, 6000);
          this.navCtrl.push(FirmwareupdatePage);
        }
      }, 10);

   /*  var html = <any> this.htmlProperty(); // this is the magic
    let loader = this.loadingCtrl.create({
      content: html 
    });
    loader.present();
  	
	  // 	let loading = this.loadingCtrl.create({
	  //   content: 'Updating...'

	  // });

	  // loading.present();

	  setTimeout(() => {
	    loading.dismiss();
	  }, 5000);
	  */
	  
  }

  getProgressBar(percentage){
   let html: string = '<div>Updating...</div><p></p><progress class="progress-bar" value="'+percentage+'" max="100"></progress><div class="text-center">'+percentage+'%</div>';

   return this._sanitizer.bypassSecurityTrustHtml(html);
  }

   /*public htmlProperty() {
       return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }*/

  ResetDevice()
  {
  		let alert = this.alertCtrl.create({
	    title: 'Reset Device',
	    cssClass:'alertCustomCss',
	    message: 'Are you sure to reset this device?',
	    buttons: [
	      {
	      	text: 'Reset'
	      },
	      {
	        text: 'Cancel',
	        role: 'cancel'
	      }
	    ]
	  });
	  alert.present();
  }

  UpdateDevice()
  {

    this.navCtrl.push(UpdateDevicePage,{device:this.data.device,index:this.deviceIndex});

      /*let alert = this.alertCtrl.create({
      title: 'Update Device',
      cssClass:'alertCustomCss',
      message: 'Are you sure to update this device?',
      buttons: [
        {
          text: 'Update',
          handler: () => {

             this.navCtrl.push(UpdateDevicePage);

             }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();*/
            //this.data.device = {device: this.DeviceData};
            //console.log(this.data.device);

            /*var data = {device:this.data.device,userid: this.data.userid};
            console.log(data);
            this.apiProvider.updateDevice(this.data).then((result) =>
              {
                  
                      this.response = result;
                      this.navCtrl.setRoot(HomePage);
                  
              }); */    // localStorage.setItem("userId", userloginId);           
          
  }

  DeleteDevice(item)
  {
  		let alert = this.alertCtrl.create({
	    title: 'Delete Device',
	    cssClass:'alertCustomCss',
	    message: 'Are you sure to delete this device?',
	    buttons: [
	      {
	      	text: 'Delete',
          handler: () => {

            
           // }
            
              /*for(var x = 0;x<this.items.length;x++)
              {
                if(this.items.deviceid == item.deviceid)
                {

                }
              }*/

            
            //this.data.device = {device: this.DeviceData};
            //console.log(this.data.device);

            var data = {device:this.data.device,userid: this.data.userid};
            console.log(data);
            this.apiProvider.deleteDevice(this.data).then((result) =>
              {

                this.navCtrl.setRoot(HomePage);
                  /*let index = this.data.device.indexOf(item);
                  console.log(index);
                  console.log(this.device);
                  console.log(item.deviceid);

                  console.log(this.data.device[0]);
                  for(index=index+1;index<this.data.device.length;index++)
                  {
                    //if(this.items.deviceid == item.deviceid)
                    //{
                    if(index > -1)
                    {
                      this.data.device.splice(index, 1);
                      this.navCtrl.setRoot(HomePage);
                    }
                  }
                  */
                  /*this.indexArray = JSON.parse(this.DeviceData);
                  let index = result.indexOf(this.indexArray);

                  for(var i=0 ; i< ;i++)
                  {

                  }
                  if(index > -1){
                      result.splice(index, 1);
                      this.navCtrl.setRoot(HomePage);
                  }*/
              });     // localStorage.setItem("userId", userloginId);           
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
