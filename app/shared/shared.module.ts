import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ],
  providers: [

  ]
})
export class SharedModule {
}
