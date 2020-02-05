import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ButtonStyle } from './button-style';

import { PermissionService } from '../../permissions/permission.service';
import { ButtonBase } from '../base/moj-button.base';
/**
  * Usage example
  * ```html
  * <moj-cancel-button></moj-cancel-button>
  * ```
  * <example-url></example-url>
 */
@Component({
    selector: 'moj-cancel-button',
    template: `<moj-button [textKey]="textKey" [buttonStyle]="buttonStyle" [isEnable]="isEnable" ></moj-button>`
})
export class MojCancelButtonComponent extends ButtonBase {

    constructor(permissionService: PermissionService, el: ElementRef) {
        super(permissionService, el)
        this.textKey = 'MojTexts.cancel';
        this.buttonStyle = ButtonStyle.Secondary;
    }

}