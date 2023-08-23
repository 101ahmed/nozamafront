import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../../models/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {
  orders$: Observable<Orders[]> = this.ordersService.getOrders();
  constructor(
    private ordersService: OrdersService, 
  ){}

  remove(order: Orders): void{
    if(confirm("Voulez vous supprimer la commande ?"))
    
    this.ordersService.deleteOrder(order)
    .subscribe((): void => {
      this.orders$ = this.ordersService.getOrders();
    })
  }
  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders();
  }

   //search products
   searchText: string = '';
   onSearchTextEntered(searchValue: string){
     this.searchText =  searchValue;
     console.log(this.searchText)
   }

}
