import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  registerInformation = {
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
    },
    addressInformation: {
      addressStreetName: '',
      addressStreetNumber: '',
      addressPostalCode: '',
    },
  };

  private registerComplete = new Subject<any>();

  registerComplete$ = this.registerComplete.asObservable();

  getRegisterInformation() {
    return this.registerInformation;
  }
  setRegisterInformation(registerInformation) {
    this.registerInformation = registerInformation;
  }

  complete() {
    this.registerComplete.next(this.registerInformation.personalInformation);
  }
}
