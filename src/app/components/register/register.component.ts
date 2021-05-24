import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { MessageService, MenuItem, Message } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  items!: MenuItem[];
  passMatch: boolean = true;
  isEmailValid: boolean = true;
  msgs: Message[] = [];

  registerUser: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
    ]),
  });

  validationErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  register() {
    if (this.passwordsMatch() && this.emailIsValid() && !this.formHasErrors()) {
      // this.accountService.register(this.registerUser.value).subscribe(
      //   () => {},
      //   (error) => {
      //     this.validationErrors = error.error.errors;
      //   }
      // );
      console.log('registered');

      this.successMessage();
    } else {
      this.errorMessage();
    }
  }

  passwordsMatch() {
    const password = this.registerUser.value.password;
    const confirmPassword = this.registerUser.value.confirmPassword;

    return password === confirmPassword
      ? (this.passMatch = true)
      : (this.passMatch = false);
  }

  emailIsValid() {
    const email = this.registerUser.value.email;

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? (this.isEmailValid = true)
      : (this.isEmailValid = false);
  }

  formHasErrors() {
    return this.registerUser?.invalid;
  }

  successMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'You are now registered',
      },
    ];
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }

  errorMessage() {
    this.msgs = [
      {
        severity: 'error',
        summary: 'Error',
        detail:
          'Failed to register, have you tried turning it off and on again?',
      },
    ];
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
}
