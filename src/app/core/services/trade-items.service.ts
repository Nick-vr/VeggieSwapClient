import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeItem } from '../interfaces/tradeItem';

@Injectable({
  providedIn: 'root'
})
export class TradeItemsService {

  private tradeItemEndpoint = 'https://localhost:44360/api/TradeItem'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getTradeItemsFromSelectedUser(id: number): Observable<TradeItem[]>{
    const url = `${this.tradeItemEndpoint}/${id}`
    return this.http.get<TradeItem[]>(url, this.httpOptions);
  }
}
