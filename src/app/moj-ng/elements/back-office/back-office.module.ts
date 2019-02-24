import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MenubarModule, ContextMenuModule, TabViewModule, DropdownModule, ButtonModule } from "primeng/primeng";
import { MojBoMenubarComponent } from "./moj-bo-menubar/moj-bo-menubar.component";
import { MojBoHeaderComponent } from "./moj-bo-header/moj-bo-header.component";
import { MojBoSidebarComponent } from "./moj-bo-sidebar/moj-bo-sidebar.component";
import { MojActionsTooltipComponent } from "../actions-tooltip/moj-actions-tooltip.component";

@NgModule({
    imports: [CommonModule, FormsModule, MenubarModule, ContextMenuModule, TabViewModule, DropdownModule, ButtonModule],
    declarations: [MojBoMenubarComponent, MojBoHeaderComponent, MojBoSidebarComponent, MojActionsTooltipComponent ],
    exports: [MojBoMenubarComponent, MojBoHeaderComponent, MojBoSidebarComponent, MojActionsTooltipComponent]
})
export class MojBackOfficeModule { }