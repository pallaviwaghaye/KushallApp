import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LedtabPage } from './ledtab';

@NgModule({
  declarations: [
    LedtabPage,
  ],
  imports: [
    IonicPageModule.forChild(LedtabPage),
  ],
})
export class LedtabPageModule {}
