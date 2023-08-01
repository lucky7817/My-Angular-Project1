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
import { CreatePictureComponent } from './create-picture/create-picture.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    YourAccountComponent,
    CreatePictureComponent,

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
    CreatePictureComponent,
  ]
})
export class AuthModule { }
