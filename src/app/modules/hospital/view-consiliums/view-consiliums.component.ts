import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { thresholdScott } from 'd3';
import { Doctor } from '../model/doctor.model';
import { ConsiliumService } from '../services/consilium.service';
import { DoctorService } from '../services/doctor.service';
import { Consilium } from '../model/consilium.model';
import { Room } from '../model/room.model';

import { ThisReceiver } from '@angular/compiler';
import { SpecializationService } from '../services/specialization.service';
import { Specialization } from '../model/specialization.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoomService } from 'src/app/modules/hospital/services/room.service';
import { UserDataService } from 'src/app/modules/pages/login/log-user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-view-consiliums',
  templateUrl: './view-consiliums.component.html',
  styleUrls: ['./view-consiliums.component.css']
})
export class ViewConsiliumsComponent implements OnInit {


  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public id: number = 0;
  public consiliums: Consilium[] = [];
  public dataSource = new MatTableDataSource<Consilium>();
  public displayedColumns = ['topic','dateStart','dateEnd','startTime','duration','numberOfRoom', 'otherDoctors'];
  public loogedUserId: number = 0

  constructor(private doctorService : DoctorService, private consiliumService : ConsiliumService,private roomService: RoomService,private route: ActivatedRoute,
    private router: Router,private http: HttpClient, private userDataService : UserDataService) { 
      this.userDataService.m_UserData$.pipe(tap(user_data => {
        if(user_data != null)this.id = user_data.UserId;
      })).subscribe();


    }

  ngOnInit(): void {
    //hardkodovano

        
    this.consiliumService.getDoctorConsiliums(this.id).subscribe(res => {
        this.consiliums = res; 
        this.dataSource.data = this.consiliums;
   //     this.consiliums[1].doctors ='dd'
     //   alert( this.consiliums[1].doctors)
    
        for (let i = 0; i < this.consiliums.length; i++) {
          this.roomService.getRoom(this.consiliums[i].roomId).subscribe(res => {
            this.consiliums[i].room= res
           
            for (let j = 0; j < this.consiliums[i].doctorIds.length; j++) {
       
                if(this.consiliums[i].doctorIds[j]!=this.id){
                  this.consiliums[i].doctors = ''
                  this.doctorService.getDoctor(this.consiliums[i].doctorIds[j]).subscribe(res => {
                  
                  if(this.consiliums[i].doctors!=''){
                    this.consiliums[i].doctors= this.consiliums[i].doctors + ' , '  
                  }
                    this.consiliums[i].doctors = this.consiliums[i].doctors + res.name + " " +res.surname
                });
                }
              }
          })
          

        }
          
        
    })

    this.consiliums.forEach(function (value) {
      alert(value.consiliumId);
  });

  }
/*
  private setRooms(){
    this.consiliums.forEach(function (value) {
      this.getRoom(1);
    });
  }
  */
  private getRoom(roomId: number){
    this.roomService.getRoom(roomId).subscribe(res => {
      return res
    })
  }


}
