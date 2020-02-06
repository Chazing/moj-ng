import { Enums, ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';
import { onOffSwitchType } from 'src/app/moj-ng';


@Component({
  selector: 'app-on-off-switch-demo',
  templateUrl: './on-off-switch-demo.component.html',
  styleUrls: ['./on-off-switch-demo.component.css']
})
export class OnOffSwitchDemoComponent implements OnInit {
  enums: Enums = ENUMS;
  checkBoxValue;
  checkBoxValue1;
  checkBoxValue2;
  onOffSwitchType = onOffSwitchType;
  constructor() { }

  ngOnInit() {
  }

}
