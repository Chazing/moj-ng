import { Component, OnInit } from "@angular/core";
import { EditComponentBase } from '@moj/moj-ng';

@Component({
    selector: "edit-popup-example",
    templateUrl: "edit-popup-example.component.html"
})
export class EditPopupExampleComponent extends EditComponentBase implements OnInit{
    items =[{ id: 1, name: 'pdf' }, { id: 2, name: 'tiff' }, { id: 3, name: 'jpg' }];
    ngOnInit(){
        if(!this.editedItem){
            this.editedItem = {};
        }
    }
}
