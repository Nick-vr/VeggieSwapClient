import { Component, OnInit } from '@angular/core';
import { TradeItemOverviewService } from 'src/app/core/services/trade-item-overview.service';
import { UserService } from 'src/app/core/services/user.service';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { User } from 'src/app/core/interfaces/user';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { PickListModule } from 'primeng/picklist';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  
  //ID from localstorage cached User (logged in user)
  CacheUserId! : number;
  // Users objects, collected from the database
  user! : User;
  receiver!:  User;
  // Users - tradeitem lists (what they sell), collected from the database
  userTradeItems?: TradeItem[];
  receiverTradeItems?: TradeItem[];
  // Lists of proposed tradeitems, picked on the page, to be returned to the backend
  userProposedItems?: TradeItem[];
  receiverProposedItems?: TradeItem[];

  constructor(
    private tradeItemOverviewService: TradeItemOverviewService, 
    private userService: UserService, 
    private route: ActivatedRoute,
    
    private button: ButtonModule,
    private picklist: PickListModule,
    ) { }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.getUsers();
    this.getTradeItemLists();
  }
  
  getCurrentUserId() {
    let CacheUser: User = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.CacheUserId = CacheUser.id || 0;
  }
  
  getUsers() {
    this.userService.getUser(this.CacheUserId || 0).subscribe(x => (this.user = x));
    this.userService.getUser(Number(this.route.snapshot.paramMap.get('id'))).subscribe(x => (this.receiver = x));
  }

  getTradeItemLists()  { 
   this.tradeItemOverviewService.getUserTradeItems(this.user.id || 0).subscribe(x => (this.userTradeItems = x));
   this.tradeItemOverviewService.getUserTradeItems(this.receiver.id || 0).subscribe(x => (this.userTradeItems = x));
  }
}
