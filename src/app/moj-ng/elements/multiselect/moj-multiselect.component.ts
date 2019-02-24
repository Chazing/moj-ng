import { Component, ElementRef, Injector, Input, EventEmitter, Output, OnInit, ViewChild, forwardRef, TemplateRef, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropDownBase } from '../base/dropdown.base';
import { MultiSelect } from 'primeng/components/multiselect/multiselect';
import { ElementBase } from '../base/element.base';
import { PrimeTemplate } from 'primeng/primeng';

/** 
 * Example of usage:
 * ```html
 * <moj-multiselect name="multiselectValue"
                     labelTextKey="Texts.Choose"
                     labelWidthColumns="1"
                     controlWidthColumns="2"
                     [(ngModel)]="multiselectValue"
                     [items]="listItems"
                     fieldName="ProductName"
                     fieldID="ID"
                     [filter]="true">
    </moj-multiselect>
 * ```
 * For custom template
 * ```html
 *  <moj-multiselect [isLabelAboveControl]="true" name="autocompleteValueFrom" labelTextKey="Texts.Choose" labelWidthColumns="1" controlWidthColumns="2"
                              [items]="numberItems" [fieldName]="'name'" [fieldID]="'id'" [(ngModel)]="autocompleteValueFrom" #autocompleteValueFrom1="ngModel"
                              (onSelect)="select($event)" [required]="true" [labelTextKey]="'בחר מעל'">
                              <ng-template let-item pTemplate="custom">
                                    <label [title]=item.value.tooltip>{{item.value.name}}</label>
                            </ng-template>
    </moj-multiselect>
 * ```
 * <example-url>../screenshots/multiselect.JPG</example-url>
*/
@Component({
    selector: 'moj-multiselect',
    templateUrl: "moj-multiselect.component.html",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MojMultiSelectComponent,
        multi: true
    },
    {provide: ElementBase, useExisting: forwardRef(() => MojMultiSelectComponent)}]
})
export class MojMultiSelectComponent extends DropDownBase implements OnInit {

    @Input() filter: boolean = false;
    @Input() maxSelectedLabels = 4;
    @Input() selectedItemsLabel: string = 'MojTexts.selectedItemsLabel';
    @ViewChild(MultiSelect) pMultiSelect: MultiSelect;
    customTemplate: TemplateRef<any>;
    @ContentChildren(PrimeTemplate) templates: QueryList<any>;

    @Output()
    onChange = new EventEmitter();
    @Output()
    onPanelShow = new EventEmitter();
    @Output()
    onPanelHide = new EventEmitter();

    onchange(event: any) {
        this.onChange.emit(event);
    }

    onPanelshow(event: any) {
        //select all text

        let selectAllText = this.translateService.instant('MojTexts.selectAll');
        let a = this.pMultiSelect.el.nativeElement.getElementsByClassName("ui-chkbox");
        if (a[0]) {
            a[0].title = selectAllText;
        }

        if (!this.filter) {
            let b = this.pMultiSelect.el.nativeElement.getElementsByClassName("ui-multiselect-header");
            if (b[0]) {
                b[0].insertAdjacentHTML('beforeend', '<div class="ui-multiselect-filter-container"> ' + selectAllText + ' </div>');
            }
        }

        this.onPanelShow.emit(event);
    }

    onPanelhide(event: any) {
        this.onPanelHide.emit(event);
    }

    constructor(el: ElementRef, _injector: Injector, protected translateService: TranslateService) {
        super(el, _injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.multiple = true;
        this.pMultiSelect.defaultLabel = this.translateService.instant(this.placeholder);
        this.pMultiSelect.updateLabel();
    }
}