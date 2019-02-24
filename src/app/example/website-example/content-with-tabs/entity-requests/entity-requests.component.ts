import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MojTabsService } from '../../../../moj-ng/elements/tabs/services/moj-tabs.service';
import { MojTab } from '../../../../moj-ng/elements/tabs/models/moj-tabs.models';

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
