import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { SelectproductPage } from '../../pages/selectproduct/selectproduct';
import { SingleswitchPage } from '../../pages/singleswitch/singleswitch';
import { TwoswitchPage } from '../../pages/twoswitch/twoswitch';
import { FourswitchonlyschedularPage } from '../../pages/fourswitchonlyschedular/fourswitchonlyschedular';
import { SingleswitchwithsliderPage } from '../../pages/singleswitchwithslider/singleswitchwithslider';
import { FourswitchonesliderandschedularPage } from '../../pages/fourswitchonesliderandschedular/fourswitchonesliderandschedular';
import { EightswitchPage } from '../../pages/eightswitch/eightswitch';
import { ColorpickersliderPage } from '../../pages/colorpickerslider/colorpickerslider';
import { LedtabPage } from '../../pages/ledtab/ledtab';
import { SettingsPage } from '../../pages/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController) {
  }

  mainSettings()
  {
    this.navCtrl.push(SettingsPage);
  }



  selectproduct(){
  	this.navCtrl.push(SelectproductPage);
  }

  singleswitch(){
  	this.navCtrl.push(SingleswitchPage);
  }

  twoswitch(){
    this.navCtrl.push(TwoswitchPage);
  }

  fourswitchonlyshedular(){
    this.navCtrl.push(FourswitchonlyschedularPage);
  }

  singleswitchwithslider(){
    this.navCtrl.push(SingleswitchwithsliderPage);
  }
  fourswitchonesliderandshedular(){
    this.navCtrl.push(FourswitchonesliderandschedularPage);
  }
  eightswaitch(){
    this.navCtrl.push(EightswitchPage);
  }
  colorpickerslide(){
    // let loading = this.loadingCtrl.create({
    //   spinner: 'hide',
    //   content: '<img src="../assets/imgs/preloader.gif"> Searching for networks'
    // });
    // loading.present();
    this.navCtrl.push(LedtabPage);
  }


}
