import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasCartComponent } from './off-canvas-cart.component';

describe('OffCanvasCartComponent', () => {
  let component: OffCanvasCartComponent;
  let fixture: ComponentFixture<OffCanvasCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffCanvasCartComponent]
    });
    fixture = TestBed.createComponent(OffCanvasCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
