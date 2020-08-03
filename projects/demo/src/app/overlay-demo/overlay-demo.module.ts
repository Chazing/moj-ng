import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { SlidingMenuDemoComponent } from './sliding-menu-demo/sliding-menu-demo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MojInputModule, MojSharedModule, MojSlidingMenuModule, MojFilterModule } from '@moj/moj-ng';
import { DemoSiteInternalModule } from '../demo-site-internal/demo-site-internal.module';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';

@NgModule({
  declarations: [DialogDemoComponent, PopupDemoComponent, SlidingMenuDemoComponent, SnackbarDemoComponent],
  imports: [
    CommonModule,
    DemoSiteInternalModule,
    FormsModule, MojInputModule, MojSharedModule, MojSlidingMenuModule, MojFilterModule,
    RouterModule.forChild([
      { path: 'popup-demo', component: PopupDemoComponent },
      { path: 'sliding-menu-demo', component: SlidingMenuDemoComponent },
      { path: 'snackbar-demo', component: SnackbarDemoComponent }
    ])],
  entryComponents: [DialogDemoComponent]
})
export class OverlayDemoModule { }
