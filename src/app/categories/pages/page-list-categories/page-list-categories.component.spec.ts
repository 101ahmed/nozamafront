import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCategoriesComponent } from './page-list-categories.component';

describe('PageListCategoriesComponent', () => {
  let component: PageListCategoriesComponent;
  let fixture: ComponentFixture<PageListCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageListCategoriesComponent]
    });
    fixture = TestBed.createComponent(PageListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
