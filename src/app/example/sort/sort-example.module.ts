import { NgModule } from '@angular/core';
import { SortExampleComponent } from './sort-example.component';
import { CommonModule } from '@angular/common';
import { MojSharedModule, MojGridModule } from 'projects/moj-ng';

@NgModule({
    imports:[
        CommonModule, MojGridModule, MojSharedModule
    ],
    declarations:[SortExampleComponent],
    exports:[SortExampleComponent]
})
export class SortExampleModule {}