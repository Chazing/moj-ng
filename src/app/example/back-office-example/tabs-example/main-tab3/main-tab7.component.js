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
var core_2 = require("@ngx-translate/core");
var rxjs_1 = require("rxjs");
var MainTab7Component = /** @class */ (function () {
    function MainTab7Component(translate, mojTabsService) {
        this.translate = translate;
        this.mojTabsService = mojTabsService;
        this.initMainTab();
    }
    MainTab7Component.prototype.initMainTab = function () {
        this.tab = new moj_ng_1.MojTab("/bo-example/root/tab7", rxjs_1.of('טאב 7'));
        this.tab = this.mojTabsService.addOrGetTab(this.tab);
    };
    MainTab7Component.prototype.ngOnInit = function () {
    };
    MainTab7Component = __decorate([
        core_1.Component({
            selector: 'app-main-tab7',
            template: "\n    <p>\n      main-tab3 works!\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, moj_ng_1.MojTabsService])
    ], MainTab7Component);
    return MainTab7Component;
}());
exports.MainTab7Component = MainTab7Component;
//# sourceMappingURL=main-tab7.component.js.map