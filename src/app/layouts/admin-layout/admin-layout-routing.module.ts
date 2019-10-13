import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { CompaniesComponent } from 'src/app/pages/companies/companies.component';
import { CompanyComponent } from 'src/app/pages/company/company.component';
import { FilePageComponent } from 'src/app/pages/file-page/file-page.component';
import { FilesPageComponent } from 'src/app/pages/files-page/files-page.component';
import { DashboardPageComponent } from 'src/app/pages/dashboard-page/dashboard-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: 'sources', component: FilesPageComponent },
  { path: 'source', component: FilePageComponent },
  { path: 'dashboard/:file', component: DashboardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
