import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Source, SourceData } from '../interfaces/source.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor(private http: HttpClient) { }

  public store(data: Source): Observable<Source> {
    const { file, separator, company, name } = data;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('separator', separator);
    formData.append('company', `${company}`);
    formData.append('name', name);
    return this.http.post<Source>(`${environment.entrypoint.api}/sources`, formData);
  }

  public list(): Observable<Source[]> {
    return this.http.get<Source[]>(`${environment.entrypoint.api}/sources`);
  }

  public delete(id: number): Observable<Source> {
    return this.http.delete<Source>(`${environment.entrypoint.api}/sources/${id}`);
  }

  public data(id: number): Observable<SourceData> {
    return this.http.get<SourceData>(`${environment.entrypoint.api}/sources/${id}`);
  }

  public admin(id: number): Observable<Source[]> {
    return this.http.get<Source[]>(`${environment.entrypoint.api}/sources/admin/${id}`);
  }

}
