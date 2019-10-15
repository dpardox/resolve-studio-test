import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataComponent } from './company-data/company-data.component';
import { HeaderComponent } from './header/header.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouterModule } from '@angular/router';
import { SourceCardComponent } from './source-card/source-card.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';

@NgModule({
  declarations: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent,
    SourceCardComponent,
    DashboardCardComponent,
    ChartLineComponent,
    ChartPieComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent,
    SourceCardComponent,
    DashboardCardComponent,
    ChartLineComponent,
    ChartPieComponent
  ]
})
export class ComponentsModule { }
