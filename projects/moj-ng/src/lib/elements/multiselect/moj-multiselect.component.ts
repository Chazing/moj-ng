import { Component, ElementRef, Injector, Input, EventEmitter, Output, OnInit, ViewChild, forwardRef, TemplateRef, ContentChildren, QueryList, Renderer2, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropDownBase } from '../base/dropdown.base';
import { MultiSelect } from 'primeng/components/multiselect/multiselect';
import { ElementBase } from '../base/element.base';
import { PermissionService } from '../../permissions/permission.service';
import { PrimeTemplate } from 'primeng/components/common/shared';

/** 
 * Example of usage:
 * ```html
 * <moj-multiselect name="multiselectValue"
                     labelTextKey="Texts.Choose"
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
 *  <moj-multiselect name="autocompleteValueFrom" labelTextKey="Texts.Choose" controlWidthColumns="2"
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
    { provide: ElementBase, useExisting: forwardRef(() => MojMultiSelectComponent) }]
})
export class MojMultiSelectComponent extends DropDownBase implements OnInit {

    listItems: any[];
    @Input() filter: boolean = false;
    @Input() maxSelectedLabels = 4;
    @Input() selectedItemsLabel: string = 'MojTexts.selectedItemsLabel';
    @ViewChild(MultiSelect, { static: true }) pMultiSelect: MultiSelect;
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

        for (let i = 1; i < a.length; i++) {
            var label = a[i].parentNode.getElementsByTagName("label");
            let item = this.itemsValue.filter(x => x[this.fieldName] == label[0].textContent);
            if (item != undefined && item.length && item[0].disabled) {
                this.renderer.addClass(a[i].parentNode, 'ui-state-disabled');
                this.renderer.addClass(a[i].parentNode, 'disabled-item');
            }
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

    constructor(el: ElementRef, _injector: Injector, protected translateService: TranslateService, private renderer: Renderer2
        , permissionService: PermissionService,protected cdr: ChangeDetectorRef) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.multiple = true;
        // this.pMultiSelect.defaultLabel = this.translateService.instant(this.placeholder);
        this.pMultiSelect.updateLabel();
    }

    ngAfterViewInit()
    {
        super.ngAfterViewInit();
        this.cdr.detectChanges();
    }
}