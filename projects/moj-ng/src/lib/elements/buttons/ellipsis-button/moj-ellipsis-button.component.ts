import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { MenuItem, Menu } from 'primeng/primeng';

@Component({
    selector: 'moj-ellipsis-button',
    templateUrl: 'moj-ellipsis-button.component.html',
    styleUrls: ['moj-ellipsis-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class MojEllipsisButtonComponent{
    @Input() items:MenuItem[];
    @Input() data:any; //data to pass to menuitem

    openMenu(menu, event) {
        this.items.forEach((menuItem) => {
          (<any>menuItem).data = this.data;
        });
        menu.toggle(event);
      }
}