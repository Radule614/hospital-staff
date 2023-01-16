import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExaminationReport } from '../model/examination-report.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationReportService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createExaminationReport(examinationReport: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinationReports', examinationReport, {headers: this.headers});
  }

  getExaminationReport(searchText : String): Observable<ExaminationReport[]> {
    return this.http.get<ExaminationReport[]>(this.apiHost + 'api/examinationReports/search/' + searchText, {headers: this.headers});
  }

  getExaminationReports(): Observable<ExaminationReport[]> {
    return this.http.get<ExaminationReport[]>(this.apiHost + 'api/examinationReports', {headers: this.headers});
  }
}
