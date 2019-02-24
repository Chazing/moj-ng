import { Directive, ViewContainerRef } from '@angular/core';
import { MojDialogService } from './moj-dialog.service';

@Directive({
    selector: '[mojDialogHost]',
})
export class DialogHostDirective {
    constructor(public viewContainerRef: ViewContainerRef, protected dialogService: MojDialogService) {
        dialogService.setRootViewContainerRef(viewContainerRef);
    }
}