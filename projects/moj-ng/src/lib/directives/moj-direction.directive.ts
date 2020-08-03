import { MojLanguageService } from './../shared/moj-language.service';
import { Directive, HostBinding, Renderer2 } from "@angular/core";
import { MojDirection } from "../elements/website/language";
declare var require: any; 

@Directive({
    selector: "[mojDir]"
})
export class MojDirectionDirective {

    @HostBinding('class.moj-ltr') public isLtr: boolean = false;
    @HostBinding('class.moj-rtl') public isrtl: boolean = false;
   
    constructor(private _languageService: MojLanguageService, private renderer: Renderer2) {
        this.isLtr = _languageService.currentLang.dir == MojDirection.ltr;
        this.isrtl = _languageService.currentLang.dir == MojDirection.rtl;
        this.renderer.addClass(document.body, this._languageService.getMojDirClass());
       
     
        if(this.isrtl)
        {
            require("style-loader!../../css/bootstrap-rtl.css");
        }
    }
}