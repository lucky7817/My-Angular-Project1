import { Injectable } from '@angular/core';
import { IPicture, IUser, IUserLog } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
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

  createPicture(picName: string, pickMaterials: string, picCategory: string,
    picImage: string, picPrice: number, picDescription: string) {
    return this.http.post<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/${picCategory}.json`,
      { picName, pickMaterials, picCategory, picImage, picPrice, picDescription });
  }

  createUser(_id: string, username: string, firstname: string,
    secondname: string, lastname: string, email: string, phone: string,
    country: string, place: string, postcode: string, street: string, password: string,
    rePassword: string) {
    return this.http.post<IUser[]>('https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      {
        _id, username, firstname, secondname, lastname, email, phone, country, place,
        postcode, street, password, rePassword
      });

  }

}
