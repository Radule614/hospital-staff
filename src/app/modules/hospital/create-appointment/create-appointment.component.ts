import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UserDataService } from '../../pages/login/log-user-data.service';
import { Appointment } from '../model/appointment.model';
import { Patient } from '../model/patient.model';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';
import { PhysicianScheduleService } from '../services/physician-schedule.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  public appointment: Appointment = new Appointment();
  public patients: Patient[] = [];
  startDate = new Date();
  public isPatientSelected: boolean = false;
  public doctorId: number = 0;
  
  times = [
    {value: '8:00', viewValue: '8:00'},
    {value: '8:30', viewValue: '8:30'},
    {value: '9:00', viewValue: '9:00'},
    {value: '9:30', viewValue: '9:30'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:30', viewValue: '10:30'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:30', viewValue: '11:30'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:30', viewValue: '13:30'},
    {value: '14:00', viewValue: '14:00'},
    {value: '14:30', viewValue: '14:30'},
    {value: '15:00', viewValue: '15:00'},
    {value: '15:30', viewValue: '15:30'},
    {value: '16:00', viewValue: '16:00'},
    {value: '16:30', viewValue: '16:30'},
    {value: '17:00', viewValue: '17:00'}
  ];

  constructor(private patientService: PatientService, private appointmentService: AppointmentService, private physicianScheduleService: PhysicianScheduleService, private userDataService : UserDataService) { 
    this.userDataService.m_UserData$.pipe(tap(user_data => {
      if(user_data != null) {
        this.doctorId = user_data.UserId;
        this.appointment.doctorId = user_data.UserId;
      }
    })).subscribe();
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })

  }

  public createAppointment() {
    if (!this.isFormFilled()) {
      alert("All fields must be filled!");
      return;
    };
    if (!this.isDateValid()) {
      alert("You can't choose date from past!");
      return;
    }
    this.appointmentService.createAppointment(this.doctorId, this.appointment).subscribe(res => {
      //this.router.navigate(['/rooms']);
      if (res === 0){
        alert("Choose another appointment!");
      }
      else {
        alert("Appointment is scheduled!");
      }
    });
  }

  public selectPatient() {
    this.isPatientSelected = true;
  }

  private isFormFilled(): boolean {
    return this.isPatientSelected && this.appointment?.date.toString() != '' && this.appointment?.time != '';
  }

  private isDateValid() {
    return this.appointment.date >= new Date();
  }

}
