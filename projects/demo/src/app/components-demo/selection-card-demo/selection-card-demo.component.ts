import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selection-card-demo',
  templateUrl: './selection-card-demo.component.html',
  styleUrls: ['./selection-card-demo.component.css']
})
export class SelectionCardDemoComponent implements OnInit {

  constructor() { }
  selectionValue=false;
  selectionValue2=false;

  ngOnInit() {
  }

}
