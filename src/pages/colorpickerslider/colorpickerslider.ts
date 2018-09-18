import { Component,Directive, Input, Renderer,HostListener, ViewChild,Output,EventEmitter,ElementRef,ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomController } from 'ionic-angular';
/**
 * Generated class for the ColorpickersliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colorpickerslider',
  templateUrl: 'colorpickerslider.html',
  encapsulation:ViewEncapsulation.Emulated
})
export class ColorpickersliderPage {
public switchstatusText:any;
  	public switchstatus:boolean=false;
    public brightnesswy:any=0;
    public brightnessrgb:any=0;

    @ViewChild('canvasval') canvasval:ElementRef;
    @ViewChild('drag') drag:ElementRef;
    @ViewChild('colorpickerdivId') colorpickerdivId:ElementRef;
    // @ViewChild('colboxval') colboxval:any;
    public context:any;
    public ctx:any;
    public img;
    private hexval;
    private rgbaval;
    private containment_radius:any = 115;
    @Output() outputColor=new EventEmitter();
    @Input('startLeft') startLeft: any;
    @Input('startTop') startTop: any;

  	constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController,public navCtrl: NavController, public navParams: NavParams){
      this.switchstatusText = 'OFF';
    }

    ionViewDidLoad() {
      this.context = this.canvasval.nativeElement;
      this.ctx = this.context.getContext("2d");
      this.img = new Image();
      this.img.src = "assets/imgs/color_wheel_picker.png";

      this.ctx.clearRect(0, 0, this.context.width, this.context.height);

      this.img.onload=(()=>{
            this.ctx.drawImage(this.img, 0, 0,this.img.width,this.img.height,0, 0,this.context.width, this.context.height);
      });
      
  	}

    ngAfterViewInit() {
        this.renderer.setElementStyle(this.drag.nativeElement, 'position', 'absolute');
        let hammer = new window['Hammer'](this.drag.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
 
        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });
    }
 
    handlePan(ev){
        let newLeft = ev.center.x - this.colorpickerdivId.nativeElement.getBoundingClientRect().left - (this.drag.nativeElement.clientWidth / 2);
        let newTop = ev.center.y - this.colorpickerdivId.nativeElement.getBoundingClientRect().top - (this.drag.nativeElement.clientHeight / 2);
        var result = this.limit(newLeft, newTop, 104.5, 104.5, 104.5);
        this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.drag.nativeElement, 'left', result.x + 'px');
            this.renderer.setElementStyle(this.drag.nativeElement, 'top', result.y + 'px');
            this.setPixel(ev.center.x,ev.center.y);
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

    setPixel(ClientX,ClientY)
    {
      var boundingRect = this.context.getBoundingClientRect();
      var x = ClientX-boundingRect.left;
      var y = ClientY-boundingRect.top;
      var px = this.ctx.getImageData(x,y,1,1);
      var data_array = px.data;
      var pixelColor = "rgba("+data_array[0]+","+data_array[1]+","+data_array[2]+","+data_array[3]+")";
      this.rgbaval=pixelColor;
      var dColor = data_array[2] + 256 * data_array[1] + 65536 * data_array[0];
      this.hexval=('#'+dColor.toString(16));
      this.outputColor.emit(this.hexval+" "+this.rgbaval); 
    }

    setBadgergb(brightnessrgb){
      this.brightnessrgb == brightnessrgb;
    }

}


export class ColorpickerslidePage {
  	
}


