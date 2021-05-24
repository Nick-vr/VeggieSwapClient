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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [MessageService],
})
export class EditProfileComponent implements OnInit {
  currentUser: User | undefined;
  editProfileForm!: FormGroup;
  msgs: Message[] = [];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLoggedInUser();
    this.editProfileForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      addressStreetName: new FormControl('', Validators.required),
      addressStreetNumber: new FormControl('', Validators.required),
      addressPostalCode: new FormControl('', Validators.required),
    });
  }

  getLoggedInUser(): void {
    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
    this.userService.getUser(loggedInUser.id).subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.editProfileForm?.setValue({
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        email: this.currentUser.email,
        addressStreetName: this.currentUser.addressStreetName,
        addressStreetNumber: this.currentUser.addressStreetNumber,
        addressPostalCode: this.currentUser.addressPostalCode,
      });
    });
  }

  formHasErrors() {
    return this.editProfileForm?.invalid;
  }

  onSave() {
    const CURRENT_USER = this.currentUser;
    const EDITED_USER = this.editProfileForm?.value;
    const UPDATED_USER = { ...CURRENT_USER, ...EDITED_USER };

    if (this.formHasErrors()) {
      this.errorMessage();
      return;
    } else {
      this.userService.updateUser(UPDATED_USER).subscribe(
        () => {},
        (error) => {
          console.log(error);
        }
      );
      this.successMessage();
    }
  }

  successMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Profile Saved',
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
        detail: 'Failed to save your profile',
      },
    ];
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
}
