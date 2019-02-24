import { Component, OnInit, Input, ElementRef, ContentChild, AfterContentInit, ViewChild } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';
import { ILoadingOverlayParams } from 'ag-grid-community';

@Component({
  selector: 'moj-loading',
  templateUrl: './moj-loading.component.html',
  styleUrls: ['./moj-loading.component.css']
})
export class MojLoadingComponent implements OnInit, ILoadingOverlayAngularComp   {
  getGui(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  agInit(params: ILoadingOverlayParams): void {

  }
  
  // componentId:string;
  show:boolean;
  // @ViewChild("loadCanvas") canvas;
  // ctx: CanvasRenderingContext2D;
  // start: number = 0;
  // end: number = 1;
  // width: number;
  // height: number;
  // direction: boolean = true;
  // i:number = 0;
  // colors: string[] = ["rgba(240, 237, 61, 1)", "rgba(240, 61, 61, 1)", "rgba(61, 67, 240, 1)", "rgba(108, 240, 61, 1)"];

  constructor(public elRef:ElementRef) { 
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // this.ctx = this.canvas.nativeElement.getContext('2d');
    // this.width = this.canvas.nativeElement.width;
    // this.height = this.canvas.nativeElement.height;
    // this.ctx.lineWidth = this.width * 0.06;
    // this.ctx.lineCap = 'round';
    // window.requestAnimationFrame(() => this.draw());
  }
  
  // draw(){
  //   this.ctx.clearRect(0, 0, this.width, this.height);
  //   if(this.i == 4)  this.i = 0;
  //   this.ctx.strokeStyle = this.colors[this.i];
  //   this.ctx.beginPath();
  //   this.ctx.arc(this.width / 2, this.height / 2, this.width / 2 - this.ctx.lineWidth, this.start, this.end, false);
  //   this.ctx.stroke();

  //   if(this.direction) {
  //     this.end += 0.1;
  //   }
  //   else {
  //     this.start += 0.1;
  //   }
    
  //   if(this.end - this.start >= Math.PI + Math.PI)
  //   {
  //     this.direction = false;
  //     this.i++;
  //   } 
  //   if(this.end - this.start <= Math.PI/6) {
  //     this.direction = true;   
  //     this.i++; 
  //   }
    
  //   window.requestAnimationFrame(() => this.draw());
  // }

}
