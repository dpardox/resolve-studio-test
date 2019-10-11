import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    PagesModule,
  ]
})
export class AdminLayoutModule { }
