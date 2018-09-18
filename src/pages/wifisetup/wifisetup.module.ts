import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WifisetupPage } from './wifisetup';

@NgModule({
  declarations: [
    WifisetupPage,
  ],
  imports: [
    IonicPageModule.forChild(WifisetupPage),
  ],
})
export class WifisetupPageModule {}
