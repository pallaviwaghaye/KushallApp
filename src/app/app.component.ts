import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { IndividualDeviceSettingPage } from '../pages/individual-device-setting/individual-device-setting';
import { FirmwareupdatePage } from '../pages/firmwareupdate/firmwareupdate';


import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { PasswordotpPage } from '../pages/passwordotp/passwordotp';
import { ResetpasswordotpPage } from '../pages/resetpasswordotp/resetpasswordotp';
import { SelectproductPage } from '../pages/selectproduct/selectproduct';
import { DevicesetupPage } from '../pages/devicesetup/devicesetup';
import { WifisetupPage } from '../pages/wifisetup/wifisetup';
import { WifipasswordPage } from '../pages/wifipassword/wifipassword';
import { SingleswitchPage } from '../pages/singleswitch/singleswitch';
import { TwoswitchPage } from '../pages/twoswitch/twoswitch';
import { FourswitchonlyschedularPage } from '../pages/fourswitchonlyschedular/fourswitchonlyschedular';
import { SingleswitchwithsliderPage } from '../pages/singleswitchwithslider/singleswitchwithslider';
import { FourswitchonesliderandschedularPage } from '../pages/fourswitchonesliderandschedular/fourswitchonesliderandschedular';
import { EightswitchPage } from '../pages/eightswitch/eightswitch';
import { ColorpickersliderPage } from '../pages/colorpickerslider/colorpickerslider';

import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TermsofusePage } from '../pages/termsofuse/termsofuse';
import { SupportPage } from '../pages/support/support';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  public networkalert:any;

   constructor(platform: Platform, statusBar: StatusBar,private network: Network, splashScreen: SplashScreen,public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let disconnectSubscription  = this.network.onDisconnect().subscribe(() => {
          this.networkalert = this.alertCtrl.create({
              title: "Network Error",
              message:"Please check your network connectivity and try again.",
              buttons: [{
                  text: 'Ok',
                  handler: () => {
                      platform.exitApp();
                  }
              }],
              enableBackdropDismiss: false
          });
          this.networkalert.present();
      });
      disconnectSubscription.unsubscribe();

      
      let connectSubscription = this.network.onConnect().subscribe(() => {
        this.networkalert.dismiss();
      });
      connectSubscription.unsubscribe();
    });
  }
}

