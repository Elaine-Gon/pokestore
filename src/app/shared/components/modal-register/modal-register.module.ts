import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegisterComponent } from './modal-register.component';
import { AppMaterialModule } from '../../theme/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalRegisterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalRegisterComponent
  ]
})
export class ModalRegisterModule { }
