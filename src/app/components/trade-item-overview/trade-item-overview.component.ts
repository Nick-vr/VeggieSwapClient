import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem } from 'src/app/core/interfaces/TradeItem';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
@Injectable()
export class TradeItemOverviewComponent implements OnInit {

  data: TradeItem[] = [];

  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

    ngOnInit(): void {
  }

  getData() {
      this.tradeItemOverviewService.getTradeItems().subscribe(x => this.data = x);
      console.log(this.data);
  }

  //   getData(){
  //   fetch(this.url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }
}
