"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appRoutes = [
    //{ path: "", pathMatch: 'full', redirectTo: 'components-demo' },
    {
        path: "buttons", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./buttons-demo/buttons-demo.module"); }).then(function (am) { return am.ButtonsDemoModule; });
        }
    },
    {
        path: "components", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./components-demo/components-demo.module"); }).then(function (am) { return am.ComponentsDemoModule; });
        }
    },
    {
        path: "content-layout/wizard-demo", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./content-layout-demo/wizard-demo/wizard-demo.module"); }).then(function (am) { return am.WizardDemoModule; });
        }
    },
    {
        path: "content-layout/tabs-demo", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./content-layout-demo/tabs-visible-demo/tabs-visible-demo.module"); }).then(function (am) { return am.TabsVisibleDemoModule; });
        }
    },
    {
        path: "forms", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./forms-demo/forms-demo.module"); }).then(function (am) { return am.FormsDemoModule; });
        }
    },
    {
        path: "misc", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./misc-demo/misc-demo.module"); }).then(function (am) { return am.MiscDemoModule; });
        }
    },
    {
        path: "overlay", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./overlay-demo/overlay-demo.module"); }).then(function (am) { return am.OverlayDemoModule; });
        }
    },
    {
        path: "security", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./security-demo/security-demo.module"); }).then(function (am) { return am.SecurityDemoModule; });
        }
    },
    {
        path: "data/grid-demo", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./data-display-demo/grid/grid-demo.module"); }).then(function (am) { return am.GridDemoModule; });
        }
    },
    {
        path: "data/list-demo", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./data-display-demo/list-demo/list-demo.module"); }).then(function (am) { return am.ListDemoModule; });
        }
    },
    {
        path: "site", loadChildren: function () {
            return Promise.resolve().then(function () { return require("./demo-site-internal/demo-site-internal.module"); }).then(function (am) { return am.DemoSiteInternalModule; });
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { useHash: true })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map