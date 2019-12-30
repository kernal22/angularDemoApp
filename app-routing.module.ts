import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  }
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './home/home.module#HomeModule'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
