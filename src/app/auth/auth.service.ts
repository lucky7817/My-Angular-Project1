import { Injectable } from '@angular/core';
import { IGetUser, IPicture, IUser, IUserLog } from '../shared/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/enveronments/environment-development';
import { BehaviorSubject } from 'rxjs';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$$ = new BehaviorSubject<IGetUser | undefined>(undefined);

  user$ = this.user$$.asObservable();

  usersList: IUser[] = [];
  

  // loginHandler() {
  //   throw new Error('Method not implemented.');
  // }

  user: IUserLog | undefined;
  USER_KEY = '[user]';

  currentUser: string | undefined = undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
      this.currentUser = this.user?.username
      // console.log(this.user?.username);
      // console.log(this.currentUser);
      
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
    // const headers = new HttpHeaders().set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', 'true');
    // return this.http
    // .post<IGetUser>('/api/login', { username, password })
    // .pipe(tap((user) => this.user$$.next(user)));

  }

  logout() {
    this.user = undefined;
    // return this.http
    // .post<IGetUser>('/api/logout', {})
    // .pipe(tap(() => this.user$$.next(undefined)));
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
    return this.http.post<IGetUser>(`${apiUrl}/users.json`,
      {
        username, firstname, secondname, lastname, email, phone, country, place,
        postcode, street, password, rePassword
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  // getPicture(id: string) {
  //   return this.http.get<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/abstract/${id}.json`)

  // }

  getUsers() {
    const { apiUrl } = environment;
    return this.http.get<{ [userId: string]: IUser }>(`${apiUrl}/users.json`)
      .pipe(map(resData => {
        const usersArray = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            usersArray.push({ userId: key, ...resData[key] })
          }
        }
        return usersArray
      }))
      .subscribe({
        next: (users) => {
          this.usersList = users;
          // console.log(this.usersList);
        },
        error: (err) => {
          // this.isLoading = false;
          console.log(`Error: ${err}`);
        },
      });  
  }

  getUserDetails() {
    const { apiUrl } = environment;
    return this.http.get<{ [userId: string]: IUser }>(`${apiUrl}/users.json`)  
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
    return this.http.get<IGetUser>(`${apiUrl}/users/${id}.json`)
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
