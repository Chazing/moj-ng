import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton-demo',
  templateUrl: './radiobutton-demo.component.html',
  styleUrls: ['./radiobutton-demo.component.css']
})
export class RadiobuttonDemoComponent implements OnInit {
  radioOptions = 1;
  constructor() { }

  ngOnInit() {
  }

}
