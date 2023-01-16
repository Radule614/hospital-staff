import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {EqTender } from '../model/eq-tender.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EqTenderService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getTenders(): Observable<EqTender[]> {
    return this.http.get<EqTender[]>(this.apiHost + "api/equipmentTender", {headers: this.headers});
  }

}





