import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../models/orders';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {
  constructor(
    private fb:  FormBuilder,
    private ordersService : OrdersService,
    private router: Router
  ){}

  createOrder(order: Orders){
    this.ordersService.postOrder(order)
        .subscribe((res: Orders): void => {
          //console.log(res);
        this.goToOrderList();
    });
  }

  goToOrderList(): void{
    this.router.navigate(['/', 'orders', 'list'])
  }
}
