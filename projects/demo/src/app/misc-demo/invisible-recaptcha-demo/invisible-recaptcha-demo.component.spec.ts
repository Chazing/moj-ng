import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisibleRecaptchaDemoComponent } from './invisible-recaptcha-demo.component';

describe('InvisibleRecaptchaDemoComponent', () => {
  let component: InvisibleRecaptchaDemoComponent;
  let fixture: ComponentFixture<InvisibleRecaptchaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisibleRecaptchaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisibleRecaptchaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
