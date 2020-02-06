import { NgModule } from "@angular/core";
import { KeysPipe } from "./keys-pipe";
import { MojFormatByTypePipe } from "./moj-format-by-type.pipe";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    imports: [
    ],
    exports: [ KeysPipe, MojFormatByTypePipe ,FilterPipe],
    declarations: [
        KeysPipe,
        MojFormatByTypePipe,
        FilterPipe
    ]
})
export class MojPipesModule { }
