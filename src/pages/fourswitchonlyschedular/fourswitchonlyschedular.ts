import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualDeviceSettingPage } from '../../pages/individual-device-setting/individual-device-setting';
/**
 * Generated class for the FourswitchonlyschedularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourswitchonlyschedular',
  templateUrl: 'fourswitchonlyschedular.html',
})
export class FourswitchonlyschedularPage {

 public showschedule1:any;
  public showschedule2:any;
  public showschedule3:any;
  public showschedule4:any;

	public isBtnActive1:boolean=false;
	public isBtnActive2:boolean=false;
	public isBtnActive3:boolean=false;
	public isBtnActive4:boolean=false;
	public isBtnActive5:boolean=false;
	public isBtnActive6:boolean=false;
	public isBtnActive7:boolean=false;

  public switchstatus:boolean=false;
  public switchstatus2:boolean=false;
  public switchstatus3:boolean=false;
  public switchstatus4:boolean=false;

  public switchstatusText:any;
  public switchstatusText2:any;
  public switchstatusText3:any;
  public switchstatusText4:any;

  public showschedulerdiv1:any;
  public showschedulerdiv2:any;
  public showschedulerdiv3:any;
  public showschedulerdiv4:any;

  public arr1:boolean=false;
  public arr2:boolean=false;
  public arr3:boolean=false;
  public arr4:boolean=false;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.showschedule1 = false;
  		this.showschedule2 = false;
      this.switchstatusText = 'OFF';
  		this.switchstatusText2 = 'OFF';
      this.switchstatusText3 = 'OFF';
      this.switchstatusText4 = 'OFF';
      this.showschedulerdiv1= false
      this.showschedulerdiv2= false
      this.showschedulerdiv3= false
      this.showschedulerdiv4= false
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
      if (sheno == 3) {
        this.showschedule3 = !this.showschedule3;
      }
      if (sheno == 4) {
        this.showschedule4 = !this.showschedule4;
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
      if (btnno == 3) {
        this.switchstatus3 = !this.switchstatus3;
        if(switchstatusText == 'ON'){
          this.switchstatusText3 = 'OFF';
        }else{
          this.switchstatusText3 = 'ON';
        }
      }
      if (btnno == 4) {
        this.switchstatus4 = !this.switchstatus4;
        if(switchstatusText == 'ON'){
          this.switchstatusText4 = 'OFF';
        }else{
          this.switchstatusText4 = 'ON';
        }
      }
    }

    showshedule(btn){
      if (btn == 'btn1') {
        this.showschedule1 = false;
        this.arr1 = !this.arr1;
        this.arr2 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv1 = !this.showschedulerdiv1;
      }
      if (btn == 'btn2') {
        this.showschedule2 = false;
        this.arr2 = !this.arr2;
        this.arr1 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv2 = !this.showschedulerdiv2;
      }
      if (btn == 'btn3') {
        this.showschedule3 = false;
        this.arr3 = !this.arr3;
        this.arr1 = false;
        this.arr2 = false;
        this.arr4 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv3 = !this.showschedulerdiv3;
      }
      if (btn == 'btn4') {
        this.showschedule4 = false;
        this.arr4 = !this.arr4;
        this.arr1 = false;
        this.arr2 = false;
        this.arr3 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = !this.showschedulerdiv4;
      }
    }

     individualSettings()
    {
      this.navCtrl.push(IndividualDeviceSettingPage);
    }

}
