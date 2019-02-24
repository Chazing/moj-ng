import { Component, Input, OnInit, forwardRef, ElementRef, Injector } from '@angular/core';
import { LabelStyle, LabelAlign } from './label.enum';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBase } from '../base/element.base';

/**
 ```html
 <moj-label-for [labelWidthColumns]="1" [contentWidthColumns]=1 [labelTextKey]="'dfsdfsdf'" [(ngModel)]="formModel.textField"
                name="textField"></moj-label-for> 
```
 */
@Component({
    selector: 'moj-label-for',
    template: `<label-before-content [forId]="identifier" [isRequiredIndication]="isControlRequired$ | async" [textKey]="labelTextKey" [widthColumns]="labelWidthColumns" [isLabelAboveControl]="isLabelAboveControl" [isAutoWidth]="isLabelAutowidth"></label-before-content>
               <div class="padding-right-0 {{contentLabelclass}}" id="{{identifier}}">{{value}}</div>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MojLabelForComponent),
        multi: true
    }],
    styles:[".padding-right-0{padding-right: 0px;}"]
})
export class MojLabelForComponent extends ElementBase<string> implements OnInit {
    @Input() isContentLabelAutoWidth: boolean = false;
    @Input() contentWidthColumns: number;
    @Input() contentLabelStyle: LabelStyle = LabelStyle.Bold;
    @Input() contentLlabelAlign: LabelAlign = LabelAlign.Right;

    contentLabelclass;

    ngOnInit() {
        super.ngOnInit();
        this.contentLabelclass = this.contentLabelStyle + ' ' + (this.isContentLabelAutoWidth ? 'col auto-width' : 'col-sm-' + this.contentWidthColumns) + (this.contentLlabelAlign == LabelAlign.Left ? ' left-to-right' : '');
    }

    constructor(el: ElementRef, _injector: Injector) {
        super(el, _injector);
    }
}