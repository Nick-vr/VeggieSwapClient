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
  buttonProposeIsvisible = true;
  buttonAcceptIsvisible = false;
  buttonCancelIsvisible = false;
  buttonResetIsvisible = false;
  buttonCancelPropositionIsvisible = false;

  PageUserId: number = 0;
  CacheUser!: User;
  user!: User;
  receiver!: User;
  FullTradeList: TradeItem[] = [];
  userTradeItems: TradeItem[] = [];
  receiverTradeItems: TradeItem[] = [];
  userProposedItems: TradeItem[] = [];
  receiverProposedItems: TradeItem[] = [];
  bothUsersProposedItems: TradeItem[] = [];

  constructor(
    private tradeItemsService: TradeItemsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.asyncCall();
    this.primengConfig.ripple = true;
  }

  async asyncCall() {
    this.PageUserId = Number(this.route.snapshot.paramMap.get('id'));
    this.CacheUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    await this.getProposerItemList();
    await this.CreateTradeSnapshot();
    this.getUsers();
    this.setButtons();
  }

  getProposerItemList() {
    return new Promise((resolve) => {
      this.tradeItemsService
        .getTradeFromUsers(this.CacheUser.id, this.PageUserId)
        .subscribe((tradeItems) => {
          (this.FullTradeList = tradeItems), resolve('true');
        });
    });
  }

  getUsers() {
    this.userService.getUser(this.CacheUser.id || 0).subscribe((x) => {
      this.user = x;
    });

    this.userService.getUser(this.PageUserId).subscribe((x) => {
      this.receiver = x;
    });
  }

  setButtons() {
    if (this.FullTradeList[0].activeUserId === this.CacheUser.id) {
      this.buttonAcceptIsvisible = true;
      this.buttonProposeIsvisible = false;
      this.buttonCancelIsvisible = true;
      this.buttonResetIsvisible = false;
      this.buttonCancelPropositionIsvisible = false;
    } else if (this.FullTradeList[0].activeUserId === this.PageUserId) {
      this.buttonAcceptIsvisible = false;
      this.buttonProposeIsvisible = false;
      this.buttonCancelIsvisible = false;
      this.buttonResetIsvisible = false;
      this.buttonCancelPropositionIsvisible = true;
    } else if (this.FullTradeList[0].activeUserId === 0) {
      this.buttonAcceptIsvisible = false;
      this.buttonProposeIsvisible = true;
      this.buttonCancelIsvisible = false;
      this.buttonResetIsvisible = true;
      this.buttonCancelPropositionIsvisible = false;
    }
  }

  CreateTradeSnapshot() {
    return new Promise((resolve) => {
      this.FullTradeList.forEach((element) => {
        if (element.userId == this.CacheUser.id) {
          if (element.proposedAmount == null || element.proposedAmount == 0) {
            this.userTradeItems.push(element);
          } else {
            this.userProposedItems.push(element);
          }
        } else if (element.userId == this.PageUserId) {
          if (element.proposedAmount == null || element.proposedAmount == 0) {
            this.receiverTradeItems.push(element);
          } else {
            this.receiverProposedItems.push(element);
          }
        }
      });
      resolve('true');
    });
  }

  toggleAcceptTradeButton() {
    if (this.FullTradeList[0].activeUserId === this.CacheUser.id) {
      this.buttonAcceptIsvisible = false;
      this.buttonResetIsvisible = true;
      this.buttonProposeIsvisible = true;
    }
  }

  proposeTrade() {
    if (this.makeBothUsersProposedItems()) {
      this.bothUsersProposedItems.forEach((element) => {
        element.activeUserId = this.receiver.id;
      });

      this.tradeItemsService.postTrade(this.bothUsersProposedItems);
    } else {
    } // throw exception
    this.leavePage('/trade/' + this.user?.id, true);
  }

  makeBothUsersProposedItems(): boolean {
    let receiverResult = this.receiverProposedItems.filter(
      (x) => x.proposedAmount != undefined && x.proposedAmount > 0
    );
    let userResult = this.userProposedItems.filter(
      (x) => x.proposedAmount != undefined && x.proposedAmount > 0
    );
    if (receiverResult.length > 0 && userResult.length != 0) {
      receiverResult.forEach((element) => {
        this.bothUsersProposedItems.push(element);
      });
      userResult.forEach((element) => {
        this.bothUsersProposedItems.push(element);
      });
      window.location.reload();
      return true;
    } else {
      return false; // invalid trade
    }
  }

  acceptTrade() {
    if (this.CheckLists()) {
      this.tradeItemsService
        .acceptTrade(this.user.id, this.receiver.id)
        .subscribe();
      window.location.reload();
    } else {
    }
  }

  leavePage(path: string, emptyValues: boolean) {
    if (emptyValues) {
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
    const filteredUser1 = this.userProposedItems.filter(
      (element) =>
        element.proposedAmount != undefined && element.proposedAmount > 0
    );
    const filteredUser2 = this.receiverProposedItems.filter(
      (element) =>
        element.proposedAmount != undefined && element.proposedAmount > 0
    );
    if (filteredUser1.length > 0 && filteredUser2.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  buttonBack() {
    this.leavePage('swap-now', true);
  }
  cancelTrade() {
    this.tradeItemsService
      .cancelTrade(this.user.id, this.receiver.id)
      .subscribe();
    window.location.reload();
  }
}
