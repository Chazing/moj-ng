import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2ContentComponent } from './tab2-content.component';

describe('Tab2ContentComponent', () => {
  let component: Tab2ContentComponent;
  let fixture: ComponentFixture<Tab2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
