import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-trade-item-overview',
  templateUrl: './trade-item-overview.component.html',
  styleUrls: ['./trade-item-overview.component.scss']
})
@Injectable()
export class TradeItemOverviewComponent implements OnInit {

  private url = 'https://localhost:44361/api/TradeItem'

  constructor(private http: HttpClient) {}

    ngOnInit(): void {
  }

  getData() {
      let data = this.http.get(this.url);
      console.log(data);
  }

  //   getData(){
  //   fetch(this.url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }
}
