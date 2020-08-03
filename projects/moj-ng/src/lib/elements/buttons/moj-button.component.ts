import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ButtonStyle } from './button-style';
import { Alignment } from '../general/general.enum';
import { PermissionService } from '../../permissions/permission.service';
import { ButtonBase } from '../base/moj-button.base';

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
  *       <moj-button buttonStyle={{Enums.ButtonStyle.Primary}} (click)="onButtonClick()" [textKey]="'MojTexts.approve'">
  * </moj-buttons-line>
  * ```
  * <example-url>../screenshots/button.JPG</example-url>
 */
@Component({
    selector: 'moj-button',
    templateUrl: 'moj-button.component.html',
    styles: [`:host{ margin-right: 10px;margin-bottom:20px}`]
})
export class MojButtonComponent extends ButtonBase implements AfterViewInit {
    @Input() type: string = 'button';
    @Input() iconClass: string;
    @Input() iconClassLeft: string;
    @Input() tooltip: string;
    @Input() alignment: Alignment;
    @Input() cssClass?: string;
    @Input() isGridButton?: boolean = false;
    @Input() isAutoWidth?: boolean;

    @ViewChild('button', { static: true }) button;
    buttonStyleList = ButtonStyle;
    alignmentList = Alignment;

    constructor(permissionService: PermissionService, el: ElementRef) {

        super(permissionService, el);
        this.buttonStyle = ButtonStyle.Primary;
        this.isEnable = true;
    }

    ngAfterViewInit() {
        if (this.isGridButton) {
            super.setIdentifier();
            super.setPermissions();
        }
    }
}