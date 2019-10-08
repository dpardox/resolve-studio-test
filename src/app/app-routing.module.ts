import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyComponent } from './pages/company/company.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [NotAuthGuard] },
  { path: 'reset-password/:token', component: ResetPasswordComponent, canActivate: [NotAuthGuard] },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'company/:id', component: CompanyComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
