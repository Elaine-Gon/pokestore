import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOrderingComponent } from './button-ordering.component';
import { AppMaterialModule } from '../../theme/app-material/app-material.module';



@NgModule({
  declarations: [
    ButtonOrderingComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ButtonOrderingComponent
  ]
})
export class ButtonOrderingModule { }
