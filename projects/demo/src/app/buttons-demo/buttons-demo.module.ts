import { DemoSiteInternalModule } from './../demo-site-internal/demo-site-internal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsDemoComponent } from './buttons-demo/buttons-demo.component';
import { RouterModule } from '@angular/router';
import { MojWebsiteModule, MojLabelModule, MojSharedModule, MojInputModule } from '@moj/moj-ng';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ButtonsDemoComponent],
  imports: [CommonModule,
    DemoSiteInternalModule,
    MojWebsiteModule,
    TranslateModule,
    MojSharedModule,
    MojInputModule,
    MojInputModule,
    RouterModule.forChild([
      { path: 'buttons-demo', component: ButtonsDemoComponent },
    ])
  ]
})
export class ButtonsDemoModule { }

