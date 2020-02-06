import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojLoadingDemoComponent } from './moj-loading-demo.component';

describe('MojLoadingDemoComponent', () => {
  let component: MojLoadingDemoComponent;
  let fixture: ComponentFixture<MojLoadingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojLoadingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojLoadingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
