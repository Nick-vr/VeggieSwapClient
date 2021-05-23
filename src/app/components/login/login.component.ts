import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  currentUser: User | undefined;
  errorMessages: any | undefined;
  userId: number = 0;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (this.currentUser?.id) {
      this.userId = this.currentUser.id;
    }
  }

  login(): void {
    this.accountService.login(this.model).subscribe(
      () => {
        this.userId = 1;
      },
      (error) => {
        console.log(error);
        this.errorMessages = error.error;
      }
    );
    setTimeout(() => {
      this.router.navigate(['/settings']);
    }, 1000);
  }

  logout() {
    this.userId = 0;
    this.accountService.logout();
  }
}
