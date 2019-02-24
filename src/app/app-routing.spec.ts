import { TestBed, async, fakeAsync, ComponentFixture, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { SpyLocation } from '@angular/common/testing';
import { Router } from '@angular/router';
import { appRoutes } from "./app-routing.module";
import { AppModule } from "./app.module";
import { Location }           from '@angular/common';
import { HttpTestingController } from "@angular/common/http/testing";

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let router: Router;
let location: SpyLocation;

xdescribe('AppComponent & RouterTestingModule', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        //declarations:[ AppComponent ],
        imports: [ 
            RouterTestingModule.withRoutes(appRoutes),
            AppModule, HttpTestingController
        ],
        providers: [
          
        ]
      })
      .compileComponents();
    }));
  
    //todo lazy loading not work yet
    it('should navigate to "website-example" immediately', fakeAsync(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        const injector = fixture.debugElement.injector;
        location = injector.get(Location) as SpyLocation
        router = injector.get(Router);
        router.initialNavigation();
        tick(); // wait for async data to arrive
        expect(location.path()).toEqual('/website-example', 'after initialNavigation()');
        //expectElementOf(DashboardComponent);
    }));
});