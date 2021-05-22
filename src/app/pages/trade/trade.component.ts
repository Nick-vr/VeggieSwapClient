import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user';
import { TradeItem } from '../../core/interfaces/tradeItem';
import { UserService } from '../../core/services/user.service';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';
import { PrimeNGConfig } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
})
export class TradeComponent implements OnInit {
  //ID from localstorage cached User (logged in user)
  CacheUserId!: number;
  // Users objects, collected from the database
  user!: User;
  receiver!: User;
  // Users - tradeitem lists (what they sell), collected from the database
  userTradeItems!: TradeItem[];
  receiverTradeItems!: TradeItem[];
  // Lists of proposed tradeitems, picked on the page, to be returned to the backend
  userProposedItems!: TradeItem[];
  receiverProposedItems!: TradeItem[];

  constructor(
    private tradeItemsService: TradeItemsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private inputNumberModule: InputNumberModule
  ) {}

  ngOnInit(): void {
    this.getCurrentUserId();
    this.getUsers();
    this.primengConfig.ripple = true;
    this.userProposedItems = [];
    this.receiverProposedItems = [];
  }
  myFunction() {
    var element = document.getElementById("test2");
    element!.classList.add("testhidden");
  }
  
  getCurrentUserId() {
    let CacheUser: User = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
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
}
