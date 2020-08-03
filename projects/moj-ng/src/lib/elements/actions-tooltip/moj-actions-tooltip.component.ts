import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TooltipAction } from './action.model';

/**
 * example
 * ```html
 * <actions-tooltip [headerText]="actionsTitle$ | async" [actionList]="actionList" (onClick)="doAction($event)">
    </actions-tooltip>
 * ```
 *<example-url>../screenshots/actions-tooltip.JPG</example-url>
 */
@Component({
    selector: 'moj-actions-tooltip',
    templateUrl: './moj-actions-tooltip.component.html',
    styleUrls: ['./moj-actions-tooltip.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class MojActionsTooltipComponent {
    @Input() headerText: string;
    @Input() actionList: TooltipAction[];
    @Output() onClick = new EventEmitter<Number>();
    isHovered = false;
    ngOnInit(): void {
    }
    onActionClick(actionId: number) {
        this.onClick.emit(actionId);
    }
    getActionImageUrl(action: TooltipAction){
        let imageUrl = action.isDisabled? action.imgUrlDisabled:
        action.isHovered? action.imgUrlOnHover:
        action.imgUrl;

        return imageUrl;
    }
}