import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
