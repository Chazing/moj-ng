import { Component, OnInit } from "@angular/core";
import { EditComponentBase } from '@moj/moj-ng';

@Component({
    selector: "edit-dialog-example",
    templateUrl: "edit-dialog-example.component.html"
})
export class EditDialogExampleComponent extends EditComponentBase implements OnInit {
    ngOnInit(){
        if(!this.editedItem){
            this.editedItem = {};
        }
    }
}
