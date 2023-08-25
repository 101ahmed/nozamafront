import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePasswordComponent } from '../pages/change-password/change-password.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  private baseUrl: string = "";
  constructor(private http: HttpClient) { }

  changePassword(changePassWordObj: ChangePasswordComponent){
    return this.http.post<any>(`$(this.baseUrl)/change-password`, changePassWordObj)
  }
}
