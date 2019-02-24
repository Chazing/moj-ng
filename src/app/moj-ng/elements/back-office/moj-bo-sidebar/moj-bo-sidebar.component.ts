import { Component, OnInit, Input, EventEmitter, Output, Type } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'moj-bo-sidebar',
  templateUrl: './moj-bo-sidebar.component.html',
  styleUrls: ['./moj-bo-sidebar.component.css'],
})
export class MojBoSidebarComponent implements OnInit {
  @Input() sideBarItems: SideBarItem[];
  @Input() activeIndex: number = 0;
  @Output() itemChange: EventEmitter<number> = new EventEmitter<number>();
  activeItem: SideBarItem;

  constructor() { }

  ngOnInit() {
    if (this.sideBarItems && this.sideBarItems.length > this.activeIndex) {
      this.activeItem = this.sideBarItems[this.activeIndex];
      this.onItemChange();
    }
  }

  itemClick(event, item: SideBarItem) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (!item.url) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    this.activeIndex = this.sideBarItems.indexOf(item);
    this.activeItem = item;
    this.onItemChange();
  }
  private onItemChange() {
    if (this.itemChange) {
      this.itemChange.emit(this.activeIndex);
    }


  }

}
export interface SideBarItem {
  label?: string;
  icon?: string;
  color?: string;
  imgUrl?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  component?: Type<any>;
  componentData?: any;
  disabled?: boolean;
  visible?: boolean;
  id?: string;
}

