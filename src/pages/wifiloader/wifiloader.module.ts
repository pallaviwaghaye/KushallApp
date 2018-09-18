import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WifiloaderPage } from './wifiloader';

@NgModule({
  declarations: [
    WifiloaderPage,
  ],
  imports: [
    IonicPageModule.forChild(WifiloaderPage),
  ],
})
export class WifiloaderPageModule {}
