import { DemoSiteInternalModule } from './../demo-site-internal/demo-site-internal.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsCardDemoComponent } from './options-card-demo/options-card-demo.component';
import { CardsModule } from '@moj/moj-ng';

const routes: Routes = [{ path: 'options-card', component: OptionsCardDemoComponent }]
@NgModule({
  declarations: [OptionsCardDemoComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), CardsModule, DemoSiteInternalModule
  ]
})
export class CardsDemoModule { }
