import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IGetPicture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  isLoading: boolean = true;
  picturesList: IGetPicture[] = []

  constructor(private apiService: ApiService, private authService: AuthService) {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.apiService.getPictures('auto').pipe(map(resData => {
      const picturesArray = [];
      for(const key in resData) {
        if(resData.hasOwnProperty(key)) {
          picturesArray.push({picId:key, ...resData[key]}) 
        }
      }
      return picturesArray
    }))
      .subscribe({
        next: (pictures) => {
          this.picturesList = pictures;
          console.log(this.picturesList);
          
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(`Error: ${err}`);
        },
      });
  }

}
