import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../core/interfaces/user'
import { UserService } from '../../core/services/user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  getUser(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  save(): void{
    this.userService.updateUser(this.user)
      .subscribe()
  }
}
