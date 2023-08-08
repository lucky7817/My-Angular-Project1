import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPicture, IPicture } from './shared/interfaces';
import { map } from 'rxjs/operators';
import { environment } from 'src/enveronments/environment-development';

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

  getPicture(id: string)  {
    const { apiUrl } = environment;
    return this.http.get<IPicture>(`${apiUrl}/abstract/${id}.json`)
    
  }
}
