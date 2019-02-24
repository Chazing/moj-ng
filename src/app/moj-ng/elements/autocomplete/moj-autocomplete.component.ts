import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Injector, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AutoComplete } from 'primeng/primeng';
import { DropDownBase } from '../base/dropdown.base';
import { DropdownMode, FilterType } from './autocomplete.enum';
import { ElementBase } from '../base/element.base';

/**
  * Usage example
  * ```html
  * <moj-autocomplete name="autocompleteValue"
                          labelTextKey="Texts.Choose"
                          labelWidthColumns="1"
                          controlWidthColumns="2"
                          [items]="listItems"
                          [fieldName]="'ProductName'"
                          fieldID="ID"
                          [(ngModel)]="autocompleteValue">
        </moj-autocomplete>
  * ```
  * for custom list with template:
  * ```html
  * <moj-autocomplete name="autocompleteValue" labelTextKey="Texts.Choose" labelWidthColumns="1" controlWidthColumns="2" [items]="listItems"
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
  @Input() itemsUrl: string;
  @Input() minLength: number = 1;
  @Input() multiple: boolean = false;
  @Input() dropdown: boolean = false;
  @Input() filterType: FilterType = FilterType.startsWith;
  @Input() forceSelection: boolean = true;
  @Input() dropdownMode: DropdownMode = DropdownMode.blank;
  @Input() emptyMessage: string = 'MojTexts.noDataFound';
  @Input() delay: number;
  @ViewChild(AutoComplete) pAutoComplete: AutoComplete;

  filteredItems: any;

  @Output()
  onKeyUp = new EventEmitter();
  @Output()
  onSelect = new EventEmitter();
  @Output()
  onClear = new EventEmitter();

  constructor(
    el: ElementRef,
    _injector: Injector,
    protected translateService: TranslateService,
    private http: HttpClient
  ) {
    super(el, _injector);
  }

  search(event) {
    if (this.itemsUrl) {
      this.http
        .get(this.itemsUrl + '/?text=' + event.query.toLowerCase(), { withCredentials: true })
        .subscribe(items => {
          if (items) {
            this.filteredItems = items;
          }
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
  }

  a(event: any, str: string) {
    return (
      (this.filterType == FilterType.startsWith && str.toLowerCase().startsWith(event.query.toLowerCase())) ||
      (this.filterType == FilterType.includes && str.toLowerCase().includes(event.query.toLowerCase()))
    );
  }

  onkeyup(event) {
    this.onKeyUp.emit(event);
  }

  onselect(event) {
    this.onSelect.emit(event);
  }

  onclear(event) {
    this.value = null; //fix prime bug in forceselection
    this.onClear.emit(event);
  }
}
