import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IGetPicture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  isLoading: boolean = true;
  pictureList:  { [id: string]: IGetPicture } | undefined = undefined;


  

  constructor(private apiService: ApiService, private authService: AuthService) {

  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.apiService.getPictures()
      .subscribe({
        next: (pictures) => {
          this.pictureList = pictures
          this.isLoading = false;
          console.log(pictures);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(`Error: ${err}`);
        },
      });
  }

}

