import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user';
import { TradeItem } from '../../core/interfaces/tradeItem';
import { UserService } from '../../core/services/user.service';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})

export class TradeComponent implements OnInit {

  CacheUserId!: number;
  user!: User;
  receiver!: User;
  userTradeItems!: TradeItem[];
  receiverTradeItems!: TradeItem[];
  userProposedItems!: TradeItem[];
  receiverProposedItems!: TradeItem[];
  bothUsersProposedItems!: TradeItem[];

  constructor(
    private tradeItemsService: TradeItemsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCurrentUserId();
    this.getUsers();
    this.primengConfig.ripple = true;
    this.userProposedItems = [];
    this.receiverProposedItems = [];
    this.bothUsersProposedItems = [];
  }

  myFunction() {
    var element = document.getElementById("test2");
    element!.classList.add("testhidden");
  }

  getCurrentUserId() {
    let CacheUser: User = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'  );
    this.CacheUserId = CacheUser.id || 0;
  }

  getUsers() {
    this.userService.getUser(this.CacheUserId || 0).subscribe((x) => {
      this.user = x;
      this.getProposerItemList(x.id || 0);
    });

    this.userService
      .getUser(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((x) => {
        this.receiver = x;
        this.getReceiverItemList(x.id || 0);
      });
  }

  getProposerItemList(id: number) {
    this.tradeItemsService
      .getTradeItemsFromSelectedUser(this.user.id || 0)
      .subscribe((tradeItems) => (this.userTradeItems = tradeItems));
  }

  getReceiverItemList(id: number) {
    this.tradeItemsService
      .getTradeItemsFromSelectedUser(this.receiver.id || 0)
      .subscribe((tradeItems) => (this.receiverTradeItems = tradeItems));
  }

  proposeTrade() {
    
    if(this.makeBothUsersProposedItems())
    {
      console.log(this.bothUsersProposedItems)
      this.tradeItemsService.postTrade(this.bothUsersProposedItems);
      this.tradeItemsService.putTrade(this.bothUsersProposedItems);
    } else {  } // throw exception
    this.leavePage('/trade/'+this.user?.id, false)
  }

  makeBothUsersProposedItems(): boolean {
    if(this.receiverProposedItems.length != 0 && this.userProposedItems.length != 0)
    {
      this.receiverProposedItems.forEach(element => {
        this.bothUsersProposedItems.push(element);
      });
      this.userProposedItems.forEach(element => {
        this.bothUsersProposedItems.push(element);
      });
      return true;
    } else  {return false; }
  }

      acceptTrade() {
    if (this.CheckLists()){
      this.tradeItemsService.acceptTrade(this.user.id, this.receiver.id);
    }else { }// error message
    this.leavePage('swap-now', true) // to trade overview, todo!
  }

 leavePage(path: string, emptyValues: boolean){
  if(emptyValues){
    this.user.id = 0;
    this.receiver.id = 0;
    this.userTradeItems = [];
    this.receiverTradeItems = [];
    this.userProposedItems = [];
    this.receiverProposedItems = [];
    this.bothUsersProposedItems = [];
  }

  
  this.router.navigate([path]);
 }

  CheckLists(): boolean {
    this.makeBothUsersProposedItems();
      const filteredUser1 = this.userProposedItems.filter(element =>  element.proposedAmount != undefined && element.proposedAmount > 0 );
      const filteredUser2 = this.receiverProposedItems.filter(element =>  element.proposedAmount != undefined && element.proposedAmount > 0 );
      if (filteredUser1.length > 0 && filteredUser2.length > 0) {return true ;} else {return false;}
  }

  cancelTrade() 
  {
    this.tradeItemsService.cancelTrade(this.user.id, this.receiver.id);
    this.leavePage('swap-now', true)
  }
}
