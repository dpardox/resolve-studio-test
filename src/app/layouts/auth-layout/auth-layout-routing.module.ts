import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { NotAuthGuard } from 'src/app/guards/not-auth.guard';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [NotAuthGuard] },
  { path: 'reset-password/:token', component: ResetPasswordComponent, canActivate: [NotAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
