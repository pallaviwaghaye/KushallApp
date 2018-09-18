import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { IndividualDeviceSettingPage } from '../pages/individual-device-setting/individual-device-setting';
import { FirmwareupdatePage } from '../pages/firmwareupdate/firmwareupdate';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Network } from '@ionic-native/network';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { HttpModule } from '@angular/http';

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
import { WifiloaderPage } from '../pages/wifiloader/wifiloader';
import { LedtabPage } from '../pages/ledtab/ledtab';
import { LedschedularPage } from '../pages/ledschedular/ledschedular';
import { WhiteyellowcolorpickerPage } from '../pages/whiteyellowcolorpicker/whiteyellowcolorpicker';
import { MoodsPage } from '../pages/moods/moods';
import { LoopsPage } from '../pages/loops/loops';
import { ScannerPage } from '../pages/scanner/scanner';

import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TermsofusePage } from '../pages/termsofuse/termsofuse';
import { SupportPage } from '../pages/support/support';
import { FeedbackPage } from '../pages/feedback/feedback';

import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    IndividualDeviceSettingPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    PasswordotpPage,
    ResetpasswordotpPage,
    SelectproductPage,
    DevicesetupPage,
    WifisetupPage,
    WifipasswordPage,
    SingleswitchPage,
    TwoswitchPage,
    FourswitchonlyschedularPage,
    SingleswitchwithsliderPage,
    FourswitchonesliderandschedularPage,
    EightswitchPage,
    ColorpickersliderPage,
    WifiloaderPage,
    LedtabPage,
    LedschedularPage,
    WhiteyellowcolorpickerPage,
    MoodsPage,
    LoopsPage,
    ScannerPage,
    PrivacypolicyPage,
    TermsofusePage,
    SupportPage,
    FeedbackPage,
    FirmwareupdatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    IndividualDeviceSettingPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    PasswordotpPage,
    ResetpasswordotpPage,
    SelectproductPage,
    DevicesetupPage,
    WifisetupPage,
    WifipasswordPage,
    SingleswitchPage,
    TwoswitchPage,
    FourswitchonlyschedularPage,
    SingleswitchwithsliderPage,
    FourswitchonesliderandschedularPage,
    EightswitchPage,
    ColorpickersliderPage,
    WifiloaderPage,
    LedtabPage,
    LedschedularPage,
    WhiteyellowcolorpickerPage,
    MoodsPage,
    LoopsPage,
    ScannerPage,
    PrivacypolicyPage,
    TermsofusePage,
    SupportPage,
    FeedbackPage,
    FirmwareupdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    BarcodeScanner,
    Hotspot,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
   public static API_ENDPOINT = 'https://alexa.iocare.in'
}
