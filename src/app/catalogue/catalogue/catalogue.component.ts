import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  products: any[] = []; // Utilisation d'un tableau de type any pour représenter les produits
  selectedCategory: string = 'all';
  selectedPriceRange: string = 'all';
  categories: string[] = ['all', 'books', 'dvd', 'cd', 'games'];
  priceRanges: string[] = ['all', '0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70'];
  filteredProducts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const categoryMatch = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      const priceMatch = this.selectedPriceRange === 'all' || this.isPriceInRange(product.price, this.selectedPriceRange);
      return categoryMatch && priceMatch;

    })
  }
  
  isPriceInRange(price: number, priceRange: string): boolean { 
    const [min, max] = priceRange.split('-').map((value) => parseFloat(value));
    return price >= min && price <= max;

  }

  resetFilters() {
    this.selectedCategory = 'all';
    this.selectedPriceRange = 'all';
    this.applyFilters();

  }

  addToCart(product: Product) {
  // a faire 
  }
}
