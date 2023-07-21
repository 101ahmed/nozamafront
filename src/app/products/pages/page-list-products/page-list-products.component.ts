import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.scss']
})
export class PageListProductsComponent implements OnInit{
  

  //products$: Observable<Product[]> = this.productsService.data$;
  isLoading = true;
  data = new BehaviorSubject<Product[]>([]);

  constructor(
    private productsService: ProductsService
  ) {

  }

  ngOnInit(): void {
    this.getData();
    this.isLoading = true;

  }

  getData(){
    this.productsService.getProduct().subscribe((res => {this.data.next(res); this.isLoading=false}))
  }

  delete(product: Product) {
    if(confirm("Voulez vous supprimer le produit ?"))
    this.productsService.deleteProductById(product.id)
      .subscribe(() => {
        this.getData();
      });
  }
  
  //search products
  searchText: string = '';
  onSearchTextEntered(searchValue: string){
    this.searchText =  searchValue;
    console.log(this.searchText)
  }

  //filter products with category
  productCategory: string = 'All';
  onFilterCategory(data: string){
    this.productCategory = data;
    console.log(this.productCategory);
  }

}

