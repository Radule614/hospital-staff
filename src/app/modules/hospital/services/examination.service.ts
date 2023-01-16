import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AverageDurationOfEachStep } from '../model/average-duration-of-each-step.model';
import { AverageDurationOfExam } from '../model/average-duration-of-exam.model';
import { AverageDurationOfSingleStep } from '../model/average-duration-of-single-step.model';
import { AverageNumberOfExaminationSteps } from '../model/average-number-of-examination-steps.model';
import { AverageNumberOfVisitsToCertainStep } from '../model/average-number-of-visits-to-certain-step.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  startExamination(appointmentId: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinations/start/' + appointmentId, {headers: this.headers});
  }

  addSymptoms(id: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinations/' + id, {headers: this.headers});
  }

  addReport(id: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinations/report/' + id, {headers: this.headers});
  }

  addRecipes(id: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinations/recipes/' + id, {headers: this.headers});
  }

  finishExamination(id: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/examinations/finish/' + id, {headers: this.headers});
  }

  getAverageNumberOfExaminationSteps(): Observable<AverageNumberOfExaminationSteps> {
    return this.http.get<AverageNumberOfExaminationSteps>(this.apiHost + 'api/examinations', {headers: this.headers});
  }

  getAverageNumberOfVisitsToCertainStep(): Observable<AverageNumberOfVisitsToCertainStep> {
    return this.http.get<AverageNumberOfVisitsToCertainStep>(this.apiHost + 'api/examinations/numberOfVisits', {headers: this.headers});
  }

  getAverageDurationOfExam(): Observable<AverageDurationOfExam> {
    return this.http.get<AverageDurationOfExam>(this.apiHost + 'api/examinations/averageTime', {headers: this.headers});
  }

  getAverageDurationOfEachStep(): Observable<AverageDurationOfEachStep> {
    return this.http.get<AverageDurationOfEachStep>(this.apiHost + 'api/examinations/averageStepDuration', {headers: this.headers});
  }

  getAverageDurationOfSingleStep(): Observable<AverageDurationOfSingleStep> {
    return this.http.get<AverageDurationOfSingleStep>(this.apiHost + 'api/examinations/averageSingleStepDuration', {headers: this.headers});
  }

}
