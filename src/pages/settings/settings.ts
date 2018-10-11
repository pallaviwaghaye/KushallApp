import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,LoadingController,AlertController } from 'ionic-angular';

import { PrivacypolicyPage } from '../../pages/privacypolicy/privacypolicy';
import { TermsofusePage } from '../../pages/termsofuse/termsofuse';
import { SupportPage } from '../../pages/support/support';
import { FeedbackPage } from '../../pages/feedback/feedback';
import { LoginPage } from '../../pages/login/login';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public alertCtrl: AlertController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,
    private inAppBrowser: InAppBrowser,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  privacyPolicy()
  {
      const options: InAppBrowserOptions = {
             zoom: 'no',
        }

      const browser = this.inAppBrowser.create('https://www.webakruti.com/','options','location=no,hidenavigationbuttons=yes,hideurlbar=yes');
        this.platform.registerBackButtonAction(() => {
      browser.on('exit').subscribe(() => {
           this.platform.exitApp();
    }, err => 
           console.error(err));
    });
  	//this.navCtrl.push(PrivacypolicyPage);
   
  }

  termsOfUse()
  {

      const options: InAppBrowserOptions = {
             zoom: 'no',
        }

      const browser = this.inAppBrowser.create('https://www.webakruti.com/','options','location=no,hidenavigationbuttons=yes,hideurlbar=yes');
        this.platform.registerBackButtonAction(() => {
      browser.on('exit').subscribe(() => {
           this.platform.exitApp();
    }, err => 
           console.error(err));
    });
  	//this.navCtrl.push(TermsofusePage);
  }

  Support()
  {
      const options: InAppBrowserOptions = {
           zoom: 'no',
      }

    const browser = this.inAppBrowser.create('https://www.webakruti.com/','options','location=no,hidenavigationbuttons=yes,hideurlbar=yes');
      this.platform.registerBackButtonAction(() => {
    browser.on('exit').subscribe(() => {
         this.platform.exitApp();
  }, err => 
         console.error(err));
  });
  	//this.navCtrl.push(SupportPage);
  }

  Feedback()
  {
  	this.navCtrl.push(FeedbackPage);
  }

  Logout()
  {
      let alert = this.alertCtrl.create({
                      title: 'Logout',
                      subTitle: 'Do you want to logout ?',
                      buttons: [
                      {
                          text: 'Ok',
                          handler: () => {
                              localStorage.removeItem('access_token');
                              let loader = this.loadingCtrl.create({
                                content: "Please wait...",
                                duration: 2000,
                              });
                              loader.present();
                              setTimeout(() => {
                                      this.navCtrl.setRoot(LoginPage);
                                  }, 2000);
                              //this.navCtrl.push(LoginPage);
                          }
                      }
                      ]
                    });
                    alert.present();


    /*localStorage.removeItem('access_token');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000,
    });
    loader.present();
    setTimeout(() => {
            this.navCtrl.setRoot(LoginPage);
        }, 2000);
    //this.navCtrl.push(LoginPage);
  }*/

}

}
