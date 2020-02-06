"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonsExampleComponent = /** @class */ (function () {
    function ButtonsExampleComponent() {
        this.buttonToggleItems = [
            { id: 1, text: 'תוכנית' },
            { id: 2, text: 'גוש', },
            { id: 3, text: 'פוליגון' },
            { id: 4, iconClass: 'fas fa-plus' }
        ];
    }
    ButtonsExampleComponent.prototype.onToggleChange = function (value) {
        console.log(value);
    };
    ButtonsExampleComponent = __decorate([
        core_1.Component({
            selector: 'moj-buttons-example',
            templateUrl: './buttons-example.component.html'
        })
    ], ButtonsExampleComponent);
    return ButtonsExampleComponent;
}());
exports.ButtonsExampleComponent = ButtonsExampleComponent;
//# sourceMappingURL=buttons-example.component.js.map