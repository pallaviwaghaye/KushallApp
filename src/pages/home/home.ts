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
  //var self = this;

  constructor(public navParams: NavParams,public apiProvider: ApiProvider,public loadingCtrl: LoadingController,public navCtrl: NavController) 
  {
    this.responseData = {};
    this.access_token = localStorage.getItem('access_token');
    //this.device = navParams.get('deviceData');
    //console.log(this.access_token);
    this.Users();
    this.devices();
    //this.getUser();
  }

  Users()
{
  
  this.apiProvider.getUsers()
  .then(data => {
    console.log(data);
  });
}

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

  devices()
  {
    this.apiProvider.getDevices().then(data => {
      console.log(data);
        this.items = data;
      });
  }




  selectproduct(){

    this.loading = this.loadingCtrl.create({
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
        this.loading.dismiss();
        
        this.navCtrl.push(ScannerPage);
      }
      else{
        alert('No Devices Found !!');
      }
    },error =>{
                    this.loading.dismiss();
                    //this.error = JSON.parse(error['_body']).error;
                    console.log(this.error);
              });
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
