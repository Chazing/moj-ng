import { Component, OnInit } from "@angular/core";
import { EditComponentBase } from "../../moj-ng/elements/grid/edit-component/edit-component.base";

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
