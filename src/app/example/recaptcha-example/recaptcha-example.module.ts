import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecaptchaExampleComponent } from "./recaptcha-example.component";
import { FormsModule } from "@angular/forms";
import { MojWebsiteModule, MojSharedModule } from '@moj/moj-ng';

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
