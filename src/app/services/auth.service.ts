import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../interfaces/login.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get session(): { credentials: LoginResponse, user: User } {
    return JSON.parse(localStorage.getItem('session'));
  }

  set session(data: { credentials: LoginResponse, user: User }) {
    if (data) {
      localStorage.setItem('session', JSON.stringify(data));
    } else {
      localStorage.removeItem('session');
    }
  }

  public check(): boolean {
    return this.session ? true : false;
  }

  public login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.entrypoint.api}/auth/login`, data);
  }

  public logout() {
    return this.http.get(`${environment.entrypoint.api}/auth/logout`);
  }

  public user(): Observable<User> {
    return this.http.get<User>(`${environment.entrypoint.api}/auth/user`);
  }

}
