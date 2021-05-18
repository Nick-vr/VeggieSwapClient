import { Component, OnInit } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem, Resource } from 'src/app/core/interfaces/TradeItem';

@Component({
  selector: 'app-trade-items',
  templateUrl: './trade-items.component.html',
  styleUrls: ['./trade-items.component.scss']
})
export class TradeItemsComponent implements OnInit {

  tradeItems: any[] = [];
  resources: Resource[] = [];
  cols!: any[];

  constructor(private tradeItemOverviewService: TradeItemOverviewService) { }

  ngOnInit(): void {
    this.getData();
    this.cols = [
        { field: 'userFirstName', header: 'Name' },
        { field: 'resourceName', header: 'Resources', imageUrl: 'resourceImageUrl' },
        { field: 'amount', header: 'Amount' }
    ];
  }


  getData() {
      this.tradeItemOverviewService.getTradeItems().subscribe(x => this.tradeItems = x);
  }

  getResources() {
    this.tradeItems.forEach(element => {
        if (!this.resources.includes(element.resource)) {
          this.resources.push(element.resource);
        }
    });
    return this.resources;
  }

  getTradeItems() {
    return this.tradeItems;
  }
}
