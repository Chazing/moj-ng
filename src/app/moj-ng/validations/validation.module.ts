import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CustomFormsModule } from "ng2-validation";
import { ValidationMessages } from "./validation-messages.component";

import { HexadecimalValueValidator } from "./customValidators/hexadecimal.directive";
import { EqualToValidator } from "./customValidators/equal_to.directive";
import { IdentificationValidator } from "./customValidators/idetntification.directive";
import { SecurityValidator } from "./customValidators/security.directive";
import { GreaterThanValidator } from "./customValidators/greater_than.directive";
import { MojPipesModule } from "../pipes/moj-pipes-module";
import { MojSharedModule } from "../shared/moj.shared.module";
import { SecurityNoteValidator } from "./customValidators/security-note.directive";

@NgModule({
    imports: [
        CommonModule, CustomFormsModule, TranslateModule, MojPipesModule, MojSharedModule
    ],
    exports: [
        ValidationMessages, HexadecimalValueValidator, EqualToValidator, IdentificationValidator,
        SecurityValidator, SecurityNoteValidator, GreaterThanValidator, CustomFormsModule, MojPipesModule
    ],
    declarations: [
        ValidationMessages, HexadecimalValueValidator, EqualToValidator, IdentificationValidator, SecurityNoteValidator,
        SecurityValidator, GreaterThanValidator
    ]
})
export class ValidationsModule { }
