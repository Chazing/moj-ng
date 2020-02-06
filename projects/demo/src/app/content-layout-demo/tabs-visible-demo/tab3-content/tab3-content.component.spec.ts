import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3ContentComponent } from './tab3-content.component';

describe('Tab3ContentComponent', () => {
  let component: Tab3ContentComponent;
  let fixture: ComponentFixture<Tab3ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
