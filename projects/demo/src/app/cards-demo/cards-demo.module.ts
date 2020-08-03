import { DemoSiteInternalModule } from './../demo-site-internal/demo-site-internal.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsCardDemoComponent } from './options-card-demo/options-card-demo.component';
import { MojCardsModule, MojLabelModule, MojWebsiteModule, MojInputModule, MojBottonModule, MojLineModule, MojEntityHeaderModule } from '@moj/moj-ng';
import { FlipCardDemoComponent } from './flip-card-demo/flip-card-demo.component';
import { EntityHeaderDemoComponent } from './entity-header-demo/entity-header-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'options-card', component: OptionsCardDemoComponent },
{ path: 'flip-card', component: FlipCardDemoComponent },
{ path: 'entity-header-card', component: EntityHeaderDemoComponent }
]
@NgModule({
  declarations: [OptionsCardDemoComponent, FlipCardDemoComponent, EntityHeaderDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MojCardsModule,
    MojEntityHeaderModule,
    DemoSiteInternalModule,
    MojLabelModule,
    MojWebsiteModule,
    MojInputModule,
    MojBottonModule,
    MojLineModule
  ]
})
export class CardsDemoModule { }
