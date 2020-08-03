import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "doc-iframe",
    template: `<style>:host { display:block; } iframe { width: inherit; height: inherit; border: none; }</style>
                <iframe *ngIf="src" class="doc-preview" [src]="srcdoc"></iframe>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocIframeComponent {
    private _src: string;

    @Input()
    get src(): string {
        return this._src;
    }
    set src(val:string) {
        this._src = val;
        this.srcdoc = this.sanitizer.bypassSecurityTrustResourceUrl(val);
    }
    
    srcdoc: any;

    constructor(private sanitizer: DomSanitizer) { 
    }
}