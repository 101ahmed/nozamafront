import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-page-list-categories',
  templateUrl: './page-list-categories.component.html',
  styleUrls: ['./page-list-categories.component.scss']
})
export class PageListCategoriesComponent implements OnInit {
  isLoading = true;
  data = new BehaviorSubject<Categories[]>([]);

  constructor(
    private categoriesService: CategoriesService
  ) {

  }

  ngOnInit(): void {
    this.getData();
    this.isLoading = true;

  }

  getData(){
    this.categoriesService.getCategories().subscribe((res => {this.data.next(res); this.isLoading=false}))
  }

  delete(category: Categories) {
    this.categoriesService.deleteCategoryById(category.id)
      .subscribe(() => {
        this.getData();
      });
  }
  
  //search categories
  searchText: string = '';
  onSearchTextEntered(searchValue: string){
    this.searchText =  searchValue;
    console.log(this.searchText)
  }

  //filter products with category
  // productCategory: string = 'All';
  // onFilterCategory(data: string){
  //   this.productCategory = data;
  //   console.log(this.productCategory);
  // }

}
