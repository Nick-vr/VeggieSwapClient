import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { MessageService, MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

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

  constructor(
    private accountService: AccountService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  register() {
    this.passwordsMatch(this.registerUser);
    this.emailIsValid();

    // this.accountService.register(this.registerUser.value).subscribe(
    //   (response) => {},
    //   (error) => {
    //     this.validationErrors = error.error.errors;
    //   }
    // );
  }

  passwordsMatch(formGroup: FormGroup) {
    const password = this.registerUser.value.password;
    const confirmPassword = this.registerUser.value.confirmPassword;
    console.log(`1: ${password} 2: ${confirmPassword}`);

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
}
