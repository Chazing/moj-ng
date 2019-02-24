import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ButtonStyle } from './button-style';
/**
  * Usage example
  * ```html
  * <moj-cancel-button></moj-cancel-button>
  * ```
  * <example-url></example-url>
 */
@Component({
    selector: 'moj-cancel-button',
    template: `<moj-button [textKey]="textKey" [buttonStyle]="buttonStyle" [isEnable]="isEnable"></moj-button>`
})
export class MojCancelButtonComponent {
    @Input() textKey: string = 'MojTexts.cancel';
    @Input() isEnable: boolean=true;
    @Input() buttonStyle: ButtonStyle = ButtonStyle.SmallLight;
}