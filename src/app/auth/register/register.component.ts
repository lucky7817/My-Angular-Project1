import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { samePassGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    _id: [''],
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
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: [],
    }, 
    {
      validators: [samePassGroupValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  // registerHandler() {
  //   console.log(this.form.value);
  // }
  registerHandler(): void {
    if (this.form.invalid) { return; }
    const { _id, username, firstname, secondname, lastname, email, phone, country, place,
      postcode, street, pass: {password, rePassword} = {} } = this.form.value;
    this.authService.createUserAbstract(_id!, username!, firstname!, secondname!,
      lastname!, email!, phone!, country!, place!, postcode!, street!,
      password!, rePassword!).subscribe(
        response => { console.log(response); this.router.navigate(["/auth/profile"]) },
        (err) => console.log(err)
      )
  }
}


