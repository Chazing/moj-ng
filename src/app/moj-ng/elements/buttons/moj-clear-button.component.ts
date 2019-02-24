import { Component, Input, ElementRef } from '@angular/core';
import { ButtonStyle } from './button-style';
import { NgForm } from '@angular/forms';

/**
  * Usage example
  * ```html
  * <form #frmSearch="ngForm">
             <moj-clear-button [form]=frmSearch></moj-clear-button>
  * </form>
  * ```
  * <example-url>../screenshots/clearButton.JPG</example-url>
 */
@Component({
    selector: 'moj-clear-button',
    template: `<moj-button [textKey]="textKey" [buttonStyle]="buttonStyle" [isEnable]="isEnable" (click)="clearFields()"></moj-button>`
})
export class MojClearButtonComponent {
    @Input() textKey: string = 'MojTexts.clear';
    @Input() buttonStyle: ButtonStyle = ButtonStyle.SmallLight;
    @Input() isEnable: boolean = true;
    @Input() form: NgForm;

    clearFields() {
        this.form.resetForm();
        var formElements = this.el.nativeElement.getElementsByTagName('button')[0].form.getElementsByTagName('input');
        for (let index = 0; index < formElements.length; index++) {
            formElements[index].value = '';
        }
    }

    constructor(private el:ElementRef){}
}