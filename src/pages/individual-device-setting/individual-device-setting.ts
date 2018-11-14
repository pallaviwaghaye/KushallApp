import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirmwareupdatePage } from '../../pages/firmwareupdate/firmwareupdate';

import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../../pages/home/home';

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
  //private _htmlProperty: string = '<progress></progress>';

/*
<div class="progress">
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
      50%
    </div>
  </div>
*/
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private alertCtrl: AlertController, public loadingCtrl: LoadingController,
    private _sanitizer: DomSanitizer) {
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

  DeleteDevice()
  {
  		let alert = this.alertCtrl.create({
	    title: 'Delete Device',
	    cssClass:'alertCustomCss',
	    message: 'Are you sure to delete this device?',
	    buttons: [
	      {
	      	text: 'Delete',
          handler: () => {
                      // localStorage.setItem("userId", userloginId);
                      this.navCtrl.setRoot(HomePage);
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
