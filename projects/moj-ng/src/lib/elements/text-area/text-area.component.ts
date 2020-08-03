import { Component, OnInit, ElementRef, Injector, Input, forwardRef, ChangeDetectionStrategy, SkipSelf, Host, Optional } from '@angular/core';
import { ElementBase } from '../base/element.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PermissionService } from '../../permissions/permission.service';

/**
  * Usage example
  * ```html
  * <moj-textarea [(ngModel)]="stringFrom" name="stringFrom"
  *              controlWidthColumns="4" [maxTextLength]="5">
  * </moj-textarea>
  * ```
  * <example-url>../screenshots/textarea.JPG</example-url>
 */
@Component({
    selector: 'moj-textarea',
    templateUrl: './text-area.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojTextAreaComponent),
        multi: true
    },
    { provide: ElementBase, useExisting: forwardRef(() => MojTextAreaComponent) }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojTextAreaComponent extends ElementBase<string>{
    @Input() maxTextLength: number = 5000;
    @Input() rows: number = 3;
    @Input() placeholder: string = '';

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
        this.showValidationOnBlur = true;
    }

    onPaste(e: ClipboardEvent) {
        super.onInputPaste(e, this.maxTextLength);
    }
    ngOnInit() {
        super.ngOnInit()
    }
}
