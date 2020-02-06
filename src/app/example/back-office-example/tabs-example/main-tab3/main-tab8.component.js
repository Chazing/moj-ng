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
var moj_ng_1 = require("../../../../moj-ng");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var MainTab8Component = /** @class */ (function () {
    function MainTab8Component(mojTabsService, route) {
        this.mojTabsService = mojTabsService;
        this.route = route;
        this.initMainTab();
    }
    MainTab8Component.prototype.initMainTab = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            var id = +param.get("id");
            _this.tab = new moj_ng_1.MojTab('/bo-example/root/tab8/' + id, rxjs_1.of('טאב 8' + ' ' + id));
            var sideMenuItems = [
                { url: 'sub1', title$: rxjs_1.of('טאב משני 1') },
                { url: 'sub2', title$: rxjs_1.of('טאב משני 2') },
                { url: 'sub3', title$: rxjs_1.of('טאב משני 3') }
            ];
            _this.tab.sideMenuItems = sideMenuItems;
            _this.tab = _this.mojTabsService.addOrGetTab(_this.tab);
        });
    };
    MainTab8Component.prototype.ngOnInit = function () { };
    MainTab8Component = __decorate([
        core_1.Component({
            selector: 'app-main-tab8',
            template: "\n    <p>\n      <input type=\"text\" />\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [moj_ng_1.MojTabsService, router_1.ActivatedRoute])
    ], MainTab8Component);
    return MainTab8Component;
}());
exports.MainTab8Component = MainTab8Component;
//# sourceMappingURL=main-tab8.component.js.map