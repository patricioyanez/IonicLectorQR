import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
@Component({
  selector: 'app-aingreso',
  templateUrl: './aingreso.page.html',
  styleUrls: ['./aingreso.page.scss'],
})
export class AingresoPage implements OnInit {
code: any;
scanActive = false;
scanResult = null;
@ViewChild('video',{static:false}) video: ElementRef;
@ViewChild('canvas',{static:false}) canvas: ElementRef;
videoElement: any;
canvasElement: any;
canvasContext: any;
loading: HTMLIonLoadingElement;
constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, private loadingCtrl: LoadingController ) { }
ngAfterViewInit(){
  this.videoElement = this.video.nativeElement;
  this.canvasElement = this.canvas.nativeElement;
  this.canvasContext = this.canvasElement.getContext('2d');
}
ngOnInit() {
}
captar(){
  this.barcodeScanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    console.log('Barcode data', barcodeData);
   }).catch(err => {
       console.log('Error', err);
   });
}
async starscan(){
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {facingMode: 'environment'}
  });
  this.videoElement.srcObject = stream;
  this.videoElement.setAttribute('playsinline',true);
  this.videoElement.play();
  this.loading = await this.loadingCtrl.create({});
  await this.loading.present();
  requestAnimationFrame(this.scan.bind(this));
}
async scan(){
  console.log('SCAN');
  if(this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA){
    if(this.loading){
      await this.loading.dismiss();
      this.loading = null;
      this.scanActive = true;
    }
    this.canvasElement.height = this.videoElement.videoHeight;
    this.canvasElement.width = this.videoElement.videoWidth;
    this.canvasContext.drawImage(
      this.videoElement,
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    const imageData = this.canvasContext.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    const code = jsQR(imageData.data, imageData.width,imageData.height,{
      inversionAttempts: 'dontInvert'
    });
    console.log('code: ',code);
    if(code){
      this.scanActive = false;
      this.scanResult = code.data;
      this.showQrToast();
    }else{
      if(this.scanActive){
      requestAnimationFrame(this.scan.bind(this));
      }
    }
  }else{
    requestAnimationFrame(this.scan.bind(this));
  }
}
reset(){
  this.scanResult=null;
}
stopscan(){
  this.scanActive = false;
}
async showQrToast(){
  const toast = await this.toastCtrl.create({
message: `Open ${this.scanResult}?`,
position: 'top',
buttons:[{
  text: 'Open',
  handler: () =>{
    window.open(this.scanResult, '_system','location=yes');
  }
}]
  });
  toast.present();
}
































































































}
