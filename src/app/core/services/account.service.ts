import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Register } from '../interfaces/register';
import { map } from 'rxjs/operators';
import { UserToken } from '../interfaces/userToken';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:44360/api/account';

  currentUser?: User;

  constructor(private httpClient: HttpClient) {}

  login(model: User): Observable<any> {
    let url = `${this.baseUrl}/login`;

    return this.httpClient.post(url, model).pipe(
      map((response: any) => {
        const loggedInUser: User = response;
        if (loggedInUser) {
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          this.setCurrentUser(loggedInUser);
        }
      })
    );
  }

  register(model: Register): Observable<any> {
    let url = 'https://localhost:44360/api/Account/Register';
    return this.httpClient.post(url, model).pipe(
      map((response: any) => {
        const loggedInUser: User = response;
        if (loggedInUser) {
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          this.setCurrentUser(loggedInUser);
        }
      })
    );
  }

  setCurrentUser(loggedInUser: User) {
    this.currentUser = loggedInUser;
  }

  getCurrentUser(): User | undefined {
    if (this.currentUser) {
      return this.currentUser;
    }
    return undefined;
  }

  logout() {
    localStorage.removeItem('loggedInUser');

    this.currentUser = undefined;
  }
}
