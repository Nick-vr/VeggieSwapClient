import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeItem } from '../interfaces/tradeItem';

  

@Injectable({ providedIn: 'root'})
export class TradeItemsService {

  private tradeItemEndpoint = 'https://localhost:44360/api/TradeItem'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('loggedInUser') || '{}').token
      }`,
    }),
  };

  constructor(private http: HttpClient) { }

  getTradeItemsFromSelectedUser(id: number): Observable<TradeItem[]>{
    const url = `${this.tradeItemEndpoint}/${id}`
    return this.http.get<TradeItem[]>(url, this.httpOptions);
  }

  getTradeFromUsers(id: number, id2: number): Observable<TradeItem[]>{
    const url = `${this.tradeItemEndpoint}/${id}/${id2}`
    return this.http.get<TradeItem[]>(url, this.httpOptions);
  }

  postTrade( trade? : TradeItem[]): Observable<any> {
    console.log(trade) ;
    
    console.log('Ik ben hard gecodeerd') ;
    return this.http.post<TradeItem[]>(this.tradeItemEndpoint, trade, this.httpOptions);
  }
  
    
  putTrade( trade? : TradeItem[]): Observable<TradeItem[]> {
    console.log(trade) ;
    console.log('Ik ben hard gecodeerd') ;
    return this.http.put<TradeItem[]>(this.tradeItemEndpoint, trade, this.httpOptions)
  }
  
  acceptTrade(id: number, id2: number): Observable<boolean>{
    const url = `${this.tradeItemEndpoint}/accept/${id}/${id2}`
    return this.http.get<boolean>(url, this.httpOptions);
  }

  cancelTrade(id: number, id2: number): Observable<boolean>{
    const url = `${this.tradeItemEndpoint}/cancel/${id}/${id2}`
    return this.http.get<boolean>(url, this.httpOptions);
  }

}
