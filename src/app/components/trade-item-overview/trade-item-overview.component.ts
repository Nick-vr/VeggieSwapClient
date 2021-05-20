import { Component, OnInit, Input } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';

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

  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

  ngOnInit(): void {
    this.getData();
    this.cols = [
      { field: 'userFirstName', header: 'Name' },
      {
        field: 'resourceName',
        header: 'Resources',
        imageUrl: 'resourceImageUrl',
      },
      { field: 'amount', header: 'Amount' },
    ];
  }

  getData() {
    this.tradeItemOverviewService
      .getTradeItems()
      .subscribe((x) => (this.tradeItems = x));
  }

  getTradeItems() {
    return this.tradeItems;
  }
}
