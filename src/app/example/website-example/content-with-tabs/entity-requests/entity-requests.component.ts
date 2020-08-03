import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MojTab, MojTabsService } from '@moj/moj-ng';

@Component({
  selector: 'app-entity-requests',
  template: `
    <p>
      entity-requests works!
    </p>
  `
})
export class EntityRequestsComponent {

  tab: MojTab;

  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initTab();
  }

  initTab() {
      this.tab = new MojTab("/website-example/entity/entity-layout/entityRequests", this.translate.get("Menu.requests"));
    this.tab.appMainTab = true;
    this.tab.removable = false;
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }


}
