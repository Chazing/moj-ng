﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CustomFormsModule } from "ng2-validation";
import { ValidationMessages } from "./validation-message/validation-messages.component";
import { HexadecimalValueValidator } from "./template-validations/hexadecimal.directive";
import { EqualToValidator } from "./template-validations/equal_to.directive";
import { IdentificationValidator } from "./template-validations/idetntification.directive";
import { SecurityValidator } from "./template-validations/security.directive";
import { GreaterThanValidator } from "./template-validations/greater_than.directive";
import { MojPipesModule } from "../pipes/moj-pipes-module";
import { SecurityNoteValidator } from "./template-validations/security-note.directive";
import { GreaterOrEqualThanValidator } from "./template-validations/greater_or_equal_than.directive";

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
