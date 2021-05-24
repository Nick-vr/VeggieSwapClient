import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/interfaces/user';
import { TradeItem } from 'src/app/core/interfaces/tradeItem';
import { TradeItemsService } from 'src/app/core/services/trade-items.service';

interface Veggie {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-trade-items',
  templateUrl: './trade-items.component.html',
  styleUrls: ['./trade-items.component.scss'],
  providers: [MessageService],
})
export class TradeItemsComponent implements OnInit {
  user!: User;
  tradeItems?: TradeItem[];
  loggedInUser?: User;
  veggies!: any[];
  selectedVeggie?: Veggie;

  constructor(
    private userService: UserService,
    private tradeItemsService: TradeItemsService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    this.getUser();
    this.getTradeItemsFromSelectedUser();
  }

  getUser(): void {
    const id = this.loggedInUser!.id;
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }

  getTradeItemsFromSelectedUser(): void {
    const id = this.loggedInUser!.id;
    this.tradeItemsService
      .getTradeItemsFromSelectedUser(id)
      .subscribe(
        (tradeItems) =>
          (this.tradeItems = tradeItems.filter(
            (x) => x.resourceId !== 51 && x.amount > 0
          ))
      );
  }

  getAllTradableItems(): void {
    this.tradeItemsService
      .getTradeItems()
      .subscribe((veggies) => (this.veggies = veggies));
  }

  onSubmit(): void {
    console.log('saved');
  }
}
