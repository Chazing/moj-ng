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
var angular2_text_mask_1 = require("angular2-text-mask");
var moj_ng_1 = require("@moj/moj-ng");
var moj_ng_2 = require("src/app/moj-ng");
var TextboxDemoComponent = /** @class */ (function () {
    function TextboxDemoComponent() {
        //pattern = "pct[0-9]{5}$";
        this.pattern = moj_ng_2.ValidationPatterns.EnglishAndNumbersPattern;
        this.elSize = moj_ng_1.ElementSize;
        this.pctMask = new angular2_text_mask_1.TextMaskConfig();
        this.enums = enums_1.ENUMS;
    }
    TextboxDemoComponent.prototype.ngOnInit = function () {
        this.setPctMaskConfig();
    };
    TextboxDemoComponent.prototype.setPctMaskConfig = function () {
        this.pctMask.mask = ['P', 'C', 'T', '/', /[A-Z]/, /[A-Z]/, '2', '0', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.pctMask.keepCharPositions = false;
        this.pctMask.showMask = true;
        this.pctMask.guide = true;
        this.pctMask.placeholderChar = '\u2000';
    };
    TextboxDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-textbox-demo',
            templateUrl: './textbox-demo.component.html',
            styleUrls: ['./textbox-demo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TextboxDemoComponent);
    return TextboxDemoComponent;
}());
exports.TextboxDemoComponent = TextboxDemoComponent;
//# sourceMappingURL=textbox-demo.component.js.map