import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../../models/orders';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent {

  @Input() id!: number;
  
  order$!: Observable<Orders>;
  
  
  constructor(
    private ordersService : OrdersService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.order$ = this.ordersService.getOrderById(this.id)
  }

  goToOrdersList() : void{
    this.router.navigate(['/', 'orders', 'list'])
  }

  updateOrder(order: Orders): void{
    this.ordersService.putOrder({...order, id: this.id})
    .subscribe((res: Orders): void => {
        this.goToOrdersList();
      });
  }
}
