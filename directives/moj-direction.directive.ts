import { Directive, HostBinding, Renderer2 } from "@angular/core";
import { MojUtilsService } from "../shared/utils";
import { MojDirection } from "../elements/website/language";
declare var require: any; 

@Directive({
    selector: "[mojDir]"
})
export class MojDirectionDirective {

    @HostBinding('class.moj-ltr') private isLtr: boolean = false;
    @HostBinding('class.moj-rtl') private isrtl: boolean = false;
   
    constructor(private _util: MojUtilsService, private renderer: Renderer2) {
        this.isLtr = _util.currentLang.dir == MojDirection.ltr;
        this.isrtl = _util.currentLang.dir == MojDirection.rtl;
        this.renderer.addClass(document.body, this._util.getMojDirClass());
       
     
        if(this.isrtl)
        {
            require("style-loader!../../../css/bootstrap-rtl.css");
        }
    }
}