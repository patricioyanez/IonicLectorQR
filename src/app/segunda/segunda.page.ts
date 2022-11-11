import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
// TYPESCRIPT
export class SegundaPage implements OnInit {
  apruebo : number;
  rechazo : number;
  otro : number;

  constructor() {
    this.apruebo = 0;
    this.rechazo = 0;
    this.otro    = 0; 
  }

  ngOnInit() {
  }

  botonApruebo()
  {
    this.apruebo = this.apruebo + 1;
  }
  botonRechazo()
  {
    this.rechazo = this.rechazo + 1;
  }
  botonOtro()
  {
    this.otro = this.otro + 1;
  }
}
