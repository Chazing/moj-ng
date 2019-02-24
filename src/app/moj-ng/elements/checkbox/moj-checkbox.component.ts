import { Component, ElementRef, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { ElementBase } from "../base/element.base";
import { LabelAlign } from '../label/label.enum';

/**
  * Usage example
  * ```html
  * <moj-checkbox [controlWidthColumns]=1 [labelWidthColumns]=2  [(ngModel)]="checkBoxValue" name="checkBoxValue" [labelTextKey]="'Texts.areYouInterested'">
  * ```
  * <example-url>../screenshots/checkBox.JPG</example-url>
 */
@Component({
    selector: 'moj-checkbox',
    templateUrl: 'moj-checkbox.component.html',
    styleUrls: ['moj-checkbox.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojCheckboxComponent),
        multi: true
    }]
})
export class MojCheckboxComponent extends ElementBase<boolean> {
    constructor(el: ElementRef, _injector: Injector) {
        super(el, _injector);
        this.labelAlign=LabelAlign.Right
    }

    onFocusIn($event?: any) {
        $event.target.select();
        super.onFocusIn($event);
    }
}
