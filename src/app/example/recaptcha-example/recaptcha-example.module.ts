import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecaptchaExampleComponent } from "./recaptcha-example.component";
import { MojWebsiteModule } from "../../moj-ng/elements/website/moj-website.module";
import { FormsModule } from "@angular/forms";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        MojWebsiteModule,
        MojSharedModule
    ],
    exports:[RecaptchaExampleComponent],
	declarations: [
        RecaptchaExampleComponent
	]
})
export class RecaptchaExampleModule {}
