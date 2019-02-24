import { Component, Input, OnInit } from '@angular/core';
import { MojTabsService } from '../../services/moj-tabs.service';
import { MojTab } from '../../models/moj-tabs.models';

@Component({
  selector: 'moj-tabs',
  templateUrl: './moj-tabs.component.html',
  styleUrls: ['./moj-tabs.component.css']
})
export class MojTabsComponent implements OnInit {
  @Input() colorizable: boolean;
  @Input() limit: number = 7;

  constructor(public mojTabsService: MojTabsService) { }

  ngOnInit() {
    this.mojTabsService.limit = this.limit;
  }

  onMousedown(tab: MojTab, e) {
    //middle button click
    if (e.which == 2) {
      this.mojTabsService.onCloseTabClick(tab)
    }
  }
}
