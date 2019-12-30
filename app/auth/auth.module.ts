import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {SharedModule} from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PDFExportModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    LoginComponent
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [

  ]
})
export class AuthModule {

}
