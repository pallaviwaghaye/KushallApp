import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodsPage } from './moods';

@NgModule({
  declarations: [
    MoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoodsPage),
  ],
})
export class MoodsPageModule {}
