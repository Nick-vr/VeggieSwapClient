import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem, Resource } from 'src/app/core/interfaces/TradeItem';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
@Injectable()
export class TradeItemOverviewComponent implements OnInit {

  tradeItems: any[] = [];

  resources: any[] = [];

  loading: boolean = false;

  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

  ngOnInit(): void {
      this.getData();
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
