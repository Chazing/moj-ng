import { NgModule } from "@angular/core";
import { MojCarouselComponent } from "./moj-carousel.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MojCarouselComponent],
    imports: [CommonModule],
    exports: [MojCarouselComponent]
})
export class MojCarouselModule {
    
}