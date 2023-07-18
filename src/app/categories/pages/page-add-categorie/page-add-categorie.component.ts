import { Component } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-categorie',
  templateUrl: './page-add-categorie.component.html',
  styleUrls: ['./page-add-categorie.component.scss']
})
export class PageAddCategorieComponent {
  constructor(
    private categoryService: CategoriesService,
    private router: Router
  ) {
  }

  createCategory(category: Categories) {
    this.categoryService.postCategory(category)
      .subscribe((res) => {
        this.goToCategoriesList();
      });
  }

  goToCategoriesList() {
    this.router.navigate(['/', 'categories', 'list']);
  }

}
