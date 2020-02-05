import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'website-example', loadChildren: () => import('./example/website-example/website-example.module').then(m => m.WebsiteExampleModule) },
    { path: 'bo-example', loadChildren: () => import('./example/back-office-example/bo-example.module').then(m => m.BOExampleModule) },
    { path: '', redirectTo: '/website-example', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }