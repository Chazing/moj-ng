import { Component, OnInit, Input } from '@angular/core';
import { TitleType } from '../label.enum';
import { CaptionType } from '../../general/general.enum';

@Component({
    selector: 'moj-title',
    templateUrl: './moj-title.component.html',
    styleUrls: ['./moj-title.component.scss']
})
export class MojTitleComponent implements OnInit {

    @Input() textKey: string = "";
    @Input() captionType: CaptionType = CaptionType.default;
    @Input() titleType: TitleType = TitleType.Primary;

    get getCaptionType() {
        switch (this.titleType) {
            case TitleType.Primary:
                return "h1";
                break;
            case TitleType.Secondary:
                return "h2";
                break;
            default:
                return this.captionType;
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
