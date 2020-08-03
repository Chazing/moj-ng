import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MojTab, MojTabsService } from '@moj/moj-ng';

@Component({
  selector: 'app-main-tab7',
  template: `
    <p>
      main-tab3 works!
    </p>
  `
})
export class MainTab7Component implements OnInit {

  tab: MojTab;
  
  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initMainTab();
  }

  initMainTab() {
    this.tab = new MojTab("/bo-example/root/tab7", of('טאב 7'));
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  ngOnInit() {
  }

}
