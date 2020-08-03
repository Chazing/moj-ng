import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MojLineComponent } from "./moj-line.component";
import { MojButtonsLineComponent } from "./moj-buttons-line.component";
import { MojDesignLineComponent } from "./moj-design-line.component"

@NgModule({
    imports: [CommonModule],
    exports: [MojLineComponent, MojButtonsLineComponent, MojDesignLineComponent ],
    declarations: [MojLineComponent, MojButtonsLineComponent, MojDesignLineComponent]
})
export class MojLineModule { }