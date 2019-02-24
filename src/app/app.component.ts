import { Component } from "@angular/core"
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    title = 'app';
    constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        // translate.setDefaultLang('he');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //  translate.use('en');

    }
}
