import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderDetailsComponent } from './page-order-details.component';

describe('PageOrderDetailsComponent', () => {
  let component: PageOrderDetailsComponent;
  let fixture: ComponentFixture<PageOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(PageOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
