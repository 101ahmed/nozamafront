import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private data: BehaviorSubject<Categories[]> = new BehaviorSubject<Categories[]>([]);

  constructor(
    private http: HttpClient
  ) { }


get data$(): Observable<Categories[]> {
  return this.data.asObservable();
}

getCategories(): Observable<Categories[]> {
  return this.http.get<Categories[]>('http://localhost:3000/categories');
}

getCategoryById(id: number): Observable<Categories> {
  return this.http.get<Categories>(`http://localhost:3000/categories/${id}`);
}

postCategory(category: Categories): Observable<Categories> {
  return this.http.post<Categories>('http://localhost:3000/categories', category);
}

putCategory(category: Categories): Observable<Categories> {
  return this.http.put<Categories>(`http://localhost:3000/categories/${category.id}`, category);
}

deleteCategoryById(id : number): Observable<Categories> {
 return this.http.delete<Categories>(`http://localhost:3000/categories/${id}`);
  }
}
