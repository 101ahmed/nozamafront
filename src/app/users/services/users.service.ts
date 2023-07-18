import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private data: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  get data$(): Observable<User[]> {
    return this.data.asObservable();
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user);
  }

  deleteUserById(id : number): Observable<User> {
   return this.http.delete<User>(`http://localhost:3000/users/${id}`);
    }
}
