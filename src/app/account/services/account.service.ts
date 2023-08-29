import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePasswordComponent } from '../pages/change-password/change-password.component';
import { Adress } from '../pages/add-adresse/model/adress';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private data: BehaviorSubject<Adress[]> = new BehaviorSubject<Adress[]>([]);

  constructor(private http: HttpClient) { 
  }
  
  get data$(): Observable<Adress[]> {
    return this.data.asObservable();
  }
  changePassword(changePassWordObj: ChangePasswordComponent){
    return this.http.post<any>(`$(this.baseUrl)/change-password`, changePassWordObj)
  }

  postAdress(adress: Adress): Observable<Adress> {
    return this.http.post<Adress>('http://localhost:3000/adress', adress);
  }
}
