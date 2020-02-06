import { Component, OnInit } from "@angular/core";
import { EditComponentBase } from "@moj/moj-ng";

@Component({
    selector: "edit-grid-component-demo",
    templateUrl: "edit-grid-component-demo.component.html"
})
export class EditGridComponentDemoComponent extends EditComponentBase implements OnInit {
    ngOnInit(){
        if(!this.editedItem){
            this.editedItem = {};
        }
    }
}
