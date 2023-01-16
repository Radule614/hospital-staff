import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';



@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAppointment(doctorId: any, appointment: any): Observable<any> {
    appointment.date.setHours(1);
    console.log(appointment.date);
    return this.http.post<any>(this.apiHost + 'api/physicianSchedules/' + doctorId, appointment, {headers: this.headers});
  }

  getDoctorAppointments(doctorId:number): Observable<any[]> {
    return this.http.get<Appointment[]>(this.apiHost + "api/appointments/doctorAppointments/" + doctorId, {headers: this.headers});
  }


  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/appointments/' + id, {headers: this.headers});
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiHost + 'api/appointments/' + id, {headers: this.headers});
  }

  updateAppointment(appointment: any): Observable<any>{
    return this.http.put<any>(this.apiHost + 'api/appointments/' + appointment.appointmentId, appointment, {headers: this.headers});
 
    
  }


}
