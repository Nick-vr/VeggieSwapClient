import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user';
import { TradeItem } from '../../core/interfaces/tradeItem';
import { UserService } from '../../core/services/user.service';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user!: User;
  tradeItems?: TradeItem[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private tradeItemsService: TradeItemsService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getTradeItemsFromSelectedUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }

  getTradeItemsFromSelectedUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tradeItemsService
      .getTradeItemsFromSelectedUser(id)
      .subscribe((tradeItems) => (this.tradeItems = tradeItems));
  }
}
