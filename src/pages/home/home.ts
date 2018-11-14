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

  data: any;
  public userid:any;
  //var self = this;

  public newSubcategories: any[] = []; // DECLARE A NEW EMPTY ARRAY IN THE TOP OF YOUR CLASS
  public myList: any;

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



    //this.device = navParams.get('deviceData');
    //console.log(this.access_token);
    //this.Users();
    //this.sendDevice();
    this.getdevices();
    //this.getUser();
  }

 /* Users()
{
  
  this.apiProvider.getUsers()
  .then(data => {
    console.log(data);
  });
}*/

 /* Devices()
{
 
  this.apiProvider.getDevices()
  .then(data => {
    console.log(data);
  });
    var devicelistarray = [];
    var j = 0;
    for (var i = 0; i < data; i++) {
              if (data[i].status != 20) {
                devicelistarray[j] = data[i];
                j++;
              }
            }
            if (devicelistarray.length == 0) {    
              this.deviceArray = 'No device added';
            }else{
              this.allDevices = devicelistarray;
            }    

    },error =>{
                    this.loading.dismiss();
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
              });
}
*/

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
                    console.log(this.items);    
                  }
                   // console.log(this.items);
                    //this.loadingCtrl.dismiss();
                    //this.navCtrl.setRoot(HomePage);

     }, error => {
            console.log("Response not Fetched Correctly!");
        });
     /*,error =>{
                    this.loadingCtrl.dismiss();

    this.apiProvider.getDevices().then(data => {
      console.log(data);
        this.items = data;
      });
  });*/

    /* this.items.forEach(item => {
        this.newSubcategories.push(a);
    });*/
}




  selectproduct(){

    /*this.loading = this.loadingCtrl.create({
                content: "Please wait..."
            });
    this.loading.present();

    this.apiProvider.getDevices().then(data => {
      this.responseData = data;
      console.log(this.responseData);

      //localStorage.setItem('Devicedata', this.responseData);
      
      if(data != null)
      {
        //self.events.publish('deviceCategory', data);
        this.loading.dismiss();*/
        
        this.navCtrl.push(ScannerPage);
      /*}
      else{
        alert('No Devices Found !!');
      }
    },error =>{
                    this.loading.dismiss();
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
              });*/
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
