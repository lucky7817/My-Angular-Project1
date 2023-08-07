import { Injectable } from '@angular/core';
import { IGetUser, IPicture, IUser, IUserLog } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersList: IUser[] = [];
  

  // loginHandler() {
  //   throw new Error('Method not implemented.');
  // }

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

  login(myUser: string): void {
    this.user = {
      username: myUser,
      password: '11111111',
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

  createUser(username: string, firstname: string,
    secondname: string, lastname: string, email: string, phone: string,
    country: string, place: string, postcode: string, street: string, password: string,
    rePassword: string) {
    return this.http.post<IUser[]>('https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      {
        username, firstname, secondname, lastname, email, phone, country, place,
        postcode, street, password, rePassword
      });
  }

  // getPicture(id: string) {
  //   return this.http.get<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/abstract/${id}.json`)

  // }



  getUsers() {
    return this.http.get<{ [userId: string]: IUser }>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
      .pipe(map(resData => {
        const usersList = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            usersList.push({ userId: key, ...resData[key] })
          }
        }
        return usersList
      }))
      .subscribe({
        next: (users) => {
          this.usersList = users;
          console.log(this.usersList);
        },
        error: (err) => {
          // this.isLoading = false;
          console.log(`Error: ${err}`);
        },
      });  
  }

  getUserDetails() {
    return this.http.get<{ [userId: string]: IUser }>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
      .pipe(map(resData => {
        const usersArray = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            usersArray.push({ userId: key, ...resData[key] })
          }
        }
        return usersArray
      }))
      // .subscribe({
      //   next: (users) => {
      //     this.usersList = users;
      //     console.log(this.usersList);
      //   },
      //   error: (err) => {
      //     // this.isLoading = false;
      //     console.log(`Error: ${err}`);
      //   },
      // });  
  }

  getUser(id: string) {
    return this.http.get<IGetUser>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`)
  }

}


// const object = {
//   name: "John",
//   age: 30
// };

// if (Object.keys(object).some((key) => object[key] === "John")) {
//   console.log("Value exists");
// } else {
//   console.log("Value does not exist");
// }
