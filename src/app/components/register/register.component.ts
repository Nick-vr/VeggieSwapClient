import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { MessageService, MenuItem } from 'primeng/api';
import { RegisterService } from '../../core/services/register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  items!: MenuItem[];
  subscription?: Subscription;

  registerUser: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    eMail: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
  });

  validationErrors: string[] = [];

  constructor(
    private accountService: AccountService,
    private messageService: MessageService,
    private regiserService: RegisterService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Address',
        routerLink: 'address',
      },
    ];

    this.subscription = this.regiserService.registerComplete$.subscribe(
      (registerInformation) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Register complete',
          detail: `YO ${registerInformation.firstName} ${registerInformation.lastName}, your registration is completed.`,
        });
      }
    );
  }

  register() {
    this.accountService.register(this.registerUser.value).subscribe(
      (response) => {},
      (error) => {
        this.validationErrors = error.error.errors;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
