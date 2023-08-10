import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPicture, IPicture } from './shared/interfaces';
import { map } from 'rxjs/operators';
import { environment } from 'src/enveronments/environment-development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  picturesList2: IGetPicture[] = []
  
  constructor(private http: HttpClient) { }

  getPictures(picturePath: string) {
    const { apiUrl } = environment;
    return this.http.get<{ [picId: string]: IGetPicture }>(`${apiUrl}/${picturePath}.json`)
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

  getPicture(category: string, id: string)  {
    const { apiUrl } = environment;
    return this.http.get<IPicture>(`${apiUrl}${category}${id}.json`)  
  }

  // getWhatYouSearch(searchValue: string): Observable<SearchInterface[]> {
  //   return this.http.get<SearchInterface[]>
  // }
}
