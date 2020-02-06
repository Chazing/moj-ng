import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-labels-demo',
  templateUrl: './labels-demo.component.html',
  styleUrls: ['./labels-demo.component.css']
})
export class LabelsDemoComponent implements OnInit {
  Enums:Enums=ENUMS;
  contactName:string='ישראל ישראלי';
  constructor() { }

  ngOnInit() {
  }

}
