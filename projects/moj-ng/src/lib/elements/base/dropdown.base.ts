import { Input, OnInit, ElementRef, Injector, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { ElementBase } from '../base/element.base';
import { ControlValueAccessor } from '@angular/forms';
import { PermissionService } from '../../permissions/permission.service';
import { PrimeTemplate } from 'primeng/components/common/shared';
import { Observable, of, Subscription } from 'rxjs';
import { isArray } from 'util';

export abstract class DropDownBase extends ElementBase<any> implements ControlValueAccessor, OnInit, AfterContentInit {

    private subscription: Subscription = new Subscription();
    customTemplate: TemplateRef<any>;
    @ContentChildren(PrimeTemplate) templates: QueryList<any>;

    _items
    itemsValue: any[]=[];
    get items(): any[] | Observable<any[]> {
        return this._items;
    }

    @Input() set items(val: any[] | Observable<any[]>) {

        if(val==undefined || val==null)
        {
            val=[];
        }

        if (isArray(val))
            this._items = of(val);
        else
            this._items = val;

        this.subscription.unsubscribe();
        this.subscription=this._items.subscribe(data => {
                this.itemsValue = data;
                // inputs fieldID and fieldName inited  
                this.setModel(this.itemsValue);
          
        });       

        // inputs fieldID and fieldName inited  
        this.setModel(val);  
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
        this.setModel(this.itemsValue);
     
    }
    

    setModel(items) {
        //condition comes to check that items ,fieldname and fieldid has already data
        if(this.afterInit)
        {  //model type to return: object/id/string
            if (items && this.itemsValue.length > 0 ) {
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
            if (this.itemsValue && this.itemsValue.length > 0 && this.isIdModel) {
                //find the object in the list and select the id
                if (!this.multiple) {
                    let currentFieldID = this.fieldID;
                    let elementPos = this.itemsValue
                        .map(function (x) {
                            return x[currentFieldID];
                        })
                        .indexOf(value);
                    let selectedItem = elementPos >= 0 ? this.itemsValue[elementPos] : value;
                    this._innerValue = selectedItem;
                } else {
                    let selectedItems = [];
                    value.forEach(item => {
                        let currentFieldID = this.fieldID;
                        let elementPos = this.itemsValue
                            .map(function (x) {
                                return x[currentFieldID];
                            })
                            .indexOf(item);
                        if (elementPos >= 0) {
                            selectedItems.push(this.itemsValue[elementPos]);
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
        super.ngAfterContentInit();
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
