import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem, Resource } from 'src/app/core/interfaces/TradeItem';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
@Injectable()
export class TradeItemOverviewComponent implements OnInit {

  tradeItems: any[] = [];
  resources: Resource[] = [];
  loading!: boolean;
  totalRecords!: number

  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

  ngOnInit(): void {
      this.getData();
  }

  clear(table: Table) {
      table.clear();
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
