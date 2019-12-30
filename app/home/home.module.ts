import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about/about.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AboutUsComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule { }
