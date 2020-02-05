import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { ButtonStyle } from './button-style';
import { NgForm, FormGroup } from '@angular/forms';
import { MojUtilsService } from '../../shared/utils';
import { PermissionService } from '../../permissions/permission.service';
import { ButtonBase } from '../base/moj-button.base';


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
export class MojSubmitButtonComponent extends ButtonBase {
    @Input() iconClass: string;
    @Input() form: NgForm | FormGroup;
    @Output() onSubmit = new EventEmitter();

    constructor(private mojUtilsService: MojUtilsService, permissionService: PermissionService, el: ElementRef) {
        super(permissionService, el)
        this.textKey = 'MojTexts.save';
        this.buttonStyle = ButtonStyle.Primary;
    }

    setSubmit(event) {
        if (this.form) {
            this.mojUtilsService.setSubmitToFormGroup(this.form);
            if (this.form.valid) {
                this.onSubmit.emit(event);
            }
        }
    }
}