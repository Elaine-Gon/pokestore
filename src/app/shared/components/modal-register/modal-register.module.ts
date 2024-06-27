import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegisterComponent } from './modal-register.component';
import { AppMaterialModule } from '../../theme/app-material/app-material.module';



@NgModule({
  declarations: [
    ModalRegisterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ModalRegisterModule { }
