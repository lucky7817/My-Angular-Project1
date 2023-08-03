import { RouterModule, Routes } from '@angular/router';
import { AbstractComponent } from './abstract/abstract.component';



const routes: Routes = [
  {
      path: 'picture/abstract',
      component: AbstractComponent,
  },
];

export const PictureRoutingModule = RouterModule.forChild(routes);
