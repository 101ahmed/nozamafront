import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  simulateLogin(email: string, password: string): Observable<any> {
    if (email === 'test@example.com' && password === 'password') {
      return of({ success: true, token: 'fakeToken' });
    } else {
      return of({ success: false, message: 'Identifiants incorrects' });
    }
  }

  private apiUrl = 'http://localhost:3000'; // Remplace avec l'URL de ton backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  
}