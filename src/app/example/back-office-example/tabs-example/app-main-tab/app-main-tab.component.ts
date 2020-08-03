import { Component } from "@angular/core";
import { TranslateService } from "../../../../../../node_modules/@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { MojTab, LabelStyle, PanelStyle, ButtonStyle, MojFileUploadDesignType, NavigationService, MojTabsService } from '@moj/moj-ng';

@Component({
    templateUrl: './app-main-tab.component.html'
})
export class AppMainTab {
    tab: MojTab;
    labelStyle = LabelStyle;
    panelStyle = PanelStyle; 
    buttonStyle = ButtonStyle;
    str: string = "sdfsfsdfsdf";
    files = [];
    fuDesignType = MojFileUploadDesignType;

    constructor(private translate: TranslateService, private mojTabsService: MojTabsService, 
        private navigationService: NavigationService, private _http: HttpClient) {
        this.initMainTab();
    }


    async func() {
        await new Promise((res)=>{ res(1);});
        
    }

    ngOnInit() {
        
    }
    
    initMainTab(): any {
       
    }

    testCSRF() {
        this._http.post("/api/Values",  { }).subscribe(data => {
        });
    }
    
}