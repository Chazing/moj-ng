import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ButtonStyle } from './button-style';
import { Alignment } from '../general/general.enum';

/**
  * Usage example
  * ```typescript
  * export class SomeComponent {
  * public buttonStyle = ButtonStyle;
  * 
  * onButtonClick() {
        console.log('clicked!!')
    }
  * }
  * ```
  * ```html
  * <moj-buttons-line>
  *              <moj-button  buttonStyle={{buttonStyle.SmallLight}} (click)="onButtonClick()" [textKey]="'MojTexts.cancel'"></moj-button>
  * </moj-buttons-line>
  * ```
  * <example-url>../screenshots/button.JPG</example-url>
 */
@Component({
    selector: 'moj-button',
    template: `<div (click)="!isEnable? $event.stopPropagation() : isEnable=isEnable" class="{{baseClass}} {{buttonStyle}}" [style.float]="alignment === alignmentList.left ? 'left' : 'right'">
                    <button [attr.data-tooltip]="tooltip | translate" #button type="{{type}}" [disabled]="!isEnable">
                        <i *ngIf="buttonStyle==buttonStyleList.IconText || buttonStyle==buttonStyleList.Icon" class="{{iconClass}}"></i>{{textKey | translate}}
                    </button>
               </div>`,
    styles: [`:host{ margin-right: 10px; display: inline-block;}`]
})
export class MojButtonComponent {
    @Input() textKey: string;
    @Input() buttonStyle: ButtonStyle = ButtonStyle.Dark;
    @Input() isEnable: boolean = true;
    @Input() type: string = 'button';
    @Input() iconClass: string;
    @Input() tooltip: string;
    @Input() alignment: Alignment;
    @ViewChild('button') button;
    buttonStyleList = ButtonStyle;
    alignmentList = Alignment;
    baseClass: string = "";
    ngOnInit() {
        if (this.buttonStyle != ButtonStyle.Icon)
            this.baseClass = "action-base moj-button";
    }
}