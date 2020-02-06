import { Component, OnInit } from '@angular/core';
import { MojTab, MojTabsService, ButtonStyle, MojSideMenuItem } from '../../../../moj-ng';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main-tab3',
    template: `
    <p>
      <moj-button
        buttonStyle="{{ buttonStyle.Attention }}"
        [textKey]="'פתח חלון לאישור'"
        [tooltip]="'sdfsdfsdfsdf sdf sdf '"
      ></moj-button>
    </p>
    <label>{{ id }}</label>
    <router-outlet></router-outlet>
  `
})
export class MainTab3Component implements OnInit {
    tab: MojTab;
    buttonStyle = ButtonStyle;
    id;
    constructor(private mojTabsService: MojTabsService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        this.initMainTab();
    }

    initMainTab() {
        this.tab = new MojTab(`/bo-example/root/tab3`, of('טאב 3'));
        this.tab = this.mojTabsService.addOrGetTab(this.tab, null, this.closeTab);
    }

    ngOnInit() { }

    ngOnDestroy(): void {
    }

    closeTab(t: MojTab) {
        console.log("tab3 closed");
    }
}
