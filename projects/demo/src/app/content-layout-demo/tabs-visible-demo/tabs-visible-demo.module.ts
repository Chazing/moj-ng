import { NgModule } from "@angular/core";
import { TabsVisibleDemoComponent } from "./tabs-visible-demo.component";
import { Tab1ContentComponent } from "./tab1-content/tab1-content.component";
import { Tab2ContentComponent } from "./tab2-content/tab2-content.component";
import { Tab3ContentComponent } from "./tab3-content/tab3-content.component";
import { MojTabsModule, MojWebsiteModule, MojLabelModule } from "@moj/moj-ng";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [TabsVisibleDemoComponent, Tab1ContentComponent, Tab2ContentComponent, Tab3ContentComponent],
    imports: [MojTabsModule, MojWebsiteModule, MojLabelModule, RouterModule.forChild([
        {path: "", pathMatch: "full", redirectTo: "tabs"},
        {path: "tabs", component: TabsVisibleDemoComponent}
    ])],
    exports: [TabsVisibleDemoComponent, Tab1ContentComponent, Tab2ContentComponent, Tab3ContentComponent, RouterModule],
    entryComponents: [Tab1ContentComponent, Tab2ContentComponent, Tab3ContentComponent]
})
export class TabsVisibleDemoModule {
    
}