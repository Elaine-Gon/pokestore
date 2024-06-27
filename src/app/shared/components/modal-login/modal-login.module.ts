import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from './modal-login.component';
import { AppMaterialModule } from '../../theme/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalLoginComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalLoginComponent
  ]
})
export class ModalLoginModule { }
