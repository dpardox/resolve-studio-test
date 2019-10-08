import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../interfaces/company.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public get(id: number): Observable<Company> {
    return this.http.get<Company>(`${environment.entrypoint.api}/companies/${id}`);
  }

  public list(): Observable<Company[]> {
    return this.http.get<Company[]>(`${environment.entrypoint.api}/companies`);
  }

  public create(data: Company): Observable<Company> {
    return this.http.post<Company>(`${environment.entrypoint.api}/companies`, data);
  }

  public update(id: number, data: Company): Observable<Company> {
    return this.http.put<Company>(`${environment.entrypoint.api}/companies/${id}`, data);
  }

  public delete(id: number): Observable<Company> {
    return this.http.delete<Company>(`${environment.entrypoint.api}/companies/${id}`);
  }

}
