import { Component, Input, ViewEncapsulation, OnChanges, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";
import { Guideline } from "../guideline.model";

@Component({
    selector: 'moj-guideline',
    templateUrl: 'moj-guideline.component.html',
    styleUrls:['moj-guideline.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class MojGuidelineComponent implements OnChanges{
    @Input()
    guideline:Guideline;
    @Input()
    isVisible:boolean; //guidelines panel visibility

    isOpen:boolean = false;
    isHeightExceeds = false; //to know if need arrows and put ellipsis

    @ViewChild('message', {static:true}) messageEl:ElementRef;

    constructor(private cdr:ChangeDetectorRef){}

    ngOnChanges(changes){ //called when inputs change
        //when show guidelines set isHeightExceeds
        //property for know if arrow needed
        if(changes.isVisible && 
            changes.isVisible.currentValue && 
            !changes.isVisible.previousValue ){
                setTimeout(function(){
                    if(this.messageEl.nativeElement.offsetHeight > 50){
                        this.isHeightExceeds = true;
                        this.cdr.detectChanges();
                    }
                }.bind(this), 10);
        }

    }

    onArrowClick(){
        this.isOpen = !this.isOpen;
    }
}