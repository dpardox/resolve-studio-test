import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Regexp } from 'src/app/enums/regexp.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public loaded = false;
  public sending = false;
  public user: User;
  public form: FormGroup;

  get name() { return this.form.get('name'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get confirmation() { return this.form.get('password_confirmation'); }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.userService.get(params.id).subscribe((response) => {
          this.user = response;
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
    const { name = '', lastname = '', email = '' } = this.user ? this.user : {};

    const password = [Validators.maxLength(60)];

    if (!this.user) {
      password.push(Validators.required);
    }

    return this.formBuilder.group({
      name: [name, [Validators.required, Validators.maxLength(40)]],
      lastname: [lastname, [Validators.required, Validators.maxLength(40)]],
      email: [email, [Validators.required, Validators.maxLength(40), Validators.pattern(Regexp.email)]],
      password: [null, password],
      password_confirmation: null,
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

    const id = this.user ? this.user.id : null;

    if (id) {
      this.userService.update(id, this.form.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      }, () => {
        this.sending = false;
        alert('Ocurrio un error.');
      });
    } else {
      this.userService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      }, () => {
        this.sending = false;
        alert('Ocurrio un error.');
      });
    }
  }

}
