import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDemoComponent } from './progress-demo.component';

describe('ProgressDemoComponent', () => {
  let component: ProgressDemoComponent;
  let fixture: ComponentFixture<ProgressDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
