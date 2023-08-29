import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReturnsComponent } from './page-returns.component';

describe('PageReturnsComponent', () => {
  let component: PageReturnsComponent;
  let fixture: ComponentFixture<PageReturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageReturnsComponent]
    });
    fixture = TestBed.createComponent(PageReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
