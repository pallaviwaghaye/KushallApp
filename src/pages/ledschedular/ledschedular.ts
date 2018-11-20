import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LedschedularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ledschedular',
  templateUrl: 'ledschedular.html',
})
export class LedschedularPage {


    public deviceData: any;
    public index: any;
    public deviceName: any;
    public data:any;
    public starttime:any;
    public endtime:any;
    public days:any;
    public event:any;

    public userid:any;
    public deviceid:any;

    public lightDevice: any;
    responseData : any;

    public isBtnActive1:boolean=false;
  	public isBtnActive2:boolean=false;
  	public isBtnActive3:boolean=false;
  	public isBtnActive4:boolean=false;
  	public isBtnActive5:boolean=false;
  	public isBtnActive6:boolean=false;
  	public isBtnActive7:boolean=false;
  	public showschedule:any;
  	constructor(public apiProvider: ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  		
      this.data = {};
      this.responseData = {};

      // this.data.days = {};

      this.data.time = '';
      this.data.endtime = '';
      // this.starttime = '';

      /*this.starttime = '';
      this.endtime = '';*/
      //console.log('starttime =',this.data.starttime);

      this.data.userid = localStorage.getItem('Email');
      console.log('emailid===',this.data.userid);

      this.lightDevice = JSON.parse(localStorage.getItem('lightDevicedata'));
      console.log('lightdevice=',this.lightDevice);
      /*this.index = navParams.get("index");
      console.log(this.index);*/
      this.data.deviceid = this.lightDevice.deviceid;
      console.log(this.lightDevice.deviceid);
      this.deviceName = this.lightDevice.name;
     // console.log(this.lightDevice.deviceid);
      
      this.showschedule = false;
      this.data.event = 'off';


      this.saveschedule();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LedschedularPage');
  	}

    saveschedule()
{
   
   // this.toggleClass(num);
    if(this.data.event == 'on')
    {
    this.data.days = {mon:this.isBtnActive2,tue:this.isBtnActive3,wed:this.isBtnActive4,thu:this.isBtnActive5,fri:this.isBtnActive6,sat:this.isBtnActive7,sun:this.isBtnActive1};
      console.log(this.data.days);
    var data = {time:this.data.time,event:this.data.event,days:this.data.days,deviceid:this.data.deviceid,userid:this.data.userid};
     console.log(data);
    
   // localStorage.setItem('addDevicedata', this.data);
    
    this.apiProvider.AddorUpdateSchedule(this.data).then((result) =>
              {
                this.responseData = result;
                console.log('schedule data =',this.responseData);
                
                this.navCtrl.push(HomePage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
   }
    if(this.data.event == 'off')
   {

    this.data.days = {mon:this.isBtnActive2,tue:this.isBtnActive3,wed:this.isBtnActive4,thu:this.isBtnActive5,fri:this.isBtnActive6,sat:this.isBtnActive7,sun:this.isBtnActive1};
      console.log(this.data.days);
    var data = {time:this.data.endtime,event:this.data.event,days:this.data.days,deviceid:this.data.deviceid,userid:this.data.userid};
     console.log(data);

   this.apiProvider.AddorUpdateSchedule(this.data).then((result) =>
              {
                this.responseData = result;
                console.log('schedule data =',this.responseData);
                
                this.navCtrl.push(HomePage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
   }
  //this.execSchedule();
}

  	changeshedule(){
  		if (this.showschedule == false && this.data.event == 'off') {
  			this.showschedule = true;
        this.data.event = 'on';
  		}else{
  			this.showschedule = false;
        this.data.event = 'off';
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


}
