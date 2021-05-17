import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveUser } from '../ActiveUser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44360/api/account';
  currentUser?: ActiveUser;
  constructor(private httpClient: HttpClient) { }

  login(model: any): Observable<any> {
    let url = `${this.baseUrl}/login`;

    return this.httpClient.post(url, model).pipe(
      map((response: any) => {
        const activeUser: ActiveUser = response;
        if (activeUser) {
          localStorage.setItem('activeUser', JSON.stringify(activeUser));
          this.setCurrentUser(activeUser);
        }
      })
    );
  }

  setCurrentUser(activeUser: ActiveUser) {
    this.currentUser = activeUser;
  }

  getCurrentUser(): ActiveUser | undefined {
    if (this.currentUser) {
      return this.currentUser;
    }

    return undefined;
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser = undefined;
  }
}
