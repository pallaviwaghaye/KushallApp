import { Component,Directive, Input, Renderer,HostListener, ViewChild,Output,EventEmitter,ElementRef,ViewEncapsulation} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomController } from 'ionic-angular';
/**
 * Generated class for the WhiteyellowcolorpickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whiteyellowcolorpicker',
  templateUrl: 'whiteyellowcolorpicker.html',
})
export class WhiteyellowcolorpickerPage {

 public switchstatus:boolean=false;
    public brightnesswy:any=0;
    public brightnessrgb:any=0;

	public switchstatusText:any;
	@ViewChild('wycanvasval') wycanvasval:ElementRef;
	@ViewChild('wydrag') wydrag:ElementRef;
	@ViewChild('wycolorpickerdivId') wycolorpickerdivId:ElementRef;
    public wycontext:any;
    public wyctx:any;
    public wyimg;
    private wyhexval;
    private wyrgbaval;
    @Output() outputColor=new EventEmitter();
  	constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController,public navCtrl: NavController, public navParams: NavParams) {
  		this.switchstatusText = 'OFF';
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad WhiteyellowcolorpickerPage');
		this.wycontext = this.wycanvasval.nativeElement;
		this.wyctx = this.wycontext.getContext("2d");
		this.wyimg = new Image();
		this.wyimg.src = "assets/imgs/yw_wheel.png";

		this.wyctx.clearRect(0, 0, this.wycontext.width, this.wycontext.height);

		this.wyimg.onload=(()=>{
		    this.wyctx.drawImage(this.wyimg, 0, 0,this.wyimg.width,this.wyimg.height,0, 0,this.wycontext.width, this.wycontext.height);
		});
  	}

  	ngAfterViewInit() {
        this.renderer.setElementStyle(this.wydrag.nativeElement, 'position', 'absolute');
        let hammer = new window['Hammer'](this.wydrag.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
 
        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });
 
    }
 
    handlePan(ev){
        let newLeft = ev.center.x - this.wycolorpickerdivId.nativeElement.getBoundingClientRect().left - (this.wydrag.nativeElement.clientWidth / 2);
        let newTop = ev.center.y - this.wycolorpickerdivId.nativeElement.getBoundingClientRect().top - (this.wydrag.nativeElement.clientHeight / 2);
        var result = this.limit(newLeft, newTop, 104.5, 104.5, 104.5);
        this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.wydrag.nativeElement, 'left', result.x + 'px');
            this.renderer.setElementStyle(this.wydrag.nativeElement, 'top', result.y + 'px');
            this.setwyPixel(ev.center.x,ev.center.y);
        });
    }

    limit(x, y, cenx, ceny, r) {
        var dist = this.distance([x, y], [cenx, ceny]);
        if (dist <= r) {
            return { x: x, y: y };
        }
        else {
            x = x - cenx;
            y = y - ceny;
            var radians = Math.atan2(y, x);
            return {
                x: Math.cos(radians) * r + cenx,
                y: Math.sin(radians) * r + ceny
            }
        }
    }

    distance(dot1, dot2) {
        var x1 = dot1[0],
            y1 = dot1[1],
            x2 = dot2[0],
            y2 = dot2[1];
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

  	toggleswitch(switchstatusText){
  		this.switchstatus = !this.switchstatus;
  		if(switchstatusText == 'ON'){
  			this.switchstatusText = 'OFF';
  		}else{
  			this.switchstatusText = 'ON';
  		}
    }

  	setwyPixel(clientX,clientY){
  		var boundingRect=this.wycontext.getBoundingClientRect();
  		var x=clientX-boundingRect.left;
  		var y=clientY-boundingRect.top;
  		var px=this.wyctx.getImageData(x,y,1,1);
  		var data_array=px.data;
  		var pixelColor="rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")";
  		this.wyrgbaval=pixelColor;
  		var dColor = data_array[2] + 256 * data_array[1] + 65536 * data_array[0];
  		this.wyhexval=('#'+dColor.toString(16));
  		this.outputColor.emit(this.wyhexval+" "+this.wyrgbaval);
    }
    setBadgewy(brightnesswy){
      	this.brightnesswy == brightnesswy;
    }

}
