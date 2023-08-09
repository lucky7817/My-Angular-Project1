import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IGetPicture, IUser } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  showEditMode: boolean = false;
  usersDetails: any = {};
  isLoading: boolean = true;

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    secondname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(9)]],
    country: ['', [Validators.required, Validators.minLength(2)]],
    place: ['', [Validators.required, Validators.minLength(2)]],
    postcode: ['', [Validators.required, Validators.minLength(2)]],
    street: ['', [Validators.required, Validators.minLength(3)]],
  });

  


  

  // userD: any | undefined;

  // userInfo: any = {}

  
  
  




  // username: string = this.userInfo.username

  // getCurrUser() {
  //   this.authService.getUserDetails()
  //     .subscribe({
  //       next: (user) => {
  //         this.usersDetails = user;
  //         console.log(this.usersDetails);
  //         const indexInArrayLoggedinObjectUser = this.usersDetails.findIndex(x =>
  //           x.username === this.authService.currentUser);

  //         const myUserObj: any = this.usersDetails[indexInArrayLoggedinObjectUser];

  //         for (const key in myUserObj) {
  //           if (myUserObj.hasOwnProperty(key)) {
  //             this.userInfo[key] = (myUserObj[key]);
  //             // if(this.userInfo.hasOwnProperty(key)) {
  //             // }
  //           }
  //         }
  //         this.id = this.userInfo.userId
  //         console.log(this.userInfo.userId);

  //         this.isLoading = false;
  //       },
  //       error: (err) => {
  //         this.isLoading = false;
  //         console.log(`Error: ${err}`);
  //       },
  //     })
  // }

  getUser(): void {
    const id: string = this.activatedRoute.snapshot.params['userId'];

    this.authService.getUser(id).
    subscribe({
      next: (user) => {
        this.usersDetails = user;
        console.log(this.usersDetails);
        this.isLoading = false;
        this.form = this.fb.group({
          username: [this.usersDetails.username, [Validators.required, Validators.minLength(5)]],
          firstname: [this.usersDetails.firstname, [Validators.required, Validators.minLength(2)]],
          secondname: [this.usersDetails.secondname, [Validators.required, Validators.minLength(2)]],
          lastname: [this.usersDetails.lastname, [Validators.required, Validators.minLength(2)]],
          email: [this.usersDetails.email, [Validators.required]],
          phone: [this.usersDetails.phone, [Validators.required, Validators.minLength(9)]],
          country: [this.usersDetails.country, [Validators.required, Validators.minLength(2)]],
          place: [this.usersDetails.place, [Validators.required, Validators.minLength(2)]],
          postcode: [this.usersDetails.postcode, [Validators.required, Validators.minLength(2)]],
          street: [this.usersDetails.street, [Validators.required, Validators.minLength(3)]],
        });
        
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    })

  }
    
  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService, private activatedRoute: ActivatedRoute,) {
      

  }



  ngOnInit(): void {
    this.getUser();
    
    
    
    
    

    //   const id =  this.activatedRoute.snapshot.params['userId'];
    //   console.log(id);

    //   this.authService.getUser(this.id)
    // .subscribe({
    //   next: (user) => {
    //     this.userD = user;
    //     console.log(this.userD);

    // this.accountComponent.usersDetails = user;
    // console.log(this.accountComponent.usersDetails);
    // const indexInArrayLoggedinObjectUser = this.accountComponent.usersDetails.findIndex(x => 
    //   x.username === this.authService.currentUser);

    //   const myUserObj: any = this.accountComponent.usersDetails[indexInArrayLoggedinObjectUser];

    //   for(const key in myUserObj) {
    //     if (myUserObj.hasOwnProperty(key)) {
    //       if(this.accountComponent.userInfo.hasOwnProperty(key)) {
    //         this.accountComponent.userInfo[key] = (myUserObj[key]); 
    //       }
    //     }
    //   }


    // this.isLoading = false;
    //   },
    //   error: (err) => {
    //     this.isLoading = false;
    //     console.log(`Error: ${err}`);
    //   },
    // })
  }


  // toggleEditMode(): void {
  //   this.showEditMode = !this.showEditMode;
  // }
   
  saveAccount(): void {
    if (this.form.invalid) { return; }
    const { username, firstname, secondname, lastname, email, phone, country, place,
      postcode, street} = this.form.value;
      const id: string = this.activatedRoute.snapshot.params['userId'];
      console.log(id);
      
      this.authService.updateUser(username!, firstname!, secondname!,
        lastname!, email!, phone!, country!, place!, postcode!, street!, id)
        .subscribe(() => {
          this.router.navigate(["/auth/profile/account"]);
        },
          (err) => console.log(err)
        )

    // this.usersDetails = { ...this.form.value } as any;
    // console.log(this.usersDetails);

  }

  closeAccountForm(): void {
    this.router.navigate(["/auth/profile"]);
  }

}
