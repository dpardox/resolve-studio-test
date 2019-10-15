import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const session = this.authService.session;
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: session ? `${session.credentials.token_type} ${session.credentials.access_token}` : ''
      }
    });

    return next.handle(request);
  }

}
