import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojExpansionPanelDemoComponent } from './moj-expansion-panel-demo.component';

describe('MojExpansionPanelDemoComponent', () => {
  let component: MojExpansionPanelDemoComponent;
  let fixture: ComponentFixture<MojExpansionPanelDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojExpansionPanelDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojExpansionPanelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
