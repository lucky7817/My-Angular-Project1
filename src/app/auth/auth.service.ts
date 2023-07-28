import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = { 
    username: 'Alex',
    name: [''],
    email: 'test123@gmail.com',
    phone: '00359 8885632',
    address: [''],
   } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
