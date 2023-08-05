import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPicture, IPicture } from './shared/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  picturesList2: IGetPicture[] = []
  
  constructor(private http: HttpClient) { }

  getPictures(picturePath: string) {
    return this.http.get<{ [picId: string]: IGetPicture }>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/${picturePath}.json`)
    .pipe(map(resData => {
      const picturesArray = [];
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          picturesArray.push({ picId: key, ...resData[key] })
        }
      }
      return picturesArray
    }))
      
  }

  getPicture(id: string)  {
    return this.http.get<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/abstract/${id}.json`)
    
  }
}
