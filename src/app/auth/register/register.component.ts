import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { samePassGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    name: this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      secondname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
    }),
    email: ['', [Validators.required, Validators['email']]],
    phone: ['', [Validators.required, Validators.minLength(9)]],
    address: this.fb.group({
      country: ['', [Validators.required, Validators.minLength(2)]],
      place: ['', [Validators.required, Validators.minLength(2)]],
      postcode: ['', [Validators.required, Validators.minLength(2)]],
      street: ['', [Validators.required, Validators.minLength(3)]],
    }),
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: [],
    }, 
    {
      validators: [samePassGroupValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder) {}

  registerHandler() {
    console.log(this.form.value);
  }
}
// function samePassGroupValidator(arg0: string, arg1: string): any {
//   throw new Error('Function not implemented.');
// }

