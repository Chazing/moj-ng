import { Component} from "@angular/core"

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
