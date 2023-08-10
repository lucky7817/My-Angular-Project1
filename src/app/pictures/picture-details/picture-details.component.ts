import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { IGetPicture, IPicture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit, OnDestroy {

  picture: IPicture | undefined;
  isLoading: boolean = true;

  routerEvents: any;


  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService,
    private authService: AuthService, private router: Router) {
      
      
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    
    const url = this.router.routerState.snapshot.url;
    let regExp = /(\/[a-zA-Z]*)(\/[a-zA-Z]*\/)/gm
    const result: any = regExp.exec(url)
    // console.log(result);
    
    
    const id: string = this.activatedRoute.snapshot.params['picId'];
    // console.log(id);
    
             
  this.apiService.getPicture(result[2], id).subscribe({
      next: (pic) => {
      this.picture = pic;
      console.log(this.picture);
       
    },
    error: (err) => {
      console.log(`Error: ${err}`);
    },
  })

  }

  ngOnDestroy(): void {
    // this.router.events.unsubscribe();
  }

  addPicToCart() {
    const id: string = this.activatedRoute.snapshot.params['picId'];
    console.log(id);
    

  }

  

  }

