import { Component, OnInit } from '@angular/core';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { User } from 'src/app/core/interfaces/user';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';

@Component({
  selector: 'app-vcoins',
  templateUrl: './vcoins.component.html',
  styleUrls: ['./vcoins.component.scss']
})
export class VcoinsComponent implements OnInit {

  CacheUser!: User;
  Vcoins?: TradeItem[];
  
  constructor(
    private tradeItemsService: TradeItemsService
  ) { }

  ngOnInit(): void {
    this.getUser()
    this.getVcoinsFromLoggedInUser();
  }

  getUser(): void {
    this.CacheUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }

  getVcoinsFromLoggedInUser(): void {
    const id = this.CacheUser.id
    this.tradeItemsService
      .getTradeItemsFromSelectedUser(id)
      .subscribe((x) => (this.Vcoins = x.filter(x => x.resourceId == 51 )));
  }
}
