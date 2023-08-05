import { RouterModule, Routes } from '@angular/router';
import { AbstractComponent } from './abstract/abstract.component';
import { AnimalsComponent } from './animals/animals.component';
import { AutoComponent } from './auto/auto.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FoodAndDrinksComponent } from './food-and-drinks/food-and-drinks.component';
import { NatureComponent } from './nature/nature.component';
import { PortraitesComponent } from './portraites/portraites.component';
import { ReproductionsComponent } from './reproductions/reproductions.component';
import { PictureDetailsComponent } from './picture-details/picture-details.component';



const routes: Routes = [
  {
    path: 'picture/abstract',
    component: AbstractComponent,
  },
  {
    path: 'picture/animals',
    component: AnimalsComponent,
  },
  {
    path: 'picture/auto',
    component: AutoComponent,
  },
  {
    path: 'picture/childrens',
    component: ChildrensComponent,
  },
  {
    path: 'picture/flowers',
    component: FlowersComponent,
  },
  {
    path: 'picture/foodAndDrinks',
    component: FoodAndDrinksComponent,
  },
  {
    path: 'picture/nature',
    component: NatureComponent,
  },
  {
    path: 'picture/portraites',
    component: PortraitesComponent,
  },
  {
    path: 'picture/reproductions',
    component: ReproductionsComponent,
  },
  {
    path: 'picture/abstract/:picId',
    component: PictureDetailsComponent,
  },
];

export const PictureRoutingModule = RouterModule.forChild(routes);
