import { Component, ElementRef, forwardRef, Injector, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { ElementBase } from "../base/element.base";
import { LabelAlign } from '../label/label.enum';
import { PermissionService } from '../../permissions/permission.service';

/**
  * Usage example
  * ```html
  * <moj-checkbox [controlWidthColumns]=1  [(ngModel)]="checkBoxValue" name="checkBoxValue" [labelTextKey]="'Texts.areYouInterested'">
  * ```
  * <example-url>../screenshots/checkBox.JPG</example-url>
 */
@Component({
    selector: 'moj-checkbox',
    templateUrl: 'moj-checkbox.component.html',
    styleUrls: ['moj-checkbox.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojCheckboxComponent),
        multi: true
    }, { provide: ElementBase, useExisting: forwardRef(() => MojCheckboxComponent) }]
})
export class MojCheckboxComponent extends ElementBase<boolean> {

    @Output()
    onChange = new EventEmitter();

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }

    onFocusIn($event?: any) {
        $event.target.select();
        super.onFocusIn($event);
    }

    onchange(event: any) {
        this.onChange.emit(event);
    }
}
