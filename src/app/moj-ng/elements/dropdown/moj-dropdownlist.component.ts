import { Component, ElementRef, EventEmitter, Injector, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropDownBase } from '../base/dropdown.base';
import { ElementBase } from '../base/element.base';

/**
  * Usage example
  * ```html
  * <moj-dropdownlist [labelWidthColumns]="3" [controlWidthColumns]="2" [required]="true" [(ngModel)]="fileTypeValue" name="fileTypeValue"
  *            [editable]="true" [items]="dropDownListItems">
  *         </moj-dropdownlist>
  * ```
  * for custom design with template
  * ```html
  * <moj-dropdownlist [isLabelAboveControl]=true name="ddValue" labelTextKey="Texts.Choose" labelWidthColumns="1"
  * controlWidthColumns="2" [items]="listItems" [(ngModel)]="ddValue">
  <ng-template let-item pTemplate="custom">
      <div style="background-color: crimson">{{item.value}}</div>
  </ng-template>
</moj-dropdownlist>
  * ```
  * <example-url>../screenshots/dropdownlist.JPG</example-url>
 */
@Component({
    selector: 'moj-dropdownlist',
    templateUrl: "moj-dropdownlist.component.html",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MojDropdownListComponent,
        multi: true
    },
    {provide: ElementBase, useExisting: forwardRef(() => MojDropdownListComponent)}]
})
export class MojDropdownListComponent extends DropDownBase {

    @Input() editable: boolean = false;
    @Input() filter: boolean = false;
    @Input() autoWidth: boolean = false;

    @Output()
    onChange = new EventEmitter();

    constructor(el: ElementRef, _injector: Injector, protected translateService: TranslateService) {
        super(el, _injector);
    }

    onchange(event: any) {
        this.onChange.emit(event);
    }

    remove() {
        this.value = null;
        this.onChange.emit(null);
    }
}