import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MojTab, MojTabsService } from '@moj/moj-ng';

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
