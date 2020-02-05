import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { ButtonStyle } from './button-style';
import { NgForm } from '@angular/forms';
import { PermissionService } from '../../permissions/permission.service';
import { ButtonBase } from '../base/moj-button.base';

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
    template: `<moj-button [textKey]="textKey" [buttonStyle]="buttonStyle" [isEnable]="isEnable" (click)="clearFields()" ></moj-button>`
})
export class MojClearButtonComponent extends ButtonBase {
    @Input() form: NgForm;

    clearFields() {
        this.form.resetForm();
        var formElements = this.el.nativeElement.getElementsByTagName('button')[0].form.getElementsByTagName('input');
        for (let index = 0; index < formElements.length; index++) {
            formElements[index].value = '';
        }
    }

    constructor(el: ElementRef, permissionService: PermissionService) {
        super(permissionService, el);
        this.textKey = 'MojTexts.clear';
        this.buttonStyle = ButtonStyle.Secondary;
    }



}