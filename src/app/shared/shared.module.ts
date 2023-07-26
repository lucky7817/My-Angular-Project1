import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentsOurSiteComponent } from './presents-our-site/presents-our-site.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    PresentsOurSiteComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PresentsOurSiteComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
