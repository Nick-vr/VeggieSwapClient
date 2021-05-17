import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { TradeItem, Resource } from 'src/app/core/interfaces/TradeItem';
import { LazyLoadEvent } from 'primeng/api';

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

  totalRecords!: number;
  cols!: any[];



  constructor(private tradeItemOverviewService: TradeItemOverviewService) {}

  ngOnInit(): void {
      this.getData();
        //  this.resources = [
        //     {name: "Asparagus", imageUrl: 'asparaguses.svg'},
        //     {name: "Anna Fali", imageUrl: 'artichokes.svg'},
        //     {name: "Asiya Javayant", imageUrl: 'asparaguses.svg'},
        //     {name: "Bernardo Dominic", imageUrl: 'asparaguses.svg'},
        //     {name: "Elwin Sharvill", imageUrl: 'artichokes.svg'},
        //     {name: "Ioni Bowcher", imageUrl: 'artichokes.svg'},
        // ];
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
