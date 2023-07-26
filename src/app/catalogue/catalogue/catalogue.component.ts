import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
    private router: Router
    ) { }

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
    });
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

  @ViewChild('productCards') productCardsRef!: ElementRef;

  private maxHeight = 0;

  getMaxDescriptionHeight(): number {
    return this.maxHeight;
  }

  // Utilisez l'événement de survol pour ajuster la hauteur de la description
  @HostListener('window:resize', ['$event'])
  @HostListener('window:mouseover', ['$event'])
  onWindowResize(event: MouseEvent): void {
    this.calculateMaxHeight();
  }

  private calculateMaxHeight(): void {
    const productCards: HTMLElement = this.productCardsRef.nativeElement;
    const cards: NodeListOf<HTMLElement> = productCards.querySelectorAll('.product-card');

    cards.forEach((card) => {
      const description: HTMLElement | null = card.querySelector('.description');

      if (description) {
        description.style.maxHeight = 'none'; // Réinitialise la hauteur pour calculer la vraie hauteur
        const descriptionHeight = description.clientHeight;
        description.style.maxHeight = ''; // Réinitialise la hauteur pour la suite de l'affichage
        if (descriptionHeight > this.maxHeight) {
          this.maxHeight = descriptionHeight;
        }
      }
    });
  }

  addToCart(product: Product) {
    // a faire 
    this.productsService.postProductInCart(product)
    .subscribe((res) => { this.goToCatalogue();
    });
    }

  goToCatalogue(){
    this.router.navigate(['/','catalogue']);
  }
}
