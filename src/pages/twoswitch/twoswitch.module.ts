import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoswitchPage } from './twoswitch';

@NgModule({
  declarations: [
    TwoswitchPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoswitchPage),
  ],
})
export class TwoswitchPageModule {}
