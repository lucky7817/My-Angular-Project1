import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild(
    //'form',
    NgForm,
    { static: true }) form!: ElementRef<HTMLInputElement>;


    constructor(private activateRoute: ActivatedRoute, private router: Router, private authService: AuthService) {

    }

  loginHandler(form: NgForm): void {
    if (form.invalid) { return; }
    this.authService.user = {
      username: 'Alex',
    } as any;
    const returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([returnUrl]);
  }

}
