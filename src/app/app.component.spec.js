"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var core_1 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var testing_2 = require("@angular/common/http/testing");
var moj_translate_loader_1 = require("./moj-ng/shared/moj-translate-loader");
var core_2 = require("@angular/core");
var environment_1 = require("../environments/environment");
var testing_3 = require("@angular/router/testing");
var app_routing_module_1 = require("./app-routing.module");
var mock_utils_service_1 = require("../testing/mock-utils.service");
xdescribe('AppComponent', function () {
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                testing_3.RouterTestingModule.withRoutes(app_routing_module_1.appRoutes),
                testing_2.HttpClientTestingModule,
                core_1.TranslateModule.forRoot({
                    loader: {
                        provide: core_1.TranslateLoader,
                        useFactory: function (http) { return new moj_translate_loader_1.MojTranslateLoader(http); },
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            providers: [
                core_1.TranslateService,
                mock_utils_service_1.MockUtilsService,
                {
                    provide: core_2.APP_INITIALIZER,
                    useFactory: function (utils) { return function () { return utils.initialize(environment_1.environment.configFile); }; },
                    deps: [mock_utils_service_1.MockUtilsService],
                    multi: true
                }
            ]
        }).compileComponents();
    }));
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // until https://github.com/angular/angular/issues/24218 is fixed - force APP_INITIALIZER
                return [4 /*yield*/, testing_1.TestBed.get(mock_utils_service_1.MockUtilsService).donePromise];
                case 1:
                    // until https://github.com/angular/angular/issues/24218 is fixed - force APP_INITIALIZER
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create the app', testing_1.async(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should set default translate to TranslateService', testing_1.async(function () {
        var translateService = fixture.componentInstance.translate;
        expect(translateService.defaultLang).toBeTruthy();
    }));
    it('APP_INITIALIZER should initial on app load', testing_1.async(function () {
        var utilsService = testing_1.TestBed.get(mock_utils_service_1.MockUtilsService);
        expect(utilsService.isInitialized).toBe(true, 'utils.initialize called');
    }));
});
//# sourceMappingURL=app.component.spec.js.map