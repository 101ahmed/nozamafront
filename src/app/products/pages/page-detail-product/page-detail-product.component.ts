import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from 'src/environments';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

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
    private service:ProductsService,
    private router: Router,
    private productsService: ProductsService,
    private fb: FormBuilder,
    
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

  affiche = false
  scrollTo() {
    this.affiche = ! this.affiche;
  }

  show = false;
  toggle() {
    this.show = ! this.show;
  }

  display = false;
  drop() {
    this.display = ! this.display;
  }

  addToCart(product: Product) {
    // a faire 
    this.productsService.postProductInCart(product)
    .subscribe((res) => {this.goToCatalogue();});
  }
  
  goToCatalogue(){
      this.router.navigate(['/','catalogue']);
  }

  //rating
  

  ratingCount=0;
  totalRating=0
 
  finalRating:any;
  ratingControl=new FormControl(0);

  getRating(){
    this.ratingCount++;
    this.totalRating +=this.ratingControl?.value || 0;
    //console.log(this.ratingControl.value);
    this.finalRating= (this.totalRating/this.ratingCount).toFixed(1);
    
  }
}
