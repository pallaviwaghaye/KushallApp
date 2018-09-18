import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public isBtnActive1:boolean=false;
  	public isBtnActive2:boolean=false;
  	public isBtnActive3:boolean=false;
  	public isBtnActive4:boolean=false;
  	public isBtnActive5:boolean=false;
  	public isBtnActive6:boolean=false;
  	public isBtnActive7:boolean=false;
  	public showschedule:any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.showschedule = false;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LedschedularPage');
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


}
