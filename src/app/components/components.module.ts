import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataComponent } from './company-data/company-data.component';
import { HeaderComponent } from './header/header.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent
  ]
})
export class ComponentsModule { }
