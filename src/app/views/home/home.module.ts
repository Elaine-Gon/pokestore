import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonFilterComponent } from 'src/app/shared/components/button-filter/button-filter.component';
import { ButtonFilterModule } from 'src/app/shared/components/button-filter/button-filter.module';
import { ButtonOrderingModule } from 'src/app/shared/components/button-ordering/button-ordering.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ButtonFilterModule,
    ButtonOrderingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
