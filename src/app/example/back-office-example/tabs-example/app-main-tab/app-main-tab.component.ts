import { Component } from "@angular/core";
import { TranslateService } from "../../../../../../node_modules/@ngx-translate/core";
import { MojTabsService } from "../../../../moj-ng/elements/tabs/services/moj-tabs.service";
import { NavigationService } from "../../../../moj-ng/elements/tabs/services/navigation.service";
import { MojTab } from "../../../../moj-ng/elements/tabs/models/moj-tabs.models";
import { LabelStyle } from "../../../../moj-ng/elements/label/label.enum";
import { PanelStyle } from "../../../../moj-ng/elements/panels/moj-panel.enum";
import { ButtonStyle } from "../../../../moj-ng/elements/buttons/button-style";
import { MojFileUploadDesignType } from "../../../../moj-ng";

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

    constructor(private translate: TranslateService, private mojTabsService: MojTabsService, private navigationService: NavigationService) {
        this.initMainTab();
    }


    async func() {
        await new Promise((res)=>{ res(1);});
        
    }

    ngOnInit() {
        
    }
    
    initMainTab(): any {
       
    }
    
}