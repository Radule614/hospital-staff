import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createEvent(eventType: string): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/event/' + eventType, {headers: this.headers});
  }

  getAverageNumberOfViewsForEachStep(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/numberOfViewsForEachStep", {headers: this.headers});
  }

  getAverageNumberOfViewsForEachStepCanceled(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/numberOfViewsForEachStepCanceled", {headers: this.headers});
  }

  getAveragePageTimeInSeconds(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averagePageTimeInSeconds", {headers: this.headers});
  }

  getAveragePageTimeInSecondsCanceled(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averagePageTimeInSecondsCanceled", {headers: this.headers});
  }

  getNumberOfSuccessfulScheduling(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/numberOfSuccessfulScheduling", {headers: this.headers});
  }

  getNumberOfUnsuccessfulScheduling(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/numberOfUnsuccessfulScheduling", {headers: this.headers});
  }

  getAverageNumberOfStepsForSuccessfulSchedule(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averageNumberOfStepsForSuccessfulSchedule", {headers: this.headers});
  }
  getAverageNumberOfStepsForCanceledSchedule(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averageNumberOfStepsForCanceledSchedule", {headers: this.headers});
  }
  getAverageTimeForSuccessfulSchedule(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averageTimeForSuccessfulSchedule", {headers: this.headers});
  }
  getAverageTimeForCanceledSchedule(): Observable<any> {
    return this.http.get<any>(this.apiHost + "api/event/averageTimeForCanceledSchedule", {headers: this.headers});
  }
}
