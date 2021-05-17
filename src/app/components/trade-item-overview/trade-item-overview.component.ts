import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TradeItem } from 'src/app/core/interfaces/TradeItem';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
@Injectable()
export class TradeItemOverviewComponent implements OnInit {

  data?: TradeItem[] = [];

  constructor(private tradeItemOverview: TradeItemOverviewService) {}

    ngOnInit(): void {
  }

  getData(): void{
    this.tradeItemOverview.getTradeItems().subscribe(x => this.data == x);
    console.log(this.data);
  }

    // getData(){
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }
}
