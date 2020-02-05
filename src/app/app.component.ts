import { Component, OnInit, Renderer2 } from "@angular/core"
import { TranslateService } from '@ngx-translate/core';
import { MojUtilsService } from "./moj-ng";
import { MojDirection } from "./moj-ng/elements/website/language";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    title = 'app';
    constructor() {

        // this language will be used as a fallback when a translation isn't found in the current language
        // translate.setDefaultLang('he');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //  translate.use('en');

    }

}
