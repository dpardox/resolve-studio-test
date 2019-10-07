import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Regexp } from 'src/app/enums/regexp.enum';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public form: FormGroup;

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(Regexp.email)]],
      password: [null, [Validators.required]],
      remember_me: true
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(this.form.value).subscribe(
      (response) => {
        this.authService.session = response;
        this.loading = false;
        this.router.navigate(['/admin']);
      }, (exception) => {
        alert('Ocurrio un error!');
        this.loading = false;
      }
    );
  }

}
