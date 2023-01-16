import { Component, OnInit } from '@angular/core';
import { VacationRequest } from '../model/vacation-request';
import { VacationService } from '../services/vacation.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { startWith, tap } from 'rxjs';
import { UserDataService } from '../../pages/login/log-user-data.service';

@Component({
  selector: 'app-create-vacation',
  templateUrl: './create-vacation.component.html',
  styleUrls: ['./create-vacation.component.css']
})
export class CreateVacationComponent implements OnInit {


  minDate = new Date();

  fourDaysFromNow = new Date();

  vacationRequest : VacationRequest = new VacationRequest();

  public appointment: Appointment = new Appointment();

  public doctorAppointments: Appointment[] = [];

  public counter: any = 0;

  public isScheduled : any;

  startDate : Date = new Date();

  endDate : Date = new Date();

  appointmentStart : Date = new Date();

  isActivated: any;
  public doctorId: number = 0;

  constructor(private vacationService: VacationService,private router: Router,private appointmentService: AppointmentService, private userDataService : UserDataService) { 
    this.userDataService.m_UserData$.pipe(tap(user_data => {
      if(user_data != null) {
        this.doctorId = user_data.UserId;
      }
    })).subscribe();
  }

  public createVacationRequest(vacationRequest : VacationRequest)
  {
    this.isScheduledInVacationDataRange(vacationRequest);
    if (!this.isReasonInputEmpty()) {
      alert("You must fill in the reason!");
      return;
    };
    if (!this.isStartDateValid()) {
      alert("The first day must be at least 5 days from today!");
      return;
    };
    if(!this.isEndDateValid()){
      alert("The last day must be after the first!");
      return;
    };   
    if(this.isScheduled == true)
    {
      alert("You have scheduled appointments in the given time slot!");
      return;
    };
    this.vacationService.createVacationRequest(this.vacationRequest).subscribe(res => {
        alert("You have successfully created vacation!");
      });
  }

  public ChangeUrgency(){
    this.vacationRequest.urgency = "Urgent"
  }
 
  public CreateUrgentRequest(id:number,start:Date,end:Date,vacationRequest:any){
    if (!this.isReasonInputEmpty()) {
      alert("You must fill in the reason!");
      return;
    };
    if (!this.isStartDateValid()) {
      alert("The first day must be at least 5 days from today!");
      return;
    };
    if(!this.isEndDateValid()){
      alert("The last day must be after the first!");
      return;
    };  
    this.vacationService.CreateUrgentRequest(5,vacationRequest.start,vacationRequest.end,vacationRequest).subscribe(res => {
        alert("You have successfully created vacation!");
      });
  }

  private isEndDateValid() {
     return this.vacationRequest.endDate > this.vacationRequest.startDate;
  }

  private isStartDateValid() {
    return this.vacationRequest.startDate > this.fourDaysFromNow;
  }

  private isReasonInputEmpty() {
    return this.vacationRequest.reason != "";
  }


  private isScheduledInVacationDataRange(vacationRequest: VacationRequest){
    this.startDate = new Date(vacationRequest.startDate);
    this.endDate = new Date(vacationRequest.endDate);
    for(let i = 0;i < this.doctorAppointments.length;i++){
      this.appointmentStart = new Date(this.doctorAppointments[i].date)
      if(this.appointmentStart > this.startDate && this.appointmentStart < this.endDate){
        this.isScheduled = true;
        return;
      }
    }
  }

  ngOnInit(): void {
    this.vacationRequest.doctorId = this.doctorId;
    this.fourDaysFromNow.setDate( this.fourDaysFromNow.getDate() + 4 ); 
    this.vacationRequest.urgency = "NoUrgent"; 
    this.isActivated = true;
    this.appointmentService.getDoctorAppointments(5).subscribe(res => {
      this.doctorAppointments = res;

    });
    this.isScheduled = false;
  }
}



