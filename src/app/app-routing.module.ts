import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteExampleModule } from './example/website-example/website-example.module';
import { BOExampleModule } from './example/back-office-example/bo-example.module';

export const appRoutes: Routes = [
    { path: 'website-example', loadChildren: getWebsiteModule },
    { path: 'bo-example', loadChildren: getBoModule },
    { path: '', redirectTo: '/website-example', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: "reload"})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export function getWebsiteModule(){
    return WebsiteExampleModule; 
}

export function getBoModule(){
    return BOExampleModule; 
}