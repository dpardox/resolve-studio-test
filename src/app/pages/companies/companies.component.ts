import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.list().subscribe((response) => {
      this.companies = response;
    });
  }

  public delete(index: number) {
    this.companies.splice(index, 1);
  }

}
