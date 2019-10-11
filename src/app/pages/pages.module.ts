import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule,
    CompaniesComponent,
    CompanyComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    UserComponent,
    UsersComponent,
  ]
})
export class PagesModule { }
