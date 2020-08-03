import { Component, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { MojListItemType } from "./moj-list-view-type.enum";
import { InternalGridService } from '../service/internal-grid.service';
import { Subscription } from 'rxjs';

/**
  * Usage example
   ```html
  <ng-template let-item pTemplate="listItem">
       <moj-list-item [listItemType]="Enums.ListItemType.Details" [multiSelect]="true" (onSelect)="selectItem($event, item)">
       </moj-list-item>
  </ng-template>
   ```
   
   ```typescript
   selectItem(selected: boolean, item) {
        console.log(selected);
        console.log(item);
    }
   ```
 */
@Component({
    selector: "moj-list-item",
    templateUrl: "./moj-list-item.component.html",
    styleUrls: ["./moj-list-item.component.scss"]
})
export class MojListItemComponent {
    selected: boolean = false;
    selectedFromThis = false;
    subscription: Subscription;

    @Input() multiSelect: boolean = false;

    @Input()
    listItemType: MojListItemType = MojListItemType.Panel;

    @Input()
    cols: number = 1;

    @Output()
    onSelect: EventEmitter<boolean> = new EventEmitter();

    ngOnInit() {
        this.el.nativeElement.parentElement.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
        this.subscription = this._internalService.gridActions.selectChange$.subscribe(data => {
            this.selected = this.selectedFromThis;
            if (!this.multiSelect)
                this.selectedFromThis = false;
            if (!(<any>this._cdr).destroyed) {
                this._cdr.detectChanges();
            }
        });
    }

    select() {
        if (this.multiSelect)
            this.selectedFromThis = !this.selectedFromThis;
        else
            this.selectedFromThis = true;
        this.onSelect.emit(this.selectedFromThis);
        this._internalService.selectRow();
    }

    constructor(private el: ElementRef, private _internalService: InternalGridService, private _cdr: ChangeDetectorRef) {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}