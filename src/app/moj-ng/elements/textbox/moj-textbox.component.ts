import {
    Component,
    ElementRef,
    forwardRef,
    Injector,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";
import { ElementBase } from "../base/element.base";
import { TextMaskConfig } from "angular2-text-mask";
import { PermissionService } from "../../permissions/permission.service";

/**
  * Usage example
  * ```html
  * <moj-textbox [(ngModel)]="formModel.title1" name="title1" minlength="3"
            controlWidthColumns="2" labelTextKey="Texts.textField">
  *</moj-textbox>
  * ```
  * <example-url>../screenshots/textbox.JPG</example-url>
 */
@Component({
    selector: "moj-textbox",
    templateUrl: "moj-textbox.component.html",
    styleUrls: ['moj-textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MojTextboxComponent),
            multi: true
        },
        { provide: ElementBase, useExisting: forwardRef(() => MojTextboxComponent) }
    ],
    encapsulation: ViewEncapsulation.None
})
export class MojTextboxComponent extends ElementBase<string>{
    @Input() inputType: string = "";
    @Input() maxlength: number;
    @Input() max: number;
    @Input() min: number;
    @Input() pattern: string = "";
    @Input() mask: TextMaskConfig
    @Input() autocomplete: string;
    @Input() addIcon: boolean = false;
    @Input() iconClass: string = 'fas fa-search';
    @Input() placeholder: string = "";

    //   @Input() size: 
    @Output() onChange = new EventEmitter();
    @Output() iconClicked = new EventEmitter();

    isBlured: boolean = false;
    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
        this.mask = {
            mask: false
        };
    }

    get showValidationMsg() {
        return this.control.invalid && ((this.control.touched && this.isBlured) || this.control.submitted);
    }

    onFocusIn($event?: any) {
        $event.target.select();
        super.onFocusIn($event);
    }

    onchange(value) {
        this.isBlured = true;
        this.onChange.emit(value);
    }

    iconClick() {
        this.iconClicked.emit();
    }
}
