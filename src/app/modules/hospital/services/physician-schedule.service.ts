import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { PhysicianSchedule } from '../model/physician-schedule.model';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class PhysicianScheduleService {
  
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPhysicianSchedule(doctorId: number): Observable<PhysicianSchedule> {
    return this.http.get<PhysicianSchedule>(this.apiHost + 'api/physicianSchedules/doctor/' + doctorId, {headers: this.headers});
  }

  getAppointments(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/physicianSchedules/appointments/' + doctorId, {headers: this.headers});
  }

  updatePhysicianSchedule(physicianSchedule: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/physicianSchedules/' + physicianSchedule.physicianScheduleId, physicianSchedule, {headers: this.headers});
  }

  setAppointmentToFinish(appointmentId: number): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/physicianSchedules/finish/' + appointmentId, {headers: this.headers});
  }

  

}
