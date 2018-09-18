import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualDeviceSettingPage } from '../../pages/individual-device-setting/individual-device-setting';

/**
 * Generated class for the TwoswitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-twoswitch',
  templateUrl: 'twoswitch.html',
})
export class TwoswitchPage {

 public showschedule1:any;
  public showschedule2:any;
	public isBtnActive1:boolean=false;
	public isBtnActive2:boolean=false;
	public isBtnActive3:boolean=false;
	public isBtnActive4:boolean=false;
	public isBtnActive5:boolean=false;
	public isBtnActive6:boolean=false;
	public isBtnActive7:boolean=false;
  public switchstatus:boolean=false;
  public switchstatus2:boolean=false;
  public switchstatusText:any;
  public switchstatusText2:any;
  public showschedulerdiv1:any;
  public showschedulerdiv2:any;
  public arr1:boolean=false;
  public arr2:boolean=false;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.showschedule1 = false;
  		this.showschedule2 = false;
      this.switchstatusText = 'OFF';
  		this.switchstatusText2 = 'OFF';
      this.showschedulerdiv1= false
      this.showschedulerdiv2= false
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SingleswitchPage');
  	}

  
  	changeshedule(sheno){
      if (sheno == 1) {
        this.showschedule1 = !this.showschedule1;
      }
      if (sheno == 2) {
        this.showschedule2 = !this.showschedule2;
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
    toggleswitch(switchstatusText,btnno){
      if (btnno == 1) {
        this.switchstatus = !this.switchstatus;
        if(switchstatusText == 'ON'){
          this.switchstatusText = 'OFF';
        }else{
          this.switchstatusText = 'ON';
        }
      }
      if (btnno == 2) {
        this.switchstatus2 = !this.switchstatus2;
        if(switchstatusText == 'ON'){
          this.switchstatusText2 = 'OFF';
        }else{
          this.switchstatusText2 = 'ON';
        }
      }
    }

    showshedule(btn){
      if (btn == 'btn1') {
        this.showschedule1 = false;
        this.arr1 = !this.arr1;
        this.arr2 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv1 = !this.showschedulerdiv1;
      }
      if (btn == 'btn2') {
        this.showschedule2 = false;
        this.arr2 = !this.arr2;
        this.arr1 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = !this.showschedulerdiv2;
      }
    }

    
    individualSettings()
    {
      this.navCtrl.push(IndividualDeviceSettingPage);
    }
}
