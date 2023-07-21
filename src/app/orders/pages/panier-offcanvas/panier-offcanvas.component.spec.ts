import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierOffcanvasComponent } from './panier-offcanvas.component';

describe('PanierOffcanvasComponent', () => {
  let component: PanierOffcanvasComponent;
  let fixture: ComponentFixture<PanierOffcanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierOffcanvasComponent]
    });
    fixture = TestBed.createComponent(PanierOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
