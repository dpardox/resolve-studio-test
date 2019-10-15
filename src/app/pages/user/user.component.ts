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
  get phone() { return this.form.get('phone'); }
  get birthday() { return this.form.get('birthday'); }
  get role() { return this.form.get('role'); }
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
    const { name = '', lastname = '', phone = '', birthday = '', role = 'admin', email = '' } = this.user ? this.user : {};

    const password = [Validators.maxLength(60)];

    if (!this.user) {
      password.push(Validators.required);
    }

    return this.formBuilder.group({
      name: [name, [Validators.required, Validators.maxLength(40)]],
      lastname: [lastname, [Validators.required, Validators.maxLength(40)]],
      phone: [phone, [Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern(Regexp.number)]],
      birthday: [birthday, [Validators.required, Validators.pattern(Regexp.date)]],
      role: [role, [Validators.required]],
      email: [email, [Validators.required, Validators.maxLength(40), Validators.pattern(Regexp.email)]],
      password: [null, password],
      password_confirmation: null,
    }, {
      validator: [
        this.matchingPasswords('password', 'password_confirmation'),
        this.validateDate('birthday')
      ],
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

  private validateDate(date: string) {
    return (group: FormGroup) => {
      const dateField = group.controls[date];

      const [ year = null, month = null, day = null ] = dateField.value.split('-');

      if (Number(year) < 1000 || Number(year) > 3000 || Number(month) === 0 || Number(month) > 12) {
        return dateField.setErrors({ incorrect: true });
      }

      const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      if (Number(year) % 400 === 0 || (Number(year) % 100 !== 0 && Number(year) % 4 === 0)) {
          monthLength[1] = 29;
      }

      if (Number(day) === 0 || Number(day) > monthLength[Number(month) - 1]) {
        return dateField.setErrors({ incorrect: true });
      }

      return dateField.setErrors(null);
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
