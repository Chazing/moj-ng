import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffSwitchDemoComponent } from './on-off-switch-demo.component';

describe('OnOffSwitchDemoComponent', () => {
  let component: OnOffSwitchDemoComponent;
  let fixture: ComponentFixture<OnOffSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
