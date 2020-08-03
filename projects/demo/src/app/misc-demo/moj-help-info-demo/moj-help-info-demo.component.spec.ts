import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojHelpInfoDemoComponent } from './moj-help-info-demo.component';

describe('MojHelpInfoDemoComponent', () => {
  let component: MojHelpInfoDemoComponent;
  let fixture: ComponentFixture<MojHelpInfoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojHelpInfoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojHelpInfoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
