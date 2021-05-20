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
  activeUser! : ActiveUser;

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

  // register(model: Register): Observable<any> {
  //   let url = 'https://localhost:44388/api/Account/Register';
  //   return this.httpClient.post(url, model).pipe(
  //     map((response: any) => {
  //       const user: User = response;
  //       if (user) {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.setCurrentUser(user);
  //       }
  //     })
  //   );
  // }

  setCurrentUser(activeUser: ActiveUser) {
    this.currentUser = activeUser;
    this.activeUser = activeUser;
  }

  getCurrentUser(): ActiveUser  {
    return this.activeUser;
  }

  logout() {
    localStorage.removeItem('activeUser');
    this.currentUser = undefined;
  }
}
