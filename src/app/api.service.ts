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

  pictureToCart: IPicture | undefined;
  getPicFromCart: IPicture | undefined;

  items: IPicture[] = [];
  // items: IPicture[] = [];

  // items: IPicture[] = [];
  
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

  createItemInMyCart(picName: string, picImage: string,
    picPrice: number, picDescription: string) {
     return this.http.post<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/MyCart.json`,
       { picName, picImage, picPrice, picDescription });
   }

  getPicToBeAddToCart(category: string, id: string) {
    const { apiUrl } = environment;
    return this.http.get<IPicture>(`${apiUrl}${category}${id}.json`)
    // .subscribe({
    //   next: (pic) => {
    //   this.pictureToCart = pic;
      // console.log(this.pictureToCart);
      // this.items.push(this.pictureToCart);   
  //   },
  //   error: (err) => {
  //     console.log(`Error: ${err}`);
  //   },
  // })
    // this.items.push(picture);
  }

  getItemFromMyCart(id: string) {
    const { apiUrl } = environment;
    return this.http.get<IPicture>(`https://my-project-angular-4dd57-default-rtdb.europe-west1.firebasedatabase.app/MyCart/${id}.json`)
    .subscribe({
      next: (pic) => {
        this.getPicFromCart = pic;
        this.items.push(this.getPicFromCart);
      },
      error: (err) => {
        console.log(`Error: ${err} `);
      }
    })
    // .pipe(map(resData => {
      
    //   for (const key in resData) {
    //     if (resData.hasOwnProperty(key)) {
    //       this.items.push({ picId: key, ...resData[key] })
    //     }
    //   }
    //   return this.items
    // }))

  }

  
  getItems() {
    return this.items;
  }

  itemsCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
  }


}
