import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IGetPicture, IPicture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {

  picture: IPicture | undefined;
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService,
    private authService: AuthService) {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    // this.fetchPicture();
    const id: string = this.activatedRoute.snapshot.params['picId'];
    const obj: any = this.activatedRoute.snapshot.params
    console.log(obj);
    
    
    
  this.apiService.getPicture(id).subscribe({
      next: (pic) => {
      this.picture = pic;
      // console.log(this.picture.picCategory);
       
    },
    error: (err) => {
      console.log(`Error: ${err}`);
    },
  })

    // this.apiService.getPictures('abstract')
    //   .subscribe({
    //     next: (pictures) => {
    //       this.picturesList = pictures;
    //       let myPic = this.picturesList.find(picture => picture.picId === id)
    //       console.log(myPic);

    // },


    // });
  }

  }

  // fetchPicture(): void {
    
// }
