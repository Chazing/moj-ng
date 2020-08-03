import { Component, OnInit } from '@angular/core';
import { MojFileUploadDesignType } from '@moj/moj-ng';

import { ENUMS, Enums } from '../../enums';

@Component({
    selector: 'app-file-upload-demo',
    templateUrl: './file-upload-demo.component.html',
    styleUrls: ['./file-upload-demo.component.css']
})
export class FileUploadDemoComponent implements OnInit {
    Enums: Enums = ENUMS;
    files = [];// = [{name: "file.pdf"}];
    files2 = [{name: "file.pdf", size: 1234, mojId: 1234, date: "12/01/2020"}];

    fuDesignType = MojFileUploadDesignType;

    isRequired: boolean;

    constructor() { }

    ngOnInit() {
    }

    click(file) {
        console.log(file);
    }

    enableDelete(file) {
        if (file.mojId)
            return false;
        return true;
    }

}
