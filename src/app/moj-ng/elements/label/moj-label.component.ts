import { Component, Input, OnInit, ElementRef, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ElementBase } from '../base/element.base';
import { LabelStyle, LabelAlign } from './label.enum';
import { LabelBase } from './label-base';

@Component({
    selector: 'moj-label',
    template: `<div *ngIf="widthColumns > 0 || isAutoWidth" class="{{labelDivStyles}}" [ngStyle]="styleClass">
                    <span [style.width]="isAutoWidth ? 'auto' : ''">{{ getLabelText}}</span>
                    <span class="star" *ngIf="isRequiredIndication">*</span>
               </div>`,
})
export class MojLabelComponent extends LabelBase implements OnInit {

    labelDivStyles: string

    ngOnInit(): void {
        this.labelDivStyles = this.labelStyle + (this.isAutoWidth ? " col auto-width " : ' col-sm-' + this.widthColumns) + (this.labelAlign == LabelAlign.Left ? ' left-to-right' : '');
    }

    constructor(protected translateService: TranslateService) {
        super(translateService);
    }
}