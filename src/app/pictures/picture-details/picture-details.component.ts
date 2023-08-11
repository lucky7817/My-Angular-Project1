import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPicture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit, OnDestroy {

  picture: IPicture | undefined;
  isLoading: boolean = true;
  pictureToCart: IPicture | undefined;

  category: any;
  
  // items: IPicture[] = [];

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
    const result: any = regExp.exec(url);
    this.category = result[2]
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

  backToList(): void {
    this.router.navigate([`/picture${this.category}`]);
  }

  ngOnDestroy(): void {
    // this.router.events.unsubscribe();
  }

  addPicToCart() {

    const url = this.router.routerState.snapshot.url;
    let regExp = /(\/[a-zA-Z]*)(\/[a-zA-Z]*\/)/gm
    const result: any = regExp.exec(url);
    console.log(result);


    const id: string = this.activatedRoute.snapshot.params['picId'];
    console.log(id);

    console.log(this.picture);

    this.apiService.getPicToBeAddToCart(result[2], id)
      .subscribe({
        next: (pic) => {
          this.pictureToCart = pic;

          // console.log(this.pictureToCart);
          // this.items.push(this.pictureToCart);
          this.apiService.createItemInMyCart(this.pictureToCart.picName,
            this.pictureToCart.picImage, this.pictureToCart.picPrice,
            this.pictureToCart.picDescription)
            .subscribe({
              next: (id: any) => {
                console.log(id);
                this.apiService.getItemFromMyCart(id.name)
                  

                // .pipe(map(resData => {

                //   for (const key in resData) {
                //     if (resData.hasOwnProperty(key)) {
                //       this.items.push({ picId: key, ...resData[key] })
                //     }
                //   }
                //   return this.items
                // }))
              }
            })

        },
        error: (err) => {
          console.log(`Error: ${err}`);
        }
      })



    // this.apiService.createItem(pisName)
    window.alert('The picture has been added to the cart!');
  }

  // getItems() {
  //   return this.items;
  // }

  // itemsCount() {
  //   return this.items.length;
  // }

  // clearCart() {
  //   this.items = [];
  // }

  


}

