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
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var MainTab3Component = /** @class */ (function () {
    function MainTab3Component(mojTabsService, route) {
        this.mojTabsService = mojTabsService;
        this.route = route;
        this.buttonStyle = moj_ng_1.ButtonStyle;
        this.id = this.route.snapshot.params['id'];
        this.initMainTab();
    }
    MainTab3Component.prototype.initMainTab = function () {
        this.tab = new moj_ng_1.MojTab("/bo-example/root/tab3", rxjs_1.of('טאב 3'));
        this.tab = this.mojTabsService.addOrGetTab(this.tab, null, this.closeTab);
    };
    MainTab3Component.prototype.ngOnInit = function () { };
    MainTab3Component.prototype.ngOnDestroy = function () {
    };
    MainTab3Component.prototype.closeTab = function (t) {
        console.log("tab3 closed");
    };
    MainTab3Component = __decorate([
        core_1.Component({
            selector: 'app-main-tab3',
            template: "\n    <p>\n      <moj-button\n        buttonStyle=\"{{ buttonStyle.Attention }}\"\n        [textKey]=\"'\u05E4\u05EA\u05D7 \u05D7\u05DC\u05D5\u05DF \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8'\"\n        [tooltip]=\"'sdfsdfsdfsdf sdf sdf '\"\n      ></moj-button>\n    </p>\n    <label>{{ id }}</label>\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [moj_ng_1.MojTabsService, router_1.ActivatedRoute])
    ], MainTab3Component);
    return MainTab3Component;
}());
exports.MainTab3Component = MainTab3Component;
//# sourceMappingURL=main-tab3.component.js.map