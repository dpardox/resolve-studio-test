import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Password } from '../interfaces/password.interface';
import { Message } from '../interfaces/message.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) { }

  public create(data: Password): Observable<Message> {
    return this.http.post<Message>(`${environment.entrypoint.api}/password/create`, data);
  }

  public find(token: string): Observable<Password> {
    return this.http.get<Password>(`${environment.entrypoint.api}/password/find/${token}`);
  }

  public reset(data: Password): Observable<Password> {
    return this.http.post<Password>(`${environment.entrypoint.api}/password/reset`, data);
  }

}
