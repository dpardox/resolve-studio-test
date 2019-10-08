import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Regexp } from 'src/app/enums/regexp.enum';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public loaded = false;
  public sending = false;
  public company: Company;
  public form: FormGroup;

  get name() { return this.form.get('name'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.companyService.get(params.id).subscribe((response) => {
          this.company = response;
          this.form = this.buildForm();
          this.loaded = true;
        });
      } else {
        this.form = this.buildForm();
        this.loaded = true;
      }
    });
  }

  private buildForm() {
    const { name = '', address = '', phone = '' } = this.company ? this.company : {};

    return this.formBuilder.group({
      name: [name, [Validators.required, Validators.maxLength(40)]],
      address: [address, [Validators.required, Validators.maxLength(40)]],
      phone: [phone, [Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern(Regexp.number)]],
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.sending = true;

    const id = this.company ? this.company.id : null;

    if (id) {
      this.companyService.update(id, this.form.value).subscribe(() => {
        this.router.navigate(['/admin/companies']);
      }, () => {
        this.sending = false;
        alert('Ocurrio un error.');
      });
    } else {
      this.companyService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/admin/companies']);
      }, () => {
        this.sending = false;
        alert('Ocurrio un error.');
      });
    }
  }

}
