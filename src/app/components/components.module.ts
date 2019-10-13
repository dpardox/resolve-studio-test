import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataComponent } from './company-data/company-data.component';
import { HeaderComponent } from './header/header.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouterModule } from '@angular/router';
import { SourceCardComponent } from './source-card/source-card.component';

@NgModule({
  declarations: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent,
    SourceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CompanyDataComponent,
    HeaderComponent,
    UserDataComponent,
    SourceCardComponent
  ]
})
export class ComponentsModule { }
