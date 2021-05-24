import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../interfaces/trade';
import { TradeItem } from '../interfaces/tradeItem';

@Injectable({
  providedIn: 'root',
})
export class TradeService {
  private tradeItemEndpoint = 'https://localhost:44360/api/TradeOverview';
  private response: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('loggedInUser') || '{}').token
      }`,
    }),
  };

  constructor(private http: HttpClient) {}

  getTradesFromSelectedUser(id: number): Observable<Trade[]> {
    const url = `${this.tradeItemEndpoint}/${id}`;
    return this.http.get<Trade[]>(url, this.httpOptions);
  }
}
