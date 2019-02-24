import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonStyle } from './button-style';
import { NgForm } from '@angular/forms';

/**
  * Usage example
  * ```html
  * <form #frmSearch="ngForm">
             <moj-submit-button [form]="frmSearch" (onSubmit)="save()"></moj-submit-button>
  * </form>
  * ```
 */
@Component({
    selector: 'moj-submit-button',
    template: `<moj-button type="submit" [textKey]="textKey" [buttonStyle]="buttonStyle" [iconClass]="iconClass"
    [isEnable]="isEnable" (click)="setSubmit($event)"></moj-button>`
})
export class MojSubmitButtonComponent {
    @Input() textKey: string = 'MojTexts.save';
    @Input() buttonStyle: ButtonStyle = ButtonStyle.SmallDark;
    @Input() isEnable: boolean = true;
    @Input() iconClass: string;
    @Input() form: NgForm;

    @Output() onSubmit = new EventEmitter();

    setSubmit(event) {
        if(this.form){
            Object.keys(this.form.controls).forEach(key => {
                (<any>this.form.controls[key]).submitted = true;
                this.form.controls[key].updateValueAndValidity();
              })
        }

        if(this.form.valid){
            this.onSubmit.emit(event);
        }
    }

}