import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ModalLoginModule } from 'src/app/shared/components/modal-login/modal-login.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ModalLoginModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
