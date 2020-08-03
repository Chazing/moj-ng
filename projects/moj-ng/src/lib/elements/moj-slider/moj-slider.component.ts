import { Component, OnInit, ElementRef, Injector, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ElementBase } from '../base/element.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PermissionService } from '../../permissions/permission.service';

/**
 * ```html
 * <moj-slider [controlWidthColumns]="2" [(ngModel)]="sliderValue" [isRange]=true [showValueLabel]=true name="sliderValue"></moj-slider>
 * ```
 */
@Component({
    selector: 'moj-slider',
    templateUrl: './moj-slider.component.html',
    styleUrls: ['./moj-slider.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MojSliderComponent,
            multi: true
        }
    ]
})
export class MojSliderComponent extends ElementBase<any> implements OnInit {
    @Input() minValue: number = 0;
    @Input() maxValue: number = 100;
    @Input() disabled: boolean = false;
    @Input() isRange: boolean = false;
    @Input() step: number = 1;
    @Input() orientation: string = 'horizontal';
    @Input() showValueLabel: boolean = false;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    constructor(el: ElementRef, _injector: Injector, private translateService: TranslateService, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    get labelText(): string {
        var text: string = '';
        if (!this.isRange) return this.value;
        if (this.value) {
            text = `${this.translateService.instant('MojTexts.from')} ${this.value[0]} ${this.translateService.instant(
                'MojTexts.to'
            )} ${this.value[1]}`;
        }
        return text;
    }

    change(event) {
        this.onChange.emit(event);
    }
}
