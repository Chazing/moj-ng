import { MojConfigService } from './../../shared/moj-config.service';
import { MojRecaptchaService } from './../website/moj-recaptcha/moj-recaptcha.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Injector, Input, Output, ViewChild, forwardRef, Optional, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AutoComplete } from 'primeng/primeng';
import { DropDownBase } from '../base/dropdown.base';
import { DropdownMode, FilterType } from './autocomplete.enum';
import { ElementBase } from '../base/element.base';
import { Observable } from 'rxjs/internal/Observable';
import { PermissionService } from '../../permissions/permission.service';
/**
  * Usage example
  * ```html
  * <moj-autocomplete name="autocompleteValue"
                          labelTextKey="Texts.Choose"
                          controlWidthColumns="2"
                          [items]="listItems"
                          [fieldName]="'ProductName'"
                          fieldID="ID"
                          [(ngModel)]="autocompleteValue">
        </moj-autocomplete>
  * ```
  * for custom list with template:
  * ```html
  * <moj-autocomplete name="autocompleteValue" labelTextKey="Texts.Choose" controlWidthColumns="2" [items]="listItems"
            [fieldName]="'Value'" [fieldID]="'Key'" required [(ngModel)]="autocompleteValue">
            <ng-template let-item pTemplate="custom">
                    <div class="some-class">{{item.Value}}</div>
            </ng-template>
        </moj-autocomplete>
  * ```
  * <example-url>../screenshots/autocomplete.JPG</example-url>
  * <example-url>../screenshots/autocompleteDropdown.JPG</example-url>
  * <example-url>../screenshots/autocompleteMultiple.JPG</example-url>
 */
@Component({
    selector: 'moj-autocomplete',
    templateUrl: 'moj-autocomplete.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MojAutoCompleteComponent,
            multi: true
        },
        { provide: ElementBase, useExisting: forwardRef(() => MojAutoCompleteComponent) }
    ]
})
export class MojAutoCompleteComponent extends DropDownBase {
    @Input() itemsUrl: string; //server side search
    @Input() itemsFunction: (string) => Observable<any[]>; //server side search
    @Input() minLength: number = 1;
    @Input() multiple: boolean = false;
    @Input() dropdown: boolean = false;
    @Input() filterType: FilterType = FilterType.startsWith;
    @Input() forceSelection: boolean = true;
    @Input() dropdownMode: DropdownMode = DropdownMode.blank;
    @Input() emptyMessage: string = 'MojTexts.noDataFound';
    @Input() delay: number;
    @Input() dropdownIcon: string = 'pi pi-chevron-down';
    @Input() useRecaptchaBeforeGetUrl: boolean = false;
    @ViewChild(AutoComplete, { static: true }) pAutoComplete: AutoComplete;
    loadingData: boolean = false;

    filteredItems: any;
    isOverlayVisible: boolean;

    //@Output()
    //onKeyUp = new EventEmitter();
    @Output()
    onSelect = new EventEmitter();
    @Output()
    onClear = new EventEmitter();

    constructor(
        el: ElementRef,
        _injector: Injector,
        protected translateService: TranslateService,
        private http: HttpClient,
        permissionService: PermissionService,
        private config: MojConfigService,
        private cdr: ChangeDetectorRef,
        @Optional() private recaptchaService: MojRecaptchaService
    ) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.itemsUrl && !this.itemsUrl.startsWith('http'))
            this.itemsUrl = this.config.configuration.webApiAddress + this.itemsUrl;
    }

    ngAfterViewInit() {
        //fix wrong text in dropdown button (primeng bug) https://github.com/primefaces/primeng/issues/7463
        if (this.pAutoComplete.dropdownButton) {
            this.pAutoComplete.dropdownButton.nativeElement.setAttribute(
                'title',
                this.translateService.instant('MojTexts.Choose')
            );
            this.pAutoComplete.dropdownButton.nativeElement.getElementsByClassName('ui-button-text')[0].textContent = '';
        }
    }

    ngAfterViewChecked() {
        //fix primeng bug - when forceSelection = false and value is string the input field not updated - bug no 345097
        if (this.forceSelection == false &&
            typeof this.pAutoComplete.value == 'string' &&
            this.pAutoComplete.value &&
            this.pAutoComplete.inputEL.nativeElement.value == '') {
            this.pAutoComplete.inputEL.nativeElement.value = this.pAutoComplete.value;
        }
        //for accessibility
        if (this.pAutoComplete.el.nativeElement != undefined) {
            let listItem = this.pAutoComplete.el.nativeElement.getElementsByClassName('ui-autocomplete-list-item');
            if (listItem.length != 0 && listItem[0].innerHTML == this.translateService.instant(this.emptyMessage)) {
                listItem[0].setAttribute(
                    'title',
                    this.translateService.instant(this.emptyMessage));
            }
        }
    }

    ngDoCheck() {
        super.ngDoCheck();
        this.isOverlayVisible = this.pAutoComplete.overlayVisible;
    }

    search(event) {
        this.loadingData = true;
        if (this.itemsUrl) {
            if (this.useRecaptchaBeforeGetUrl && this.recaptchaService) {
                this.recaptchaService.executeRecaptcha().subscribe(res => {
                    this.http
                        .get(this.itemsUrl + '?Text=' + event.query.toLowerCase() + '&RecaptchaString=' + res, { withCredentials: true })
                        .subscribe(items => {
                            if (items) {
                                this.filteredItems = items;
                                this.setModel(this.filteredItems);//bug 357376 - return object model instead of id
                            }
                        });
                })
            }
            else {
                this.http
                    .get(this.itemsUrl + '/?text=' + event.query.toLowerCase(), { withCredentials: true })
                    .subscribe(items => {
                        if (items) {
                            this.filteredItems = items;
                            this.setModel(this.filteredItems);//bug 357376 - return object model instead of id
                        }
                    });
            }
        } else if (this.itemsFunction) {
            this.itemsFunction(event.query.toLowerCase()).subscribe(items => {
                this.filteredItems = items;
                this.setModel(this.filteredItems);//bug 357376 - return object model instead of id
            });
        } else if (this.items && this.items.length) {
            if (this.fieldName && this.items[0].hasOwnProperty(this.fieldName)) {
                // objects array
                this.filteredItems = this.items
                    .filter(item => this.a(event, item[this.fieldName]))
                    .sort((a, b) => a[this.fieldName].localeCompare(b[this.fieldName]));
            } else {
                // srtings array
                this.filteredItems = this.items.filter(item => this.a(event, item));
            }
        }
        this.loadingData = false;
    }

    a(event: any, str: string) {
        return (
            (this.filterType == FilterType.startsWith && str.toLowerCase().startsWith(event.query.toLowerCase())) ||
            (this.filterType == FilterType.includes && str.toLowerCase().includes(event.query.toLowerCase()))
        );
    }

    onkeyup(event) {
        this.keyup.emit(event);
    }

    onselect(event) {
        this.onSelect.emit(event);
    }

    onclear(event) {
        this.value = null; //fix prime bug in forceselection
        this.onClear.emit(event);
    }
}
