import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userEndpoint = 'https://localhost:44360/api/User';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    const url = `${this.userEndpoint}/${id}`;
    return this.http.get<User>(url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userEndpoint);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userEndpoint, user, this.httpOptions);
  }

  updateUser(user?: User): Observable<any> {
    return this.http.put(this.userEndpoint, user, this.httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.userEndpoint}/${user.id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }
}
