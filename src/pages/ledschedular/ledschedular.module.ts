import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LedschedularPage } from './ledschedular';

@NgModule({
  declarations: [
    LedschedularPage,
  ],
  imports: [
    IonicPageModule.forChild(LedschedularPage),
  ],
})
export class LedschedularPageModule {}
