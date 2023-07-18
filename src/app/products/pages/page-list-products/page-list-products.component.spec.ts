import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListProductsComponent } from './page-list-products.component';

describe('PageListProductsComponent', () => {
  let component: PageListProductsComponent;
  let fixture: ComponentFixture<PageListProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageListProductsComponent]
    });
    fixture = TestBed.createComponent(PageListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
