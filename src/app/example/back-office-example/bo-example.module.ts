import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMainTab } from './tabs-example/app-main-tab/app-main-tab.component';
import { SubTab1 } from './tabs-example/app-main-tab/sub-tab1.component';
import { SubTab2 } from './tabs-example/app-main-tab/sub-tab2.component';
import { MainTab2Module } from './tabs-example/main-tab2/main-tab2.module';
import { BOExampleComponent } from './tabs-example/bo-example.component';
import { MainTab3Component } from './tabs-example/main-tab3/main-tab3.component';
import { MainTab4Component } from './tabs-example/main-tab3/main-tab4.component';
import { MainTab5Component } from './tabs-example/main-tab3/main-tab5.component';
import { MainTab6Component } from './tabs-example/main-tab3/main-tab6.component';
import { MainTab7Component } from './tabs-example/main-tab3/main-tab7.component';
import { MainTab8Component } from './tabs-example/main-tab3/main-tab8.component';
import { Tab3Side1Component } from './tabs-example/main-tab3/tab3-side1/tab3-side1.component';
import { Tab3Side2Component } from './tabs-example/main-tab3/tab3-side2/tab3-side2.component';
import { Tab3Side3Component } from './tabs-example/main-tab3/tab3-side3/tab3-side3.component';
import { FormExampleComponent } from '../form-example/form-example.component';
import { FormExampleModule } from '../form-example/form-example.module';
import { MojSharedModule, MojInputModule, MojTabsModule, MojBackOfficeModule, MojFileUploadModule, MojDirectiveModule, NavigationService } from '@moj/moj-ng';

@NgModule({
  imports: [
    CommonModule,
    MojSharedModule,
    MojInputModule,
    MojTabsModule,
    MojBackOfficeModule,
    MojFileUploadModule,
    FormExampleModule,
    MojDirectiveModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'root' },
      {
        path: 'root',
        component: BOExampleComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'main' },
          {
            path: 'main',
            component: AppMainTab,
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'sub-tab1' },
              { path: 'sub-tab1', component: SubTab1 },
              { path: 'sub-tab2', component: SubTab2/*,canActivate:[MojGuard], data:{routerID:"#SubTab2"}*/ }   
            ]
          },
          { path: 'tab2', loadChildren: () => import('./tabs-example/main-tab2/main-tab2.module').then(m => m.MainTab2Module) },
          { path: 'tab3', component: MainTab3Component, canActivate: [NavigationService] },
          { path: 'tab4', component: MainTab4Component, canActivate: [NavigationService] },
          { path: 'tab5', component: MainTab5Component, canActivate: [NavigationService] },
          { path: 'tab6', component: MainTab6Component, canActivate: [NavigationService] },
          { path: 'tab7', component: MainTab7Component, canActivate: [NavigationService] },
          {
            path: 'tab3/:id',
            component: MainTab3Component,
            canActivate: [NavigationService],
            children: [
              { path: "", pathMatch: 'full', redirectTo: 'basic-information' },
              { path: 'basic-information', component: Tab3Side1Component },
              { path: 'sub1', component: Tab3Side1Component },
              { path: 'sub2', component: Tab3Side2Component /*,data:{routerID:"#SubTab2"}*/ },
              { path: 'sub3', component: Tab3Side3Component }
            ]
          },
          { path: 'tab9', component: FormExampleComponent, canActivate: [NavigationService] },
        ]
      }
    ])
  ],
  exports: [RouterModule],
  declarations: [
    BOExampleComponent,
    AppMainTab,
    SubTab1,
    SubTab2,
    MainTab3Component,
    MainTab4Component,
    MainTab5Component,
    MainTab6Component,
    MainTab7Component,
    MainTab8Component,
    Tab3Side1Component,
    Tab3Side2Component,
    Tab3Side3Component
  ]
})
export class BOExampleModule {}

export function getMainTab2Module() {
  return MainTab2Module;
}
