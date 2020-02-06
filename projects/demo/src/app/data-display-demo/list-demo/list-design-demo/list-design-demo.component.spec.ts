import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesignDemoComponent } from './list-design-demo.component';

describe('ListDesignDemoComponent', () => {
  let component: ListDesignDemoComponent;
  let fixture: ComponentFixture<ListDesignDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesignDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesignDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
