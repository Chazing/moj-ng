import { NgModule } from "@angular/core";
import { ProvideParentForm } from "./provide-parent-form.directive";
import { NgbDropdownAnchor } from "./moj-dropdown.directive";
import { MojFormDirective } from "./moj-form.directive";
import { MojOnlyNumberDirective } from "./moj-only-number.directive";
import { MojDragAndDropDirective } from "./moj-drag-and-drop";
import { MojDirectionDirective } from "./moj-direction.directive";
import { ClickOutsideDirective } from "./click-outSide.directive";
import { MojDynamicFontsize } from './dynamic-font-size.directive';

@NgModule({
    exports: [ProvideParentForm, MojFormDirective, MojOnlyNumberDirective, MojDragAndDropDirective, MojDirectionDirective,ClickOutsideDirective, MojDynamicFontsize],
    declarations: [ProvideParentForm, NgbDropdownAnchor, MojFormDirective, MojOnlyNumberDirective, MojDragAndDropDirective, MojDirectionDirective,ClickOutsideDirective, MojDynamicFontsize]
})
export class MojDirectiveModule { }