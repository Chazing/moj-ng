import { Component, Input, OnInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { MojTabsService } from '../../services/moj-tabs.service';
import { MojTab } from '../../models/moj-tabs.models';

@Component({
  selector: 'moj-url-tabs',
    templateUrl: './moj-url-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojUrlTabsComponent implements OnInit {
  @Input() colorizable: boolean;
  @Input() limit: number = 7;

  constructor(public mojTabsService: MojTabsService) { }

  ngOnInit() {
    this.mojTabsService.limit = this.limit;
  }

  onMousedown(tab: MojTab, e) {
    //middle button click
    if (e.which == 2 && tab.removable) {
      this.mojTabsService.onCloseTabClick(tab);
    }
  }

  onTabClick(tab: MojTab, e) {
    if (!e.target.className.includes("moj-tab-close"))
      this.mojTabsService.onTabClick(tab);
  }

}
