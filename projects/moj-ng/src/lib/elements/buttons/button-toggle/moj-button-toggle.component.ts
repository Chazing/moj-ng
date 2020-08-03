import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, ElementRef, Injector, ViewEncapsulation } from "@angular/core";
import { ButtonToggleItem } from "./button-toggle.model";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ButtonToggleStyle } from "../button-style";
import { PermissionService } from "../../../permissions/permission.service";
import { ElementBase } from "../../base/element.base";

/**
  * Usage example
  ```html
  <moj-button-toggle
        [items]="buttonToggleItems"
        (onChange)="onToggleChange($event)"
        [(ngModel)]="toggleValue">
  </moj-button-toggle> 
  ```
  ```typescript
  import { ButtonToggleItem } from '../../moj-ng/elements/buttons/button-toggle/button-toggle.model';
  ...
  export class ButtonsToggleExampleComponent {
    buttonToggleItems:ButtonToggleItem[] = [
        {id:1, text:'Bold'},
        {id:2, text:'Italic', },
        {id:3, text:'Underline'},
        {id:4, iconClass:'fas fa-plus'}
    ]

    toggleValue:number;

    onToggleChange(value){
        alert(value);
    }
  }
  ```
 */

@Component({
    selector: 'moj-button-toggle',
    templateUrl: 'moj-button-toggle.component.html',
    styleUrls: ['moj-button-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MojButtonToggleComponent,
            multi: true
        }
    ]
})
export class MojButtonToggleComponent extends ElementBase<number[]> implements OnInit {
    @Input() items: ButtonToggleItem[];
    @Input() buttonCssClasses: string = '';
    @Input() isObjectModel: boolean = false;
    @Input() multiple: boolean = false;
    @Input() clearItemSelectOnReClick: boolean = true;
    @Input() buttonToggleStyle: ButtonToggleStyle = ButtonToggleStyle.Default;
    @Input() buttonCols: number = 3;
    @Output() onChange = new EventEmitter();

    buttonToggleStyleEnum = ButtonToggleStyle;
    public style: object = {};

    constructor(protected el: ElementRef, protected _injector: Injector, protected permissionService: PermissionService, private cdr: ChangeDetectorRef) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        if (this.items == null) return;
        super.ngOnInit();
        this.items.forEach((element, i) => {
            if (element.id) {
                let permissionResult = this.permissionService.getControllerPermission(element.id.toString());
                this.items[i].disabled = this.items[i].disabled ? this.items[i].disabled : !permissionResult.enable ;
                this.items[i].visible = permissionResult.visible;
            }
        })
        if (this.buttonToggleStyle == ButtonToggleStyle.List) {
            this.style = {
                "grid-template-columns": `repeat(${this.buttonCols}, 1fr)`,
            };
        }
        else if (this.buttonToggleStyle == ButtonToggleStyle.Default) {
            this.style = {
                "grid-template-columns": `repeat(${this.items.length}, 1fr)`,
            };
        }
    }

    onClick(item) {
        if (this.multiple) {
            let itemIndex = this.findItemIndex(item);
            if (itemIndex != -1)
                this.value = this.value.filter((val, i) => i != itemIndex);
            else
                this.value = [...this.value || [], this.isObjectModel ? item : item.id];
        }
        else {
            if (this.isObjectModel) {
                if (this.value == item && this.clearItemSelectOnReClick)
                    this.value = null;
                else
                    this.value = item;//value of valueAccessor ( Affect ng classes: dirty, touched...)
            }
            else {
                if (this.value == item.id && this.clearItemSelectOnReClick)
                    this.value = null;
                else
                    this.value = item.id;//value of valueAccessor ( Affect ng classes: dirty, touched...)
            }
        }
        this.onChange.emit(this.value);
    }

    isSelected(item) {
        if (this.multiple)
            return this.findItemIndex(item) != -1;
        else
            if (this.value != null && typeof (this.value) != undefined) {
                return item.id == (this.isObjectModel ? this.value.id : this.value);
            }
    }

    findItemIndex(item: ButtonToggleItem) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if ((this.isObjectModel ? this.value[i].id : this.value[i]) == item.id) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}