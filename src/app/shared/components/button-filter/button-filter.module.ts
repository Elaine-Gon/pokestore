import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFilterComponent } from './button-filter.component';
import { AppMaterialModule } from '../../theme/app-material/app-material.module';



@NgModule({
  declarations: [
    ButtonFilterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ButtonFilterComponent
  ]
})
export class ButtonFilterModule { }
