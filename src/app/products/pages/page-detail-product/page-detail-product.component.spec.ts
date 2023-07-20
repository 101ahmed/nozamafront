import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailProductComponent } from './page-detail-product.component';

describe('PageDetailProductComponent', () => {
  let component: PageDetailProductComponent;
  let fixture: ComponentFixture<PageDetailProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDetailProductComponent]
    });
    fixture = TestBed.createComponent(PageDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
