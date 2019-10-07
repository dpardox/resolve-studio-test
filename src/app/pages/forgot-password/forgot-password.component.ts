import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Regexp } from 'src/app/enums/regexp.enum';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public loading = false;
  public form: FormGroup;

  get email() { return this.form.get('email'); }

  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService, private router: Router) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(Regexp.email)]],
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.passwordService.create(this.form.value).subscribe(
      () => {
        alert('Se ha enviado un enlace de restablecimiento de contraseña a su correo electrónico.');
        this.loading = false;
        this.router.navigate(['/login']);
      }, () => {
        alert('Ocurrio un error.');
        this.loading = false;
      }
    );
  }

}
