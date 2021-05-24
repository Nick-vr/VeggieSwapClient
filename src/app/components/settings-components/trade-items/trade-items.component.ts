import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-items',
  templateUrl: './trade-items.component.html',
  styleUrls: ['./trade-items.component.scss'],
  providers: [MessageService],
})
export class TradeItemsComponent implements OnInit {
  ngOnInit(): void {}
}
