import {
    Component,
    ElementRef,
    EventEmitter,
    Injector,
    Input,
    Output,
    OnInit,
    ViewEncapsulation,
    ViewChild,
    AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ElementBase } from "../base/element.base";
import { LabelAlign } from "../label/label.enum";
import { isInternetExplorer, isEdge } from "../../scripts/browser-supported";
import { PermissionService } from "../../permissions/permission.service";

/**
 * ```html
 * <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="1" name="radioOptions" [labelTextKey]="'Texts.option1'"></moj-radiobutton>
   <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="2" name="radioOptions" [labelTextKey]="'Texts.option2'"></moj-radiobutton>
 * ```
 * If action is required after changing the radio checked
 * ```html
 * (checkedChange)="onRadioChanged($event)
 * ```
 * ```typescript
 * onRadioChanged(value) {
    if (value == 1) {
    }
  }
 * ```
 */
@Component({
    selector: "moj-radiobutton",
    templateUrl: "moj-radiobutton.component.html",
    styleUrls: ["./moj-radiobutton.component.scss"],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MojRadiobuttonComponent,
            multi: true
        }
    ]
})
export class MojRadiobuttonComponent extends ElementBase<number>
    implements OnInit, AfterViewInit {
    @ViewChild('radioButtonElement', { static: true }) radioButtonElement: ElementRef;
    @Output() checkedChange = new EventEmitter();
    @Input() radiovalue;
    @Input() name: string;
    @Input() setFocus: boolean = false;
    labelAlignEnum = LabelAlign;

    constructor(
        el: ElementRef,
        _injector: Injector,
        protected translateService: TranslateService, permissionService: PermissionService
    ) {
        super(el, _injector, permissionService);
    }

    onCheckedChange(event: any) {
        this.checkedChange.emit(this.radiovalue);
    }

    ngOnInit() {
        super.ngOnInit();
        this.identifier = this.identifier + "_" + this.radiovalue;
    }
    ngAfterViewInit() {
        if (this.setFocus)
            setTimeout(() => {
                this.radioButtonElement.nativeElement.focus();
            }, 200)

    }
}
