import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToCatalogComponent } from './back-to-catalog.component';

describe('BackToCatalogComponent', () => {
  let component: BackToCatalogComponent;
  let fixture: ComponentFixture<BackToCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
