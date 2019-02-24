import { Directive, HostBinding } from "@angular/core";
import { MojUtilsService } from "../shared/utils";
import { MojDirection } from "../elements/website/language";

@Directive({
    selector: "[mojDir]"
})
export class MojDirectionDirective {

    @HostBinding('class.moj-ltr') private isLtr: boolean = false;

    constructor(private _util: MojUtilsService) {
        this.isLtr = _util.currentLang.dir == MojDirection.ltr;
    }
}