import { Component, OnInit } from '@angular/core';
import { MojFileUploadDesignType } from '@moj/moj-ng';

import { ENUMS, Enums } from '../../enums';

@Component({
    selector: 'app-file-upload-demo',
    templateUrl: './file-upload-demo.component.html',
    styleUrls: ['./file-upload-demo.component.css']
})
export class FileUploadDemoComponent implements OnInit {
    Enums:Enums=ENUMS;
    files = [];

    fuDesignType = MojFileUploadDesignType; 

    isRequired: boolean;

      constructor() { }

    ngOnInit() {
    }

}
