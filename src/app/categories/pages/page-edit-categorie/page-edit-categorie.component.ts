import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-categorie',
  templateUrl: './page-edit-categorie.component.html',
  styleUrls: ['./page-edit-categorie.component.scss']
})
export class PageEditCategorieComponent implements OnInit {
  
  @Input() id!: number;

  category$!: Observable<Categories>;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
      
    this.category$ = this.categoriesService.getCategoryById(this.id);
  }
  
  goToCategoriesList() : void {
  this.router.navigate(['/','categories','list']);
}

  updateProduct(category: Categories) : void {

  this.categoriesService.putCategory({...category, id: this.id}).subscribe(
    (res: Categories) : void => {
      this.goToCategoriesList();
    });

  
    
    }

}
