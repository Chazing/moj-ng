import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-progress-demo',
  templateUrl: './progress-demo.component.html',
  styleUrls: ['./progress-demo.component.css']
})
export class ProgressDemoComponent implements OnInit {
  percentValue: number = 50;
  percentValueInput: number = 50;
  Enums : Enums = ENUMS;

  constructor() { }

  ngOnInit() {
  }

  update(event) {
    this.percentValueInput = this.percentValue;
  }
}
