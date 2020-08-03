import { Component } from '@angular/core';
import { TranslateService } from '../../../../../node_modules/@ngx-translate/core';
import { of, Subscription } from 'rxjs';
import { MenuItem } from 'primeng/primeng';
import { MojTab, eEnvType, BOHeaderMenuItem, MojTabsService, NavigationService } from '@moj/moj-ng';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './bo-example.component.html'
})
export class BOExampleComponent {
  tab: MojTab;
  barItems: MenuItem[] = [
    { label: "טופס", icon: "fas fa-home", routerLink: "/bo-example/root/tab9"  },
    { label: "tab2", icon: "fas fa-map-marker-alt", routerLink: "/bo-example/root/tab2" },
    { label: "tab2 second", icon: "fas fa-map-marker-alt", routerLink: "/bo-example/root/tab2/hello-tab2-second" },
    { label: "tab3", icon: "far fa-sunset", routerLink: "/bo-example/root/tab3" },
    { label: "tab3 more parameter", icon: "far fa-sunset", routerLink: "/bo-example/root/tab3" },
    { label: "tab4", icon: "far fa-sunset", routerLink: "/bo-example/root/tab4", },
    { label: "tab5", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5",
    items:[
      { label: "tab5 עכעיכיכע יכטאכוטכ וטכוטכוט ויכוכ", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5" 
      ,items:[{ label: "tab5יחיעוןעןיע ועןועןוע וטכעוטכוט יועןו חיעעיחעיחעיח", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5" }]},
      { label: "tab5 יחעויע חיןלן ןיםןיםימם םןיםןים", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5" 
      ,items:[{ label: "tab5", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5" }]}

    ] },
  //barItems: MenuItem[] = [
    // { label: "טופס", icon: "fas fa-home", routerLink: "/bo-example/root/tab9" },
    // { label: "טאב 2", icon: "fas fa-home", routerLink: "/bo-example/root/tab2/hello-tab2" },
    // { label: "tab2 second", icon: "fas fa-map-marker-alt", routerLink: "/bo-example/root/tab2/hello-tab2-second" },
    // { label: "tab3", icon: "far fa-sunset", routerLink: "/bo-example/root/tab3" },
    // { label: "tab3 more parameter", icon: "far fa-sunset", routerLink: "/bo-example/root/tab3" },
    // { label: "tab4", icon: "far fa-sunset", routerLink: "/bo-example/root/tab4" },
    // { label: "tab5", icon: "far fa-sunset", routerLink: "/bo-example/root/tab5" },
    // { label: "tab6", icon: "far fa-sunset", routerLink: "/bo-example/root/tab6" },
    // { label: "tab7", icon: "far fa-sunset", routerLink: "/bo-example/root/tab7" },
    // { label: "tab8 with param 5", icon: "far fa-sunset", routerLink: "/bo-example/root/tab8/5" },
    // { label: "tab8 with param 8", icon: "far fa-sunset", routerLink: "/bo-example/root/tab8/8", items: [{ label: "טופס", icon: "fas fa-home", routerLink: "/bo-example/root/tab9" },
    // { label: "טאב 2", icon: "fas fa-home", routerLink: "/bo-example/root/tab2/hello-tab2" }] },
];

  currentEnvType = eEnvType.Dev;
  searchItems = [{ label: 'פניה', value: 1 }, { label: 'בקשה', value: 2 }];
  moreMenuItems: BOHeaderMenuItem[];
  searchPlaceholder: string;
  private subscription: Subscription = new Subscription();
  
  requestId;

  constructor(
    private translate: TranslateService,
    private mojTabsService: MojTabsService,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private _router: Router
  ) {
    this.initMainTab();
    this.moreMenuItems = [{ text: 'עדכון פרטים אישיים', command: this.onUpdateDetails ,name:"personalDetails"}];
  }

  ngOnInit() {
    // this.initMainTab();
  }

  searchComboChanged(e) {
    this.searchPlaceholder =`חיפוש ${e.value.label}`;
  }

  onUpdateDetails(e: any) {
    alert('עדכון פרטים אישיים נלחץ');
  }

  initMainTab(): any {
    this.tab = new MojTab('', this.translate.get('Menu.mainTab'));
    this.tab.appMainTab = true;
    this.tab.removable = false;
    this.tab.selected = true;
    this.tab.sideMenuItems = [
        { url: '/bo-example/root/main/sub-tab1', title$: of('מאפיינים'), icon: "far fa-cogs" },
        { url: '/bo-example/root/main/sub-tab2', title$: of('מסמכים'), icon: "fas fa-folder-open" },
        { url: '/bo-example/root/main/sub-tab2', title$: of('מעקב'), icon: "far fa-toolbox" },
        { url: '/bo-example/root/main/sub-tab2', title$: of('נתוני מערכת'), icon: "far fa-table" },
        { url: '/bo-example/root/main/sub-tab2', title$: of('יומן אירועים'), icon: "far fa-calendar-alt" },
        { url: '/bo-example/root/main/sub-tab2', title$: of('הרשאות'), icon: "far fa-lock-alt" },
    ];

    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  openNewTab() {

      this.navigationService.navigate('/bo-example/root/tab3','3');
    }
  
  

  searchClick(e) {}

  async initTab(requestId) {
  let url = `/patent-file/patent-file${requestId != null && requestId != 0 ? `/${requestId}` : ''}`;
  let tab = new MojTab(url,this.getTitle(requestId) );
  tab.color = "#f06292";
  tab.id = requestId;
   this.mojTabsService.addOrGetTab(this.tab, this.onTabMoved.bind(this), this.onCloseTab.bind(this));
  }
  async onTabMoved(tab: MojTab) {
   
  }
  async onCloseTab(tab: MojTab) {
   
  }
  
  getTitle(requestId) {
    return requestId != null && requestId != 0
      ? this.translate.get("Texts.request ", { id: requestId })
      : this.translate.get("Texts.request ");
  }
}
