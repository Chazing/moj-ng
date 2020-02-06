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
var core_1 = require("@angular/core");
var moj_ng_1 = require("src/app/moj-ng");
var SlidingMenuDemoComponent = /** @class */ (function () {
    function SlidingMenuDemoComponent() {
        this.filterConfig = {
            categories: [
                new moj_ng_1.MojCategoryFilter("תיקים", null, [
                    new moj_ng_1.MojCategoryFilter("תיקי בית משפט מחוזי", null, [
                        new moj_ng_1.MojCategoryFilter("בימ\"ש", [
                            [{ name: "fld1", type: moj_ng_1.MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה" }],
                            [{ name: "fld2", type: moj_ng_1.MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                        ])
                    ])
                ])
            ]
        };
    }
    SlidingMenuDemoComponent.prototype.ngOnInit = function () {
    };
    SlidingMenuDemoComponent.prototype.filterMyData = function () {
    };
    SlidingMenuDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-sliding-menu-demo',
            templateUrl: './sliding-menu-demo.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SlidingMenuDemoComponent);
    return SlidingMenuDemoComponent;
}());
exports.SlidingMenuDemoComponent = SlidingMenuDemoComponent;
//# sourceMappingURL=sliding-menu-demo.component.js.map