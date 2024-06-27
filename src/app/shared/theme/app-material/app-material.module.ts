import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  exports: [
    MatIconModule,
    MatDividerModule,
    MatDialogModule
  ]
})
export class AppMaterialModule { }
