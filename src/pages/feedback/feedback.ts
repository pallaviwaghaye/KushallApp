import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ElementRef, Directive} from '@angular/core';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
@Directive({
  selector: '[elastic]'
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public element:ElementRef) 
  {
  	this.element = element;
  }
  ngAfterViewInit(){
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
