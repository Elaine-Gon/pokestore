import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  exports: [
    MatIconModule,
    MatDividerModule
  ]
})
export class AppMaterialModule { }
