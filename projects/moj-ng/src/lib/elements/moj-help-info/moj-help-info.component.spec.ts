import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojHelpInfoComponent } from './moj-help-info.component';

describe('MojHelpInfoComponent', () => {
  let component: MojHelpInfoComponent;
  let fixture: ComponentFixture<MojHelpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojHelpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojHelpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
