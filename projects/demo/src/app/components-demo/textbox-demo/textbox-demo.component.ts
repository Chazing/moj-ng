import { ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';
import { TextMaskConfig } from 'angular2-text-mask';
import { ElementSize } from '@moj/moj-ng';
import { ValidationPatterns } from 'src/app/moj-ng';

@Component({
    selector: 'app-textbox-demo',
    templateUrl: './textbox-demo.component.html',
    styleUrls: ['./textbox-demo.component.css']
})
export class TextboxDemoComponent implements OnInit {

    constructor() { }
    txtboxValue;
    txtboxPatternValue;
    txtboxMaskValue;
    //pattern = "pct[0-9]{5}$";
    pattern = ValidationPatterns.EnglishAndNumbersPattern;
    elSize = ElementSize;
    public pctMask: TextMaskConfig = new TextMaskConfig();
    enums = ENUMS;
    ngOnInit() {
        this.setPctMaskConfig();
    }
    setPctMaskConfig() {
        this.pctMask.mask = ['P', 'C', 'T', '/', /[A-Z]/, /[A-Z]/, '2', '0', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.pctMask.keepCharPositions = false;
        this.pctMask.showMask = true;
        this.pctMask.guide = true;
        this.pctMask.placeholderChar = '\u2000';
    }
}
