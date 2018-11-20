import { Component } from '@angular/core';
import { NavController,LoadingController,NavParams } from 'ionic-angular';
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

import { DevicesetupPage } from '../../pages/devicesetup/devicesetup';
import { AppModule } from '../../app/app.module';

import { ApiProvider } from '../../providers/api/api';
import { ScannerPage } from '../../pages/scanner/scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public access_token:any;
  public error:any = "";
  loading:any;
  public device:any;
  responseData : any;
  public items: any;
  public item: any;
  public ind: any;

  data: any;
  public userid:any;
  //var self = this;

  public newSubcategories: any[] = []; // DECLARE A NEW EMPTY ARRAY IN THE TOP OF YOUR CLASS
  public myList: any;

  public days :any;

  constructor(public navParams: NavParams,public apiProvider: ApiProvider,public loadingCtrl: LoadingController,public navCtrl: NavController) 
  {
    this.data = {};
    this.responseData = {};
    this.access_token = localStorage.getItem('access_token');
    console.log(this.access_token);
   // this.data.userid = 'pallavi.waghaye@webakruti.in';
    //this.data.userid = navParams.get('Email');
    this.data.userid = localStorage.getItem('Email');
    console.log('emailid===',this.data.userid);



    this.device = localStorage.getItem('addDevicedata');
    console.log(this.device);
    //this.Users();
    //this.sendDevice();
    this.getdevices();
   /* this.schedule();
    this.execSchedule();*/
    //this.getUser();
  }

/*schedule()
{

    this.days = {mon:false,tue:true,wed:true,thu:false,fri:false,sat:false,sun:false};
      console.log(this.days);
    var sdata = {time:"17:37",event:"on",days:this.days,deviceid:"128223",ScheduleID:"0",userid:"naiknavare.pranav@gmail.com"};
     console.log(sdata);
    
   // localStorage.setItem('addDevicedata', this.data);
    
    this.apiProvider.AddorUpdateSchedule(this.sdata).then((result) =>
              {
                this.responseData = result;
                console.log('schedule data =',this.responseData);
                
                //this.navCtrl.push(WifisetupPage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
}


execSchedule()
{

    this.data.device = {deviceid: this.data.deviceid};
      console.log(this.data.device);
      console.log(this.days);
    var data = {device:this.data.device,action:"TurnOff / TurnOn",level:60,userid:this.data.userid};
     console.log(data);
    
   // localStorage.setItem('addDevicedata', this.data);
    
    this.apiProvider.execdevice(this.data).then((result) =>
              {
                this.responseData = result;
                console.log('schedule data =',this.responseData);
                
                //this.navCtrl.push(WifisetupPage);

              },error => {
            console.log("Response not Fetched Correctly!");
        });
}*/

 /* Users()
{
  
  this.apiProvider.getUsers()
  .then(data => {
    console.log(data);
  });
}*/

  /*getUser()
  {
            var link = AppModule.API_ENDPOINT +'/mqtt';
            //var data = 'UserId=' + this.UserId;
            console.log(link);

            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Authorization','Bearer ' + this.access_token);
            //headers.append('Access-Control-Allow-Headers','Origin','X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'application/json');
           
            let options = new RequestOptions({ headers: headers });
            this.http.get(link, options)
            .map(res => res.json())
            .subscribe(rdata => {  
                console.log(rdata);
              }
  }
*/
  mainSettings()
  {
    this.navCtrl.push(SettingsPage);
  }


  getdevices()
  {
     
     var data = {userid: this.data.userid};
     console.log(data);

     this.apiProvider.getDevices(this.data).then((result) =>
              {
                    this.myList = result;        
                    localStorage.setItem('getDevice', JSON.stringify(this.myList));

                     var viewlistarray = [];
                     var j = 0;
                     for(var i = 0; i < this.myList.devices.length; i++)
                     {
                      if(this.myList.Email != null)
                      {
                        viewlistarray[j] = JSON.parse(this.myList.devices[i]);
                        j++; 
                      }
                     }
                  if(viewlistarray.length != 0)
                  {
                    this.items = viewlistarray; 
                    console.log('devices data = ' , this.items); 
                    localStorage.setItem('getDevicedata', JSON.stringify(this.items));   

                  }
                   // console.log(this.items);
                    //this.loadingCtrl.dismiss();
                    //this.navCtrl.setRoot(HomePage);

     }, error => {
            console.log("Response not Fetched Correctly!");
        });

   /* this.apiProvider.getDevices().then(data => {
      console.log(data);
        this.items = data;
      });
  });*/

}



/*deleteItem(item)
  {
    let index = this.items.indexOf(item);
    console.log(index);
    //console.log(this.device);
    //console.log(item.deviceid);
    let device = this.items.find(indexOf(item));
    console.log(device);
    console.log(this.items[0]);
  for(index=index+1;index<this.items.length;index++)
  {
    //if(this.items.deviceid == item.deviceid)
    //{
    if(index > -1)
    {
      this.items.splice(index, 1);
    }
  }
 // }
  
  }*/


  selectproduct(){
        this.navCtrl.push(ScannerPage);
}
  	

  /*singleswitch(){
  	this.navCtrl.push(SingleswitchPage);
  }

  twoswitch(){
    this.navCtrl.push(TwoswitchPage);
  }

  fourswitchonlyshedular(){
    this.navCtrl.push(FourswitchonlyschedularPage);
  }*/

  singleswitchwithslider(item, ind){
    console.log(item);
    console.log(ind);
    this.navCtrl.push(SingleswitchwithsliderPage,{deviceData:item,index:ind});
  }
  /*fourswitchonesliderandshedular(){
    this.navCtrl.push(FourswitchonesliderandschedularPage);
  }*/
  eightswitch(item, ind){
    console.log(item);
    console.log(ind);
    this.navCtrl.push(EightswitchPage,{deviceData:item,index:ind});
  }
  ledtabs(item, ind){
    console.log(item);
    console.log(ind);

    // let loading = this.loadingCtrl.create({
    //   spinner: 'hide',
    //   content: '<img src="../assets/imgs/preloader.gif"> Searching for networks'
    // });
    // loading.present();
    this.navCtrl.push(LedtabPage,{deviceData:item,index:ind});
  }


}
