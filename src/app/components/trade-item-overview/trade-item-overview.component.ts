import { Component, OnInit, Input } from '@angular/core';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss'],
})
export class TradeItemOverviewComponent implements OnInit {
  tradeItems: TradeItem[] = [];
  tradeItem!: TradeItem;
  cols!: any[];
  selectedTradeItem: TradeItem[] = [];
  userId!: number;
  CacheUser!: User;

  constructor(private tradeItemsService: TradeItemsService) {}

  ngOnInit(): void {
    this.CacheUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.getData();
    this.cols = [
      { field: 'userFirstName', header: 'Name' },
      {
        field: 'resourceName',
        header: 'Resources',
        imageUrl: 'resourceImageUrl',
      },
      { field: 'amount', header: 'Amount' },
      { field: 'userPostalCode', header: 'Postalcode' },
    ];
  }

  getData() {
    this.tradeItemsService
      .getTradeItems()
      .subscribe((x) => (this.tradeItems = x.filter(x => x.resourceId !== 51 && x.userId !== this.CacheUser.id && x.amount > 0)));
  }

  getTradeItems() {
    return this.tradeItems;
  }
}
