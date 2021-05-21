import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;
  errorMessages: any | undefined;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {}

  login(): void {
    this.accountService.login(this.model).subscribe(
      (x) => {
        // Happy path -> Database request was succesful
        this.loggedIn = true;
      },
      (error) => {
        // Error handling -> Something went wrong. Display message to user
        console.log(error);
        this.errorMessages = error.error;
      });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }
}
