import { ENUMS } from '@moj/moj-ng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-card-demo',
  templateUrl: './options-card-demo.component.html',
  styleUrls: ['./options-card-demo.component.css']
})
export class OptionsCardDemoComponent implements OnInit {
  enums = ENUMS
  constructor() { }

  ngOnInit() {
  }

}
