import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss']
})
export class FilePageComponent implements OnInit {

  public loaded = false;
  public sending = false;
  public companies: Company[];
  public form: FormGroup;
  public filename: string;

  get name() { return this.form.get('name'); }
  get company() { return this.form.get('company'); }
  get file() { return this.form.get('file'); }
  get separator() { return this.form.get('separator'); }

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private sourceService: SourceService,
    private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.companyService.list().subscribe((response) => {
      this.companies = response;
      this.form = this.buildForm();
      this.loaded = true;
    }, () => {
      alert('Ocurrio un error.');
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      company: ['', [Validators.required]],
      file: [null, [Validators.required]],
      separator: [';', [Validators.required, Validators.maxLength(1)]],
    });
  }

  public onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file: File = event.target.files[0];
      this.file.setValue(file);

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.filename = file.name;

        if (!this.name.value) {
          this.name.setValue(file.name);
        }
      };
    }
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.sending = true;

    console.log(this.form.value);

    this.sourceService.store(this.form.value).subscribe(() => {
      this.router.navigate(['/admin/files']);
    }, () => {
      this.sending = false;
      alert('Ocurrio un error.');
    });
  }

}
