import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WifipasswordPage } from './wifipassword';

@NgModule({
  declarations: [
    WifipasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(WifipasswordPage),
  ],
})
export class WifipasswordPageModule {}
