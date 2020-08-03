import { Component, OnInit } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid-community";
import { NewFileComponent } from "./new-file.component";
import { MojDataViewType, ElementSize, EditOptions, EditServiceBase, GridService } from '@moj/moj-ng';

@Component({
    selector: "file-upload-example",
    templateUrl: "file-upload-example.component.html"
})
export class FileUploadExampleComponent implements OnInit {

    files = [{ name: "file1.pdf", GUID: "0c496f04-4030-4b13-8ba8-dc8a615bd4cf", docType: 3, mojId: 111 }, { name: "file2.pdf", GUID: "0cec6cf0-0bb0-4e3e-ba29-d34c3d1fa233", docType: 2 }, { name: "file3.pdf", GUID: "1bf5010d-f6f5-4bd2-9cbb-7a34d1cab0ab", docType: 3 }];
    // files: any; 
    dataViewType = MojDataViewType;
    files1;
    files2;// = [{name: "files2"}, {name: "files2"}, {name: "files2"}];
    files3;

    arr = [
        { id: 1, docs: this.files },
        { id: 2, docs: [] }
    ]

    size = ElementSize;

    fileUploadComplete(file) {
        file.docType = 4;
    }

    click(file) {
        console.log(file);
    }

    enableDelete(file) {
        if (file.mojId)
            return false;
        return true;
    }

    rowData;
    columns: ColDef[];
    editOptions: EditOptions = new EditOptions();
    editService: EditServiceBase;
    gridOptions: GridOptions;

    isRequired1: boolean = false;
    isRequired2: boolean = false;

    constructor(private gridService: GridService) {
    }

    ngOnInit() {
        this.rowData = [{ fileDate: new Date(), fileType: 'doc', fileName: 'שם מסמך', ticNum: '1' }];

        this.columns = [
            this.gridService.getMojDateColumn("fileDate"),
            this.gridService.getMojColumn("fileType"),
            this.gridService.getMojColumn("fileName"),
            this.gridService.getMojColumn("ticNum")
        ];

        this.gridOptions = this.gridService.getMojGridOptions();
        this.editOptions.editComponentType = NewFileComponent;
    }
}