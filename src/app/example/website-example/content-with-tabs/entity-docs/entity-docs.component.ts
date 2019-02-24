import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MojTabsService } from '../../../../moj-ng/elements/tabs/services/moj-tabs.service';
import { MojTab } from '../../../../moj-ng/elements/tabs/models/moj-tabs.models';

@Component({
  selector: 'app-entity-docs',
  template: `
    <p>
      entity-docs works!
    </p>
  `
})
export class EntityDocsComponent {
  tab: MojTab;

  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initTab();
  }

  initTab() {
      this.tab = new MojTab("/website-example/entity/entity-layout/entityDocs", this.translate.get("Menu.docs"));
    this.tab.appMainTab = true;
    this.tab.removable = false;
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

}
