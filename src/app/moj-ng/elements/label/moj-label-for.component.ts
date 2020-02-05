import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit, forwardRef, ElementRef, Injector } from '@angular/core';
import { LabelStyle, LabelAlign } from './label.enum';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../base/element.base';
import { PermissionService } from '../../permissions/permission.service';
import { FontSize, FontWeight, MojColor } from './moj-dynamic-label.component';

/**
 ```html
 <moj-label-for  [labelTextKey]="'dfsdfsdf'" [(ngModel)]="formModel.textField"
                name="textField"></moj-label-for> 
```
 */
@Component({
    selector: 'moj-label-for',
    template: `<div class="moj-input-container {{controlColWidth}}"><label  class="label-for {{labelClass}}" [attr.for]="identifier">{{getLabelText}}</label>
               <div class="content-label-for {{contentLabelClass}}" id="{{identifier}}">{{value}}</div></div>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojLabelForComponent),
        multi: true
    }, { provide: ElementBase, useExisting: forwardRef(() => MojLabelForComponent) }],
    styleUrls: ["moj-label-for.component.scss"]
})
export class MojLabelForComponent extends ElementBase<string> implements OnInit {
    // @Input() contentLabelStyle: LabelStyle = LabelStyle.Bold;
    @Input() contentFontSize: FontSize = FontSize.font16;
    @Input() contentFontWeight: FontWeight = FontWeight.bold;
    @Input() contentColor: MojColor = MojColor.Default;

    // @Input() labelStyle: LabelStyle = LabelStyle.Standard;
    @Input() fontSize: FontSize = FontSize.font16;
    @Input() fontWeight: FontWeight = FontWeight.normal;
    @Input() color: MojColor = MojColor.Default;

    contentLabelClass;
    labelClass;

    ngOnInit() {
        super.ngOnInit();
        this.contentLabelClass = `${this.contentFontSize} ${this.contentFontWeight} ${this.contentColor}`;
        this.controlColWidth = this.controlWidthColumns ? this.controlColWidth : 'auto-width';
        this.labelClass = `${this.fontSize} ${this.fontWeight} ${this.color}`;
    }

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService, private translateService: TranslateService) {
        super(el, _injector, permissionService);
    }

    get getLabelText(): string {
        if (this.labelTextKey || this.identifier) {
            let res = this.translateService.instant(this.labelTextKey ? this.labelTextKey : "Texts." + this.identifier);
            return (res.indexOf("Texts.") == 0 ? res.substr(6) : res) + ':';
        }
        return '';
    }
}