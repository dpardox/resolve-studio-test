import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public role: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.role = this.authService.session.user.role;
  }

}
