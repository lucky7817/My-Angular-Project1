import { Injectable } from '@angular/core';
import { IUserLog } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginHandler() {
    throw new Error('Method not implemented.');
  }

  user: IUserLog | undefined;
  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      username: 'dilyan@gmail.com',
      firstname: 'Dilyan',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
