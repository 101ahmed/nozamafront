import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  
})
export class SearchComponent implements OnInit{


  searchResult!: Product[]
  constructor(
    private activeRoute : ActivatedRoute,
    private product : ProductsService
  ){}

  ngOnInit(): void {
    let query  = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProduct(query).subscribe((result) =>{
        this.searchResult =  result;
    })
    
  }

}
