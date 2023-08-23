import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PaymentService } from '../../services/payment.service';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  data = new BehaviorSubject<Product[]>([]);
  selectedValue: { [productId: number]: number } = {};
  subTotal = 0;
  shipping = 8;
  total = 0;

  constructor(
    private productsService: ProductsService,
    private payment: PaymentService,
    private router: Router
  ) {
    this.data.subscribe(products => {
      for (const product of products) {
        this.selectedValue[product.id] = 1;
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  calculate() {
    this.subTotal = 0;
    for (const productCart of this.data.getValue()) {
      if (this.selectedValue[productCart.id]) {
        const quantity = this.selectedValue[productCart.id];
        const productTotal = productCart.price * quantity;
        this.subTotal += productTotal;
      }
    }
    this.total = this.subTotal + this.shipping;
  }

  calculateResult(price: number, quantity: number): number {
    return price * quantity;
  }

  calculateCartTotal(products: Product[]): number {
    let total = 0;
    for (const product of products) {
      const quantity = this.selectedValue[product.id] || 1;
      total += product.price * quantity;
    }
    return total;
  }

  getData() {
    this.productsService.getCart().subscribe(res => {
      this.data.next(res);
      this.calculate();
    });
  }

  delete(product: Product) {
    if (confirm('Voulez-vous supprimer le produit ?')) {
      this.productsService.deleteProductCartById(product.id)
        .subscribe(() => {
          this.getData();
        });
    }
  }

  goToPayment() {
    const total = this.calculateCartTotal(this.data.getValue());
    this.payment.totalAmount = total;
    this.router.navigate(['payment']);
  }
}
