import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Regexp } from 'src/app/enums/regexp.enum';
import { PasswordService } from 'src/app/services/password.service';
import { Password } from 'src/app/interfaces/password.interface';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public loaded = false;
  public sending = false;
  public finded: Password;
  public form: FormGroup;

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get confirmation() { return this.form.get('password_confirmation'); }

  constructor(
    private formBuilder: FormBuilder,
    private passwordService: PasswordService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.passwordService.find(params.token).subscribe((response) => {
        this.finded = response;
        this.form = this.buildForm();
        this.loaded = true;
      }, () => {
        alert('Token de restablecimiento de contraseña no válido.');
        this.router.navigate(['/login']);
      });
    });
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: [{ value: this.finded.email, disabled: true }, [Validators.required, Validators.pattern(Regexp.email)]],
      password: [null, [Validators.required]],
      password_confirmation: [null, [Validators.required]],
      token: this.finded.token
    }, {
      validator: this.matchingPasswords('password', 'password_confirmation')
    });
  }

  private matchingPasswords(password: string, confirmation: string) {
    return (group: FormGroup) => {
      const passwordField = group.controls[password];
      const confirmationField = group.controls[confirmation];

      if (passwordField.value !== confirmationField.value) {
        return confirmationField.setErrors({ notEquivalent: true });
      } else {
        return confirmationField.setErrors(null);
      }
    };
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.sending = true;

    this.passwordService.reset(this.form.getRawValue()).subscribe(
      () => {
        this.sending = false;
        this.router.navigate(['/login']);
      }, () => {
        alert('Ocurrio un error.');
        this.sending = false;
      }
    );
  }

}
