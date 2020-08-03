import { NgModule } from "@angular/core";
import { SlidingMenuComponent } from "./sliding-menu.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { SlidingMenuWrapperComponent } from '../sliding-menu-wrapper/sliding-menu-wrapper.component';

@NgModule({
    imports: [CommonModule, TranslateModule],
    exports: [SlidingMenuComponent,SlidingMenuWrapperComponent],
    declarations: [SlidingMenuComponent,SlidingMenuWrapperComponent]
})
export class MojSlidingMenuModule { }