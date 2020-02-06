"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./../../enums");
var core_1 = require("@angular/core");
var moj_ng_1 = require("src/app/moj-ng");
var OnOffSwitchDemoComponent = /** @class */ (function () {
    function OnOffSwitchDemoComponent() {
        this.enums = enums_1.ENUMS;
        this.onOffSwitchType = moj_ng_1.onOffSwitchType;
    }
    OnOffSwitchDemoComponent.prototype.ngOnInit = function () {
    };
    OnOffSwitchDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-on-off-switch-demo',
            templateUrl: './on-off-switch-demo.component.html',
            styleUrls: ['./on-off-switch-demo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], OnOffSwitchDemoComponent);
    return OnOffSwitchDemoComponent;
}());
exports.OnOffSwitchDemoComponent = OnOffSwitchDemoComponent;
//# sourceMappingURL=on-off-switch-demo.component.js.map