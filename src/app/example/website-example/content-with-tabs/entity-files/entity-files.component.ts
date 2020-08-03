import { Component, OnInit, ComponentRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TabView } from 'primeng/primeng';
import { MojTab, MojTabsService } from '@moj/moj-ng';

@Component({
  selector: 'app-entity-files',
  template: `
    <p>
      entity-files works!
    </p>
    <input type='text' />
  `
})
export class EntityFilesComponent {
  tab: MojTab;
  data: any;

  constructor(private translate: TranslateService, 
    private mojTabsService: MojTabsService, private tabView:TabView) {
    // this.initTab();
  }

  ngOnInit() {
    console.log(this.data);
  }

  initTab() {
      this.tab = new MojTab("/website-example/entity/entity-layout/entityFiles", this.translate.get("Menu.files"));
    this.tab.appMainTab = true;
    this.tab.removable = false;
    this.tab.selected = true;
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

}
