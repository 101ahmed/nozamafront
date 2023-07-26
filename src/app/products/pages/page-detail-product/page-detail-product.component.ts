import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from 'src/environments';

@Component({
  selector: 'app-page-detail-product',
  templateUrl: './page-detail-product.component.html',
  styleUrls: ['./page-detail-product.component.scss']
})
export class PageDetailProductComponent implements OnInit {
  imageUrl = environment.ImageUrl;

  id:any
  data:any = {}
  product$!: Observable<Product>;


  constructor(
    private route:ActivatedRoute,
    private service:ProductsService
    ){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void{
    this.product$ = this.service.getProductById(this.id);

    
  }
  getProduct(){
    this.service.getProductById(this.id).subscribe(res =>{

    })
  }
}
