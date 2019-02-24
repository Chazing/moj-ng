import { NgModule } from "@angular/core";
import { SlidingMenuComponent } from "./sliding-menu.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [CommonModule, TranslateModule],
    exports: [SlidingMenuComponent],
    declarations: [SlidingMenuComponent]
})
export class MojSlidingMenuModule { }