import { Component, Input } from "@angular/core";


@Component({
    selector: "moj-list-item-ext",
    template: "<ng-content></ng-content>",
    host: {'[class.moj-list-item-ext-fixed]': 'fixed'}
})
export class MojListItemExtensionComponent {
    @Input() fixed: boolean = false;

}