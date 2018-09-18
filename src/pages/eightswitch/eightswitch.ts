import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividualDeviceSettingPage } from '../../pages/individual-device-setting/individual-device-setting';
/**
 * Generated class for the EightswitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eightswitch',
  templateUrl: 'eightswitch.html',
})
export class EightswitchPage {
 public brightness:any=0;
  public showschedule1:any;
  public showschedule2:any;
  public showschedule3:any;
  public showschedule4:any;
  public showschedule5:any;
  public showschedule6:any;
  public showschedule7:any;
  public showschedule8:any;

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
  public switchstatus5:boolean=false;
  public switchstatus6:boolean=false;
  public switchstatus7:boolean=false;
  public switchstatus8:boolean=false;

  public switchstatusText:any;
  public switchstatusText2:any;
  public switchstatusText3:any;
  public switchstatusText4:any;
  public switchstatusText5:any;
  public switchstatusText6:any;
  public switchstatusText7:any;
  public switchstatusText8:any;

  public showschedulerdiv1:any;
  public showschedulerdiv2:any;
  public showschedulerdiv3:any;
  public showschedulerdiv4:any;
  public showschedulerdiv5:any;
  public showschedulerdiv6:any;
  public showschedulerdiv7:any;
  public showschedulerdiv8:any;

  public arr1:boolean=false;
  public arr2:boolean=false;
  public arr3:boolean=false;
  public arr4:boolean=false;
  public arr5:boolean=false;
  public arr6:boolean=false;
  public arr7:boolean=false;
  public arr8:boolean=false;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.showschedule1 = false;
  		this.showschedule2 = false;
      this.showschedule3 = false;
      this.showschedule4 = false;
      this.showschedule5 = false;
      this.showschedule6 = false;
      this.showschedule7 = false;
      this.showschedule8 = false;

      this.switchstatusText = 'OFF';
  		this.switchstatusText2 = 'OFF';
      this.switchstatusText3 = 'OFF';
      this.switchstatusText4 = 'OFF';
      this.switchstatusText5 = 'OFF';
      this.switchstatusText6 = 'OFF';
      this.switchstatusText7 = 'OFF';
      this.switchstatusText8 = 'OFF';

      this.showschedulerdiv1= false;
      this.showschedulerdiv2= false;
      this.showschedulerdiv3= false;
      this.showschedulerdiv4= false;
      this.showschedulerdiv5= false;
      this.showschedulerdiv6= false;
      this.showschedulerdiv7= false;
      this.showschedulerdiv8= false;
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
      if (sheno == 5) {
        this.showschedule5 = !this.showschedule5;
      }
      if (sheno == 6) {
        this.showschedule6 = !this.showschedule6;
      }
      if (sheno == 7) {
        this.showschedule7 = !this.showschedule7;
      }
      if (sheno == 8) {
        this.showschedule8 = !this.showschedule8;
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
      if (btnno == 5) {
        this.switchstatus5 = !this.switchstatus5;
        if(switchstatusText == 'ON'){
          this.switchstatusText5 = 'OFF';
        }else{
          this.switchstatusText5 = 'ON';
        }
      }
      if (btnno == 6) {
        this.switchstatus6 = !this.switchstatus6;
        if(switchstatusText == 'ON'){
          this.switchstatusText6 = 'OFF';
        }else{
          this.switchstatusText6 = 'ON';
        }
      }
      if (btnno == 7) {
        this.switchstatus7 = !this.switchstatus7;
        if(switchstatusText == 'ON'){
          this.switchstatusText7 = 'OFF';
        }else{
          this.switchstatusText7 = 'ON';
        }
      }
      if (btnno == 8) {
        this.switchstatus8 = !this.switchstatus8;
        if(switchstatusText == 'ON'){
          this.switchstatusText8 = 'OFF';
        }else{
          this.switchstatusText8 = 'ON';
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
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv1 = !this.showschedulerdiv1;
      }
      if (btn == 'btn2') {
        this.showschedule2 = false;
        this.arr2 = !this.arr2;
        this.arr1 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv2 = !this.showschedulerdiv2;
      }
      if (btn == 'btn3') {
        this.showschedule3 = false;
        this.arr3 = !this.arr3;
        this.arr1 = false;
        this.arr2 = false;
        this.arr4 = false;
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv3 = !this.showschedulerdiv3;
      }
      if (btn == 'btn4') {
        this.showschedule4 = false;
        this.arr4 = !this.arr4;
        this.arr1 = false;
        this.arr2 = false;
        this.arr3 = false;
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv4 = !this.showschedulerdiv4;
      }
      if (btn == 'btn5') {
        this.showschedule5 = false;
        this.arr5 = !this.arr5;
        this.arr1 = false;
        this.arr2 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv5 = !this.showschedulerdiv5;
      }
      if (btn == 'btn6') {
        this.showschedule6 = false;
        this.arr6 = !this.arr6;
        this.arr1 = false;
        this.arr2 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.arr5 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv6 = !this.showschedulerdiv6;
      }
      if (btn == 'btn7') {
        this.showschedule7 = false;
        this.arr7 = !this.arr7;
        this.arr1 = false;
        this.arr2 = false;
        this.arr4 = false;
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.arr8 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv8 = false;
        this.showschedulerdiv7 = !this.showschedulerdiv7;
      }
      if (btn == 'btn8') {
        this.showschedule8 = false;
        this.arr8 = !this.arr8;
        this.arr1 = false;
        this.arr2 = false;
        this.arr3 = false;
        this.arr4 = false;
        this.arr5 = false;
        this.arr6 = false;
        this.arr7 = false;
        this.showschedulerdiv1 = false;
        this.showschedulerdiv2 = false;
        this.showschedulerdiv3 = false;
        this.showschedulerdiv4 = false;
        this.showschedulerdiv5 = false;
        this.showschedulerdiv6 = false;
        this.showschedulerdiv7 = false;
        this.showschedulerdiv8 = !this.showschedulerdiv8;
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
