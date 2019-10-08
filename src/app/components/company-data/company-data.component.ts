import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss']
})
export class CompanyDataComponent implements OnInit {

  @Input()
  public company: Company;

  @Output()
  public deleted = new EventEmitter();

  constructor(private companyService: CompanyService) { }

  ngOnInit() { }

  public delete(id: number) {
    if (confirm('Confirme para eliminar la empresa')) {
      this.companyService.delete(id).subscribe((response) => {
        this.deleted.emit({ id: response.id });
      });
    }
  }

}
