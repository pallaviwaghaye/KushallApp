import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualDeviceSettingPage } from '../../pages/individual-device-setting/individual-device-setting';
/**
 * Generated class for the SingleswitchwithsliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singleswitchwithslider',
  templateUrl: 'singleswitchwithslider.html',
})
export class SingleswitchwithsliderPage {

 public showschedule:any;
	public isBtnActive1:boolean=false;
	public isBtnActive2:boolean=false;
	public isBtnActive3:boolean=false;
	public isBtnActive4:boolean=false;
	public isBtnActive5:boolean=false;
	public isBtnActive6:boolean=false;
	public isBtnActive7:boolean=false;
  public switchstatus:boolean=false;
  public switchstatusText:any;
  public brightness:any=0;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.showschedule = false;
  		this.switchstatusText = 'OFF';
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SingleswitchPage');
  	}

  	changeshedule(){
  		if (this.showschedule == false) {
  			this.showschedule = true;
  		}else{
  			this.showschedule = false;
  		}
  	}
  	toggleClass(num){
  		if(num == 1){
      		this.isBtnActive1 = !this.isBtnActive1;
  		}
  		if(num == 2){
      		this.isBtnActive2 = !this.isBtnActive2;
  		}
  		if(num == 3){
      		this.isBtnActive3 = !this.isBtnActive3;
  		}
  		if(num == 4){
      		this.isBtnActive4 = !this.isBtnActive4;
  		}
  		if(num == 5){
      		this.isBtnActive5 = !this.isBtnActive5;
  		}
  		if(num == 6){
      		this.isBtnActive6 = !this.isBtnActive6;
  		}
  		if(num == 7){
      		this.isBtnActive7 = !this.isBtnActive7;
  		}
  	}
    toggleswitch(switchstatusText){
      this.switchstatus = !this.switchstatus;
      if(switchstatusText == 'ON'){
        this.switchstatusText = 'OFF';
      }else{
        this.switchstatusText = 'ON';
      }
    }

    brightnessval(brightness){
      this.brightness == brightness;
    }

     individualSettings()
    {
      this.navCtrl.push(IndividualDeviceSettingPage);
    }

}
