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
    @Input() dir: string;
    @Input() pattern: string = "";
    @Input() mask: TextMaskConfig
    @Input() autocomplete: string;
    @Input() addIcon: boolean = false;
    @Input() iconClass: string = 'fas fa-search';
    @Input() placeholder: string = "";
    @Input() showLeftMessage: boolean = true;

    //   @Input() size: 
    @Output() onChange = new EventEmitter();
    @Output() iconClicked = new EventEmitter();

    isBlured: boolean = false;

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
        this.mask = {
            mask: false
        };
        this.showValidationOnBlur = true;
    }

    ngOnInit() {
        super.ngOnInit()
    }

    onFocusIn($event?: any) {
        $event.target.select();
        super.onFocusIn($event);
    }

    onchange(value) {
        this.onChange.emit(value);
    }

    onPaste(e: ClipboardEvent) {
        super.onInputPaste(e, this.maxlength);
    }

    onKeyUp($event?: any) {
        let maxlength = null;
        maxlength = this.maxlength != undefined && this.maxlength != null ? this.maxlength : this.el.nativeElement.getAttribute("maxLength");
        if (maxlength && this.value!=null && this.value!=undefined) {
            this.leftText = this.value.length + "/" + maxlength;
        }
        super.onKeyUp();
    }

    iconClick() {
        this.iconClicked.emit();
    }

    getFilledState(): boolean {
        return super.getFilledState() ||
            (this.el.nativeElement.getElementsByTagName('input').length && this.el.nativeElement.getElementsByTagName('input')[0].value.length > 0);
    }
}
