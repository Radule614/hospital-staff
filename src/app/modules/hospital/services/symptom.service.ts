import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Symptom } from '../model/symptom.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.apiHost + 'api/symptoms', {headers: this.headers});
  }

  getSelectedSymptoms(ids: number[]): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.apiHost + 'api/symptoms/' + ids, {headers: this.headers});
  }
}
