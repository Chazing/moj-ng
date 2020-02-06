"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_module_1 = require("./app.module");
var common_1 = require("@angular/common");
var testing_3 = require("@angular/common/http/testing");
var comp;
var fixture;
var router;
var location;
xdescribe('AppComponent & RouterTestingModule', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            //declarations:[ AppComponent ],
            imports: [
                testing_2.RouterTestingModule.withRoutes(app_routing_module_1.appRoutes),
                app_module_1.AppModule, testing_3.HttpTestingController
            ],
            providers: []
        })
            .compileComponents();
    }));
    //todo lazy loading not work yet
    it('should navigate to "website-example" immediately', testing_1.fakeAsync(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        var injector = fixture.debugElement.injector;
        location = injector.get(common_1.Location);
        router = injector.get(router_1.Router);
        router.initialNavigation();
        testing_1.tick(); // wait for async data to arrive
        expect(location.path()).toEqual('/website-example', 'after initialNavigation()');
        //expectElementOf(DashboardComponent);
    }));
});
//# sourceMappingURL=app-routing.spec.js.map