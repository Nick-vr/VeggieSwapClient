import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/core/interfaces/trade';
import { User } from 'src/app/core/interfaces/user';
import { TradeService } from 'src/app/core/services/trade.service';

@Component({
  selector: 'app-active-trades',
  templateUrl: './active-trades.component.html',
  styleUrls: ['./active-trades.component.scss'],
})
export class ActiveTradesComponent implements OnInit {
  TradeList: Trade[] = [];
  CacheUser!: User;
  constructor(private tradeService: TradeService) {}

  ngOnInit(): void {
    this.CacheUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.tradeService
      .getTradesFromSelectedUser(this.CacheUser.id)
      .subscribe((x) => {
        this.TradeList = x;
        console.log(this.TradeList);
      });
  }
  click() {
    console.log(this.TradeList);
  }
}
