import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { YourAccountComponent } from './your-account/your-account.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    YourAccountComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AccountComponent,
    YourAccountComponent,
  ]
})
export class AuthModule { }
