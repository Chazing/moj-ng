import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojSharedModule } from '@moj/moj-ng/shared/moj.shared.module';
import { MojWebsiteModule, MojInputModule, MojProgressModule, MojFilterModule } from '@moj/moj-ng';
import { RouterModule } from '@angular/router';
import { MojLoadingDemoComponent } from './moj-loading-demo/moj-loading-demo.component';
import { ProgressDemoComponent } from './progress-demo/progress-demo.component';
import { RecaptchaDemoComponent } from './recaptcha-demo/recaptcha-demo.component';
import { InvisibleRecaptchaDemoComponent } from './invisible-recaptcha-demo/invisible-recaptcha-demo.component';
import { ResizeDemoComponent } from './resize-demo/resize-demo.component';
import { FilterDemoComponent } from './filter-demo/filter-demo-component';
import { DemoSiteInternalModule } from '../demo-site-internal/demo-site-internal.module';

@NgModule({
  declarations: [
    MojLoadingDemoComponent,
    ProgressDemoComponent,
    RecaptchaDemoComponent,
    InvisibleRecaptchaDemoComponent,
    ResizeDemoComponent,
    FilterDemoComponent
  ],
  imports: [
    CommonModule, MojSharedModule,MojInputModule, MojProgressModule , MojWebsiteModule,MojFilterModule,DemoSiteInternalModule, RouterModule.forChild([
      { path: 'loading-demo', component: MojLoadingDemoComponent },
      { path: 'progress-demo', component: ProgressDemoComponent },
      { path: 'recaptcha-demo', component: RecaptchaDemoComponent },
      { path: 'invisible-recaptcha-demo', component: InvisibleRecaptchaDemoComponent },
      { path: 'resize-demo', component: ResizeDemoComponent },
      { path: 'filter-demo', component: FilterDemoComponent }
    ])]
})
export class MiscDemoModule { }
