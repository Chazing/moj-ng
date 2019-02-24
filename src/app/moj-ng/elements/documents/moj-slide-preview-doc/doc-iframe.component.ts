import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "doc-iframe",
    template: `<style>:host { display:block; } iframe { width: inherit; height: inherit; border: none; }</style>
                <iframe *ngIf="src" class="doc-preview" [src]="srcdoc"></iframe>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocIframeComponent {
    @Input()
    src: string;
    srcdoc: any;

    constructor(private sanitizer: DomSanitizer) { 
    }

    ngOnInit() {
        this.srcdoc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }

}