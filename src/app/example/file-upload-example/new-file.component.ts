import { Component, OnInit } from "@angular/core";
import { EditComponentWithFileBase } from "../../moj-ng/elements/grid/edit-component/edit-component-with-file.base";
import { MojFileUploadService } from "../../moj-ng/elements/file-upload/moj-file-upload.service";

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
