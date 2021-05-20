import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentUser?: User;
  firstName?: string;

  items?: MenuItem[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];
  }

  getUser(): void {
    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    this.userService
      .getUser(loggedInUser.id)
      .subscribe((currentUser) => (this.currentUser = currentUser));
  }

  // save(): void {
  //   this.userService.updateUser(this.user).subscribe();
  // }
}
