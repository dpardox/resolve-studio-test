import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    PagesModule
  ]
})
export class AuthLayoutModule { }
