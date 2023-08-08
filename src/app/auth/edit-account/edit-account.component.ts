import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent {

  showEditMode: boolean = false;
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

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService, private activatedRoute: ActivatedRoute) {
      
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
