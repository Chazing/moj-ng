import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-moj-help-info-demo',
  templateUrl: './moj-help-info-demo.component.html',
  styleUrls: ['./moj-help-info-demo.component.css']
})
export class MojHelpInfoDemoComponent implements OnInit {
  Enums: Enums = ENUMS;
  editedItem: any;
  constructor() { }

  ngOnInit() {
  }

}
