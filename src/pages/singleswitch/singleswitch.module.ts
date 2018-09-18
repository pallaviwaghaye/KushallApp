import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleswitchPage } from './singleswitch';

@NgModule({
  declarations: [
    SingleswitchPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleswitchPage),
  ],
})
export class SingleswitchPageModule {}
