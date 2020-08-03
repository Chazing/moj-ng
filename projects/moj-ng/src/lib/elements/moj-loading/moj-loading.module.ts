import { NgModule } from "@angular/core";
import { ProgressSpinnerModule } from "primeng/primeng";
import { MojLoadingComponent } from "./moj-loading.component";
import { CommonModule } from "@angular/common";
import { MojLoadingService } from "./moj-loading.service";

@NgModule({
  imports: [ProgressSpinnerModule, CommonModule],
  exports: [ProgressSpinnerModule, MojLoadingComponent],
  declarations: [MojLoadingComponent],
  entryComponents: [MojLoadingComponent],
  providers: [MojLoadingService]
})
export class MojLoadingModule { }
