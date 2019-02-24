import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { MojTranslateLoader } from './moj-ng/shared/moj-translate-loader';
import { APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app-routing.module';
import { MockUtilsService } from '../testing/mock-utils.service';


xdescribe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new MojTranslateLoader(http),
            deps: [HttpClient]
          }
        })
      ],
      providers:[
        TranslateService,
        MockUtilsService,
        {
            provide: APP_INITIALIZER,
            useFactory: (utils: MockUtilsService) => () => utils.initialize(environment.configFile),
            deps: [MockUtilsService],
            multi: true
        }
      ]
    }).compileComponents();
  }));

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed - force APP_INITIALIZER
    await TestBed.get(MockUtilsService).donePromise;
  });

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should set default translate to TranslateService', async(() => {
    let translateService = fixture.componentInstance.translate;
    expect(translateService.defaultLang).toBeTruthy();
  }));

  it('APP_INITIALIZER should initial on app load', async(() => {
      let utilsService = TestBed.get(MockUtilsService);
      expect(utilsService.isInitialized).toBe(true, 'utils.initialize called');
  }));
});
