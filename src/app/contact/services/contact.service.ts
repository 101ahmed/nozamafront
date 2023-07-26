import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private backendUrl = 'BACKEND_URL'; // Replace with the actual backend URL

  constructor(private http: HttpClient) { }

  // Method to send the form data to the backend
  sendFormData(formData: any) {
    return this.http.post(this.backendUrl + '/submit-form', formData);
   // { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
