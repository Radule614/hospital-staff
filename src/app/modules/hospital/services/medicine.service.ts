import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiHost + "api/medicines", {headers: this.headers});
  }

  getSelectedMedicines(ids: number[]): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiHost + 'api/medicines/' + ids, {headers: this.headers});
  }

}
