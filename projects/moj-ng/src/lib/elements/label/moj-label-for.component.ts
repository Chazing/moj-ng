import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit, forwardRef, ElementRef, Injector, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../base/element.base';
import { PermissionService } from '../../permissions/permission.service';
import { FontSize, FontWeight, MojColor } from '../general/general.enum';
import { LabelAlign } from './label.enum';


/**
 ```html
 <moj-label-for  [labelTextKey]="'dfsdfsdf'" [(ngModel)]="formModel.textField"
                name="textField"></moj-label-for> 
```
 */
@Component({
    selector: 'moj-label-for',
    template: `
                    <label  class="{{labelColWidth}} label-for moj-ellipsis {{labelClass}}" [attr.for]="identifier">{{getLabelText}}</label>
                    <div [ngClass]="{'text-rtl': setDirByLang && isHebrew,'text-ltr': setDirByLang && !isHebrew}" class="{{controlColWidth}} content-label-for moj-ellipsis {{contentLabelClass}}" id="{{identifier}}" [attr.data-tooltip]="tooltip | translate" [attr.title]="value">{{value}}</div>
                `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojLabelForComponent),
        multi: true
    }, { provide: ElementBase, useExisting: forwardRef(() => MojLabelForComponent) }],
    styleUrls: ["./moj-label-for.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class MojLabelForComponent extends ElementBase<string> implements OnInit {
    @Input() contentFontSize: FontSize = FontSize.font16;
    @Input() contentFontWeight: FontWeight = FontWeight.bold;
    @Input() contentColor: MojColor = MojColor.Default;
    @Input() setDirByLang: boolean;

    @Input() labelWidthColumns: number;
    private _labelAlign: LabelAlign = LabelAlign.Left;

    writeValue(value) {
        super.writeValue(value);
        if (this.setDirByLang)
            this.checkIfHebrewContent();
    }

    get labelAlign() {
        return this._labelAlign;
    }
    @Input() set labelAlign(val: LabelAlign) {
        this._labelAlign = val;
        this.labelClass = `${this.fontSize} ${this.fontWeight} ${this.color} ${this.labelAlign}`;
    }

    private _contentLabelAlign: LabelAlign = LabelAlign.Right;
    get contentLabelAlign() {
        return this._contentLabelAlign;
    }

    @Input() set contentLabelAlign(val: LabelAlign) {
        this._contentLabelAlign = val;
        this.setContentLabelClasses();
    }

    @Input() fontSize: FontSize = FontSize.font16;
    @Input() fontWeight: FontWeight = FontWeight.normal;
    @Input() color: MojColor = MojColor.Default;
    @Input() tooltip: string;
    contentLabelClass;
    labelClass;
    labelColWidth;
    isHebrew;

    ngOnInit() {
        super.ngOnInit();
        this.controlColWidth = this.controlWidthColumns ? this.controlColWidth : 'auto-width';
        this.labelColWidth = this.labelWidthColumns ? this.getColWidth(this.labelWidthColumns) : 'auto-width';
        this.setContentLabelClasses();
    }

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService, private translateService: TranslateService, private cdr: ChangeDetectorRef) {
        super(el, _injector, permissionService);
    }

    private setContentLabelClasses() {
        this.contentLabelClass = `${this.contentFontSize} ${this.contentFontWeight} ${this.contentColor} ${this.contentLabelAlign}`;
    }

    get getLabelText(): string {
        if (this.labelTextKey || this.identifier) {
            let res = this.translateService.instant(this.labelTextKey ? this.labelTextKey : "Texts." + this.identifier);
            return (res.indexOf("Texts.") == 0 ? res.substr(6) : res) + ':';
        }
        return '';
    }

    checkIfHebrewContent() {
        this.isHebrew = this.value && (this.value.match(/[\u0590-\u05FF]/) || this.value.match(/[\u0600-\u06FF\u0750-\u077F]/));
    }
}
