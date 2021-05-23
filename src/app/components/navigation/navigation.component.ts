import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { ImgPath } from '../../app.component';
import { Router } from '@angular/router';

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
  loggedInUser?: User;
  userId: number = 0;

  constructor(private accountService: AccountService, private router: Router) {
    this.VeggiesImgPath = `${ImgPath}/veggies`;
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    if (this.loggedInUser?.id) {
      this.userId = this.loggedInUser.id;
    }
  }

  logout() {
    this.accountService.logout();
    this.userId = 0;
    this.router.navigate(['/home']);
  }
}
