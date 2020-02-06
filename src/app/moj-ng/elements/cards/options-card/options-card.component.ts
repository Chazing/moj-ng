import { ENUMS } from './../../../../../../projects/demo/src/app/enums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moj-options-card',
  templateUrl: './options-card.component.html',
  styleUrls: ['./options-card.component.scss']
})
export class OptionsCardComponent implements OnInit {
  enums = ENUMS;
  constructor() { }

  ngOnInit() {
  }

}
