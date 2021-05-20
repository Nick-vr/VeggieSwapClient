import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentUser?: User;
  loggedInUserId?: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    console.log(loggedInUser);
  }

  getUser(): void {
    //const id =
  }

  // save(): void {
  //   this.userService.updateUser(this.user).subscribe();
  // }
}
