import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractComponent } from './abstract/abstract.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { PictureRoutingModule } from './pictures-routing.module';
import { AnimalsComponent } from './animals/animals.component';
import { AutoComponent } from './auto/auto.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FoodAndDrinksComponent } from './food-and-drinks/food-and-drinks.component';
import { NatureComponent } from './nature/nature.component';
import { PortraitesComponent } from './portraites/portraites.component';
import { ReproductionsComponent } from './reproductions/reproductions.component';



@NgModule({
  declarations: [
    AbstractComponent,
    AnimalsComponent,
    AutoComponent,
    ChildrensComponent,
    FlowersComponent,
    FoodAndDrinksComponent,
    NatureComponent,
    PortraitesComponent,
    ReproductionsComponent,
  ],
  imports: [
    CommonModule,
    PictureRoutingModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    AbstractComponent,
    AnimalsComponent,
    AutoComponent,
    ChildrensComponent,
    FlowersComponent,
    FoodAndDrinksComponent,
    NatureComponent,
    PortraitesComponent,
    ReproductionsComponent,
  ]
})
export class PicturesModule { }
