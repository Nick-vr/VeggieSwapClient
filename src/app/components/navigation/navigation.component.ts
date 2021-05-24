import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { ImgPath } from '../../app.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  VeggiesImgPath: string;
  currentUser?: User;
  userId: number = 0;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router
  ) {
    this.VeggiesImgPath = `${ImgPath}/veggies`;
  }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(): void {
    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    this.userService.getUser(loggedInUser.id).subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.currentUser ? (this.userId = this.currentUser.id) : undefined;
    });
  }

  logout() {
    this.accountService.logout();
    this.userId = 0;
    this.router.navigate(['/home']);
  }
}
