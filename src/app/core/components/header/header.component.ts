import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchResult: undefined| Product[]
  constructor(
    private route: Router,
    private product: ProductsService
  ){}

  ngOnInit(): void { 
  }

  searchProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      // console.warn(element.value);
       this.product.searchProduct(element.value).subscribe((result)=> {
        console.warn(result);
        if(result.length > 5){
          result.length = length;
        }
        this.searchResult = result;
      })
    }
  }
  hideSearch(){
    this.searchResult = undefined;
  }
  submitSearch(val:string){
    console.warn(val)
  this.route.navigate([`search/${val}`]);
  }
  

}
