import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '@moj/moj-ng';

@Component({
  selector: 'app-texts-demo', templateUrl: './texts-demo.component.html',
  styleUrls: ['./texts-demo.component.scss']
})
export class TextsDemoComponent implements OnInit {
  enums: Enums = ENUMS;
  FontStyles = Object.keys(this.enums.FontStyle);
  fontFamily = "Open Sans Hebrew";
  constructor() {

  }

  ngOnInit() {
  }

  getFontSize(fontstyle) {
    return this.enums.FontStyle[fontstyle].substring(this.enums.FontStyle[fontstyle].indexOf('-') + 1).substring(0, 2);
  }

  getFontWheight(fontStyle) {
    let weight;
    fontStyle.indexOf('Bold') > 0 ? weight = "Bold" : weight = "Regular";
    return weight;
  }




}