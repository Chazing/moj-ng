import { Component, OnInit } from '@angular/core';
import { MojTab, MojTabsService, MojSideMenuItem } from '../../../../moj-ng';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-tab8',
  template: `
    <p>
      <input type="text" />
    </p>
  `
})
export class MainTab8Component implements OnInit {
  tab: MojTab;

  constructor(private mojTabsService: MojTabsService, private route: ActivatedRoute) {
    this.initMainTab();
  }

  initMainTab() {
    this.route.paramMap.subscribe(param=>{
        var id = +param.get("id");
        this.tab = new MojTab('/bo-example/root/tab8/' + id, of('טאב 8' + ' ' + id));
        let sideMenuItems: MojSideMenuItem[] = [
            { url: 'sub1', title$: of('טאב משני 1') },
            { url: 'sub2', title$: of('טאב משני 2') },
            { url: 'sub3', title$: of('טאב משני 3') }
            ];
        this.tab.sideMenuItems = sideMenuItems;
        this.tab = this.mojTabsService.addOrGetTab(this.tab);
    })
  }

  ngOnInit() {}
}
