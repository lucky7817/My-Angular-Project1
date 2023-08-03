import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractComponent } from './abstract/abstract.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { PictureRoutingModule } from './pictures-routing.module';



@NgModule({
  declarations: [
    AbstractComponent
  ],
  imports: [
    CommonModule,
    PictureRoutingModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    AbstractComponent,
  ]
})
export class PicturesModule { }
