import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public burger = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  public logout() {
    if (confirm('¿Cerrar sesión?')) {
      this.authService.logout().subscribe();
      this.authService.session = null;
      this.router.navigate(['/login']);
    }
  }

}
