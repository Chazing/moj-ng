import { Input, OnInit, ElementRef, Injector, SkipSelf, Host, Optional, TemplateRef, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ElementBase } from '../base/element.base';
import { ControlValueAccessor } from '@angular/forms';
import { PrimeTemplate } from 'primeng/primeng';
import { PermissionService } from '../../permissions/permission.service';

export abstract class DropDownBase extends ElementBase<any> implements ControlValueAccessor, OnInit, AfterContentInit {
    _items: any[];
    customTemplate: TemplateRef<any>;
    @ContentChildren(PrimeTemplate) templates: QueryList<any>;
    @Input() get items(): any[] {
        return this._items;
    }

    set items(val: any[]) {
        this._items = val;
        if (this.afterInit) {
            // inputs fieldID and fieldName inited
            this.setModel(val);
        }
    }
    @Input() fieldName: string = 'value';
    @Input() fieldID: string = 'key';
    @Input() placeholder: string = '';

    multiple: boolean = false;
    isIdModel: boolean;
    isObjectModel: boolean;
    afterInit: boolean = false;

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.afterInit = true;
        this.setModel(this.items);
    }

    setModel(items) {
        //model type to return: object/id/string
        if (items && items.length > 0 && this.afterInit) {
            if (items.constructor === Array) {
                if (this.fieldID && items[0].hasOwnProperty(this.fieldID)) {
                    this.isIdModel = true;
                } else if (this.fieldName && items[0].hasOwnProperty(this.fieldName)) {
                    this.isObjectModel = true;
                }
            }

            //fix prime bug default value not selected
            if (!this.control) this.setControl();
            if (this.control && this.control.value) {
                this.writeValue(this.control.value);
            }
        }
    }

    _innerValue: any;

    propagateChange: any = () => { };
    propagateTouched: any = () => { };

    get value() {
        return this._innerValue;
    }

    set value(v: any) {
        this._innerValue = v;
        this.propagateTouched();
        if (!v) {
            this.propagateChange(null);
        } else if (this.isIdModel && typeof v !== 'string') {
            //return id
            if (this.multiple && v.length > 0) {
                let selectedItems = v.map(item => {
                    return item[this.fieldID];
                });
                this.propagateChange(selectedItems);
            } else {
                this.propagateChange(v[this.fieldID]);
            }
        } else {
            //return object / string
            this.propagateChange(v);
        }
    }
    ngAfterViewInit() {
        let parentNode = this.el.nativeElement.parentNode;
        while (parentNode) {
            if (parentNode.nodeName === "FIELDSET") {

                if (parentNode.disabled)
                    break;
            }
            parentNode = parentNode.parentNode;
        }
        if (parentNode && parentNode.disabled)
            this.disabled = true;
    }

    writeValue(value: any) {
        if (value && (!this.multiple || (this.multiple && value.length > 0))) {
            //value or array with values exists
            if (this.items && this.items.length > 0 && this.isIdModel) {
                //find the object in the list and select the id
                if (!this.multiple) {
                    let currentFieldID = this.fieldID;
                    let elementPos = this.items
                        .map(function (x) {
                            return x[currentFieldID];
                        })
                        .indexOf(value);
                    let selectedItem = elementPos >= 0 ? this.items[elementPos] : value;
                    this._innerValue = selectedItem;
                } else {
                    let selectedItems = [];
                    value.forEach(item => {
                        let currentFieldID = this.fieldID;
                        let elementPos = this.items
                            .map(function (x) {
                                return x[currentFieldID];
                            })
                            .indexOf(item);
                        if (elementPos >= 0) {
                            selectedItems.push(this.items[elementPos]);
                        }
                    });
                    this._innerValue = selectedItems;
                }
            } else {
                this._innerValue = value;
            }
        } else {
            this._innerValue = null;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.propagateTouched = fn;
    }

    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'custom':
                default:
                    this.customTemplate = item.template;
                    break;
            }
        });
    }
}
