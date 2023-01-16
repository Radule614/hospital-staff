import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserDataService } from '../../pages/login/log-user-data.service';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { PhysicianScheduleService } from '../services/physician-schedule.service';

@Component({
  selector: 'app-show-appointments',
  templateUrl: './show-appointments.component.html',
  styleUrls: ['./show-appointments.component.css']
})
export class ShowAppointmentsComponent implements OnInit {

  public appointments: Appointment[] = [];
  public doctorId: number = 0;
  
  constructor(private appointmentService: AppointmentService, private physicianScheduleService: PhysicianScheduleService, private route: ActivatedRoute,
    private router: Router, private userDataService : UserDataService) { 
      this.userDataService.m_UserData$.pipe(tap(user_data => {
        if(user_data != null) {
          this.doctorId = user_data.UserId;
        }
      })).subscribe();
    }
  
  ngOnInit(): void {
    // trnutno zakucan id doktora na 1
    // this.appointmentService.getDoctorAppointments(5).subscribe(res => {
    //   this.appointments = res;
      
    // }); 

    //zakucao za doktora sa id-jem 1
    this.physicianScheduleService.getAppointments(this.doctorId).subscribe(res => {
      this.appointments = res;
      console.log(res);
    })

    }

    public deleteAppointment(id: number) {
      this.appointmentService.deleteAppointment(id).subscribe(res=>
        this.appointmentService.getDoctorAppointments(1).subscribe(res => {
          this.appointments = res;
          alert("Appointment is deleted!");
        }) 
      )
  }

    
      public updateAppointment(id: number) {
        this.router.navigate(['/appointment/' + id + '/update']);  
      }

      checkTime(time: string){
        var sat = time.split(':');
        if(sat[1].length <2){
          time = time+'0'; 
        }
        return time ;
        
        }

}
