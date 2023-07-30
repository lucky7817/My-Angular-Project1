import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  showEditMode: boolean = false;

  userInfo: IUser = {
    username: 'ddd171717',
    firstname: 'Dilyan',
    secondname: 'Ivanov',
    lastname: 'Ivanov',
    email: 'dilyan@gmail.com',
    phone: '+3590888775555',
    country: 'Bulgaria',
    place: 'Yambol',
    postcode: '8600',
    street: 'Viza 6',
  };


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


  constructor(private fb: FormBuilder, private router: Router) {

  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveAccount(): void {
    if (this.form.invalid) { return; }

    this.userInfo = { ...this.form.value } as IUser;
    
    this.toggleEditMode();
  }

  closeAccountForm(): void {
    this.router.navigate(["/auth/profile"]);
  }
}
