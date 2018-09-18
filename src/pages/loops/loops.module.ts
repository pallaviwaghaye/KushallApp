import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoopsPage } from './loops';

@NgModule({
  declarations: [
    LoopsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoopsPage),
  ],
})
export class LoopsPageModule {}
