import {
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Injector,
    Optional
} from "@angular/core";
import { NgControl, ControlContainer, AbstractControl, FormControl, NgModel } from "@angular/forms";
import { ValueAccessorBase } from "./value-accessor.base";
import { LabelAlign, LabelStyle } from "../label/label.enum";
import { BehaviorSubject, Subscription, Observable } from "rxjs";
import { ElementSize } from "./element-size.enum";
import { PermissionService } from "../../permissions/permission.service";
import { PermissionType } from "../../permissions/permission.enum";
import { MojUtilsService } from "../../shared/utils";

export abstract class ElementBase<T> extends ValueAccessorBase
    implements OnInit, OnDestroy {

    @Input() controlWidthColumns: number;
    @Input() disabled: boolean;
    @Input() readOnly: boolean;
    @Input() labelTextKey: string;
    @Input() customValidationErrors: any[] = [];
    @Input() formControlName: string;
    @Input() name: string;
    @Input() submitted: boolean = false;
    @Input() size: ElementSize = ElementSize.medium;
    @Input() visible: boolean;
    @Input() helpText: string;
    get tabIndex(): number {
        return this.disabled ? -1 : 0;
    }
    set tabIndex(newIndex: number) {
        this.tabIndex = newIndex;
    }
    public identifier: string;
    control;
    controlContainer: ControlContainer;
    @Output() focus = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Output() keyup = new EventEmitter();

    controlColWidth: string;

    isControlRequired: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isControlRequired$: Observable<boolean> = this.isControlRequired.asObservable();
    private subscription: Subscription;
    filled: boolean;
    private utilsService: MojUtilsService;
    isMobile: boolean;

    getControlColWidth() {
        return "col-sm-" + this.controlWidthColumns;
    }

    get showValidationMsg() {
        let isShowValidationMsg = this.control && this.control.invalid && (this.control.touched || this.control.submitted);
        this.setaria_invalid(isShowValidationMsg);
        return isShowValidationMsg;
    }

    constructor(protected el: ElementRef, protected _injector: Injector, protected permissionService: PermissionService) {
        super();
        this.utilsService = this._injector.get(MojUtilsService);
        this.isMobile = this.utilsService.isMobile();
    }

    ngDoCheck() {
        this.updateFilledState();
    }

    setPermissions() {
        var result = this.permissionService.getControllerPermission(this.identifier)

        if (this.disabled != undefined && !this.disabled || this.disabled == undefined) {
            this.disabled = !result.enable;
        }
        if (this.visible != undefined && this.visible || this.visible == undefined) {
            this.visible = result.visible;
        }
    }

    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.value && !Array.isArray(this.value)) || (Array.isArray(this.value) && this.value.length > 0);
    }

    setaria_invalid(isShowValidationMsg) {
        let input;
        switch (this.el.nativeElement.nodeName) {
            case "MOJ-TEXTBOX":
            case "MOJ-DATEPICKER":
            case "MOJ-CHECKBOX":
            case "MOJ-RADIOBUTTON":
            case "MOJ-MULTISELECT":
            case "MOJ-AUTOCOMPLETE":
                input = this.el.nativeElement.querySelector('input');
                break;
            case "MOJ-DROPDOWNLIST":
                input = this.el.nativeElement.querySelector('input.ui-dropdown-label'); //editable need input.ui-dropdown-label, not editable - the hidden input
                if (!input) {
                    input = this.el.nativeElement.querySelector('input');
                }
                break;
            case "MOJ-TEXTAREA":
                input = this.el.nativeElement.querySelector('textarea');
                break;
        }

        if (input) {
            input.setAttribute('aria-invalid', isShowValidationMsg);
        }
    }
    ngOnInit() {
        this.setControl();
        this.setIdentifier();
        this.setPermissions();
        this.controlColWidth = this.getControlColWidth();
        this.isControlRequired.next(this.getIsControlRequired());
        //check if require indication (*) need to change when control status checked
        if (this.control)
            this.subscription = this.control.statusChanges.subscribe(res => {
                this.isControlRequired.next(this.getIsControlRequired());
            });
    }

    ngAfterViewInit() {
        this.setAriaDescribedby(); //accessibility - for read messages tooltip
    }

    //TODO:ask if the change is not wrong
    private setIdentifier() {
        if (this.identifier == undefined || this.identifier == null || this.identifier == "") {
            if (this.formControlName) {
                this.identifier = this.formControlName;
            }
            else {
                this.identifier = this.name;
            }
        }

    }

    protected setControl() {
        //for reactive forms
        if (this.formControlName) {
            if (!this.controlContainer) {
                this.controlContainer = this._injector.get(ControlContainer);
            }
            this.control = this.controlContainer.control.get(this.formControlName);
            //for conditional validations (like greaterThen)
            this.control.valueAccessor = this;
        }
        else {
            //for template driven forms
            try {
                this.control = this._injector.get(NgControl).control;
            } catch (error) {

            }
        }
    }

    onFocusIn($event?: any) {
        this.focus.emit(event);
    }

    onBlur($event?: any) {
        this.blur.emit(event);
    }

    onKeyUp($event?: any) {
        this.keyup.emit(event);
    }

    getIsControlRequired() {
        if (!this.control || this.control.validator == null) return false;
        let validator = this.control.validator("required");
        return validator != null && validator.required;
    }

    setAriaDescribedby() {
        //set input aria-described by to error messages span
        let input;
        switch (this.el.nativeElement.nodeName) {
            case "MOJ-TEXTBOX":
            case "MOJ-DATEPICKER":
            case "MOJ-CHECKBOX":
            case "MOJ-RADIOBUTTON":
            case "MOJ-MULTISELECT":
            case "MOJ-AUTOCOMPLETE":
                input = this.el.nativeElement.querySelector('input');
                break;
            case "MOJ-DROPDOWNLIST":
                input = this.el.nativeElement.querySelector('input.ui-dropdown-label'); //editable need input.ui-dropdown-label, not editable - the hidden input
                if (!input) {
                    input = this.el.nativeElement.querySelector('input');
                }
                break;
            case "MOJ-TEXTAREA":
                input = this.el.nativeElement.querySelector('textarea');
                break;
        }

        if (input) {
            input.setAttribute('aria-describedby', this.identifier + '-error');
        }
    }

    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
