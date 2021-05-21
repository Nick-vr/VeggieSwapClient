import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeItemOverviewService {

  private endpoint = 'https://localhost:44360/api/TradeItem'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTradeItems(): Observable<TradeItem[]> {
    let data = this.http.get<TradeItem[]>(this.endpoint);
    return data;
  }

  getUserTradeItems(id: number): Observable<TradeItem[]> {
    const url = `${this.endpoint}/${id}`
    return this.http.get<TradeItem[]>(url, this.httpOptions);
  }

}
