import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojWebsiteModule, MojInputModule, MojProgressModule, MojFilterModule, MojSharedModule } from '@moj/moj-ng';
import { RouterModule } from '@angular/router';
import { MojLoadingDemoComponent } from './moj-loading-demo/moj-loading-demo.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RecaptchaDemoComponent } from './recaptcha-demo/recaptcha-demo.component';
import { InvisibleRecaptchaDemoComponent } from './invisible-recaptcha-demo/invisible-recaptcha-demo.component';
import { ResizeDemoComponent } from './resize-demo/resize-demo.component';
import { FilterDemoComponent } from './filter-demo/filter-demo-component';
import { DemoSiteInternalModule } from '../demo-site-internal/demo-site-internal.module';
import { MojChipsDemoComponent } from './moj-chips-demo/moj-chips-demo.component';
import { MojHelpInfoDemoComponent } from './moj-help-info-demo/moj-help-info-demo.component';
import { GuidelinesDemoComponent } from './guidelines-demo/guidelines-demo.component';
import { MojGuidelinesModule } from '../../../../moj-ng';

@NgModule({
  declarations: [
    MojLoadingDemoComponent,
    ProgressDemoComponent,
    RecaptchaDemoComponent,
    InvisibleRecaptchaDemoComponent,
    ResizeDemoComponent,
    FilterDemoComponent,
    MojChipsDemoComponent,
    MojHelpInfoDemoComponent,
    GuidelinesDemoComponent
  ],
  imports: [
    CommonModule, MojSharedModule, MojInputModule, MojProgressModule, MojWebsiteModule, MojFilterModule, DemoSiteInternalModule, MojGuidelinesModule,
     RouterModule.forChild([
      { path: 'loading-demo', component: MojLoadingDemoComponent },
      { path: 'progress-demo', component: ProgressDemoComponent },
      { path: 'recaptcha-demo', component: RecaptchaDemoComponent },
      { path: 'invisible-recaptcha-demo', component: InvisibleRecaptchaDemoComponent },
      { path: 'resize-demo', component: ResizeDemoComponent },
      { path: 'filter-demo', component: FilterDemoComponent },
      { path: 'moj-chips-demo', component: MojChipsDemoComponent },
      { path: 'moj-help-info-demo', component: MojHelpInfoDemoComponent },
      { path: 'guidelines-demo', component: GuidelinesDemoComponent }
    ])]
})
export class MiscDemoModule { }
