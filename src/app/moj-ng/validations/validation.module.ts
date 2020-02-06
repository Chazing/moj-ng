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
import { SecurityNoteValidator } from "./customValidators/security-note.directive";
import { GreaterOrEqualThanValidator } from "./customValidators/greater_or_equal_than.directive";

@NgModule({
    imports: [
        CommonModule, CustomFormsModule, TranslateModule, MojPipesModule
    ],
    exports: [
        ValidationMessages, HexadecimalValueValidator, EqualToValidator, IdentificationValidator,
        SecurityValidator, SecurityNoteValidator, GreaterThanValidator, CustomFormsModule, MojPipesModule,GreaterOrEqualThanValidator
    ],
    declarations: [
        ValidationMessages, HexadecimalValueValidator, EqualToValidator, IdentificationValidator, SecurityNoteValidator,
        SecurityValidator, GreaterThanValidator,GreaterOrEqualThanValidator
    ]
})
export class ValidationsModule { }
