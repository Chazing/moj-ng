import { NgModule } from "@angular/core";
import { KeysPipe } from "./keys-pipe";
import { MojFormatByTypePipe } from "./moj-format-by-type.pipe";


@NgModule({
    imports: [
    ],
    exports: [ KeysPipe, MojFormatByTypePipe ],
    declarations: [
        KeysPipe,
        MojFormatByTypePipe
        
    ]
})
export class MojPipesModule { }
