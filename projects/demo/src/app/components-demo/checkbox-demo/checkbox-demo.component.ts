import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.css']
})
export class CheckboxDemoComponent implements OnInit {
  Enums: Enums = ENUMS;
  checkboxValue = true;
  constructor() { }

  ngOnInit() {
  }

  onValueChanged() {
    //do somthing
  }
}
