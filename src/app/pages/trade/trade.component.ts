import { Component, OnInit } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { UserService } from 'src/app/core/services/user.service';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { User } from 'src/app/core/interfaces/user';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  user!: string | null;
  reviver!: User;
  receiver?: Observable<User>;
  proposer?: Observable<User>;
  receiverTradeItems?: TradeItem[];
  proposerTradeItems?: TradeItem[];

  constructor(
    private tradeItemOverviewService: TradeItemOverviewService,
    private userService: UserService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    let iets: User = JSON.parse(localStorage.getItem('activeUser') || '{}');
  }

  getTradeItems(id: number): Observable<TradeItem[]> {
    return this.tradeItemOverviewService.getUserTradeItems(id);
  }

  getUser(id: number): Observable<User> {
    return this.userService.getUser(id);
  }

  // getCurrentUser(): User {

  //   return this.accountService.;
  // }
}
