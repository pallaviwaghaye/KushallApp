import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndividualDeviceSettingPage } from './individual-device-setting';

@NgModule({
  declarations: [
    IndividualDeviceSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(IndividualDeviceSettingPage),
  ],
})
export class IndividualDeviceSettingPageModule {}
