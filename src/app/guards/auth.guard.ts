import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.check()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  canActivateChild(): boolean {
    if (!this.authService.check()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
