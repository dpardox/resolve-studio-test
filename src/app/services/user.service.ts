import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public get(id: number): Observable<User> {
    return this.http.get<User>(`${environment.entrypoint.api}/users/${id}`);
  }

  public list(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.entrypoint.api}/users`);
  }

  public create(data: User): Observable<User> {
    return this.http.post<User>(`${environment.entrypoint.api}/users`, data);
  }

  public update(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${environment.entrypoint.api}/users/${id}`, data);
  }

  public delete(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.entrypoint.api}/users/${id}`);
  }

  public admins(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.entrypoint.api}/users/admins`);
  }

}
