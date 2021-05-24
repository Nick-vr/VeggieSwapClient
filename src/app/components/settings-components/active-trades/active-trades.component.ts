import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/core/interfaces/trade';
import { User } from 'src/app/core/interfaces/user';
import { TradeService } from 'src/app/core/services/trade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-active-trades',
  templateUrl: './active-trades.component.html',
  styleUrls: ['./active-trades.component.scss'],
})
export class ActiveTradesComponent implements OnInit {
  TradeList: Trade[] = [];
  FullList: Trade[] = [];
  CacheUser!: User;
  listItems: string[];
  selectedItem: string = 'Trades to accept';
  constructor(private tradeService: TradeService, private router: Router) {
    this.listItems = [
      'Proposed Trades',
      'Trades to Accept',
      'Completed Trades',
      'All Trades',
    ];
  }

  ngOnInit(): void {
    this.CacheUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.tradeService
      .getTradesFromSelectedUser(this.CacheUser.id)
      .subscribe((x) => {
        this.FullList = x;
        this.TradeList = x.filter(
          (x) => x.activeUserId == this.CacheUser.id && x.completed == false
        );
      });
  }
  editList() {
    console.log('ok edit list');
    if (this.selectedItem.includes('Proposed')) {
      this.TradeList = [];
      this.TradeList = this.FullList.filter(
        (x) => x.activeUserId == this.CacheUser.id && x.completed == false
      );
    } else if (this.selectedItem.includes('Accept')) {
      this.TradeList = [];
      this.TradeList = this.FullList.filter(
        (x) => x.activeUserId != this.CacheUser.id && x.completed == false
      );
    } else if (this.selectedItem.includes('Completed')) {
      this.TradeList = [];
      this.TradeList = this.FullList.filter((x) => x.completed == true);
    } else if (this.selectedItem.includes('All')) {
      this.TradeList = this.FullList;
    }
  }

  handleClick() {
    console.log('fezfzefez');
    this.router.navigate(['/trade/']);
  }
}
