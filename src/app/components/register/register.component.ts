import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerUser: FormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      eMail: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,
      Validators.minLength(4), Validators.maxLength(8)])
  });

  validationErrors: string[] = [];

  constructor(private accountService: AccountService) { }

  register(){
    this.accountService.register(this.registerUser.value).subscribe(response => {

    }, error => {
      this.validationErrors = error.error.errors;
    });
  }

  ngOnInit(): void {
  }

}
