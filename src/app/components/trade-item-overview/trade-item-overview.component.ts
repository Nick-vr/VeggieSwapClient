import { Component, OnInit, Input } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem, Resource } from 'src/app/core/interfaces/TradeItem';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
export class TradeItemOverviewComponent implements OnInit {

  tradeItems: any[] = [];
  resources: Resource[] = [];
  cols!: any[];

  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

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
