import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPicture } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPictures() {
    return this.http.get<{ [id: string]: IGetPicture }>('https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/abstract.json');
  }
}
