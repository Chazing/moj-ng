import { Component, OnInit } from "@angular/core";
import { EditComponentWithFileBase, MojFileUploadService } from '@moj/moj-ng';

@Component({
    selector: "new-file",
    templateUrl: "new-file.component.html"
})
export class NewFileComponent extends EditComponentWithFileBase implements OnInit{

    constructor(mojUploadService: MojFileUploadService){
        super(mojUploadService);
    }
    ngOnInit(){
        if(!this.editedItem){
            this.editedItem = {};
        }
    }

    saveFile(){
        
    }
}
