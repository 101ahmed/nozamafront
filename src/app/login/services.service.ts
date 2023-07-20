import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl: string = "";
  constructor(private http: HttpClient) { }

  sendResetPasswordLink(email:string){
    return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`, {})
  }

  resetPassword(resetPassWordObj: PageResetPasswordComponent){
    return this.http.post<any>(`$(this.baseUrl)/reset-password`, resetPassWordObj)
  }
}
