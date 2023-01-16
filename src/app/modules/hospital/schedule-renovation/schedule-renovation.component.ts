import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { RoomMapService } from '../services/room-map.service';
import { RoomMap } from '../model/room-map.model';
import {FormGroup, FormControl} from '@angular/forms';
import { FreeAppointmentRequestDTO } from '../model/free-appointment-request-dto';
import { MoveRequest } from '../model/move-request';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../statistics/services/event-service.service';

@Component({
  selector: 'app-schedule-renovation',
  templateUrl: './schedule-renovation.component.html',
  styleUrls: ['./schedule-renovation.component.css']
})
export class ScheduleRenovationComponent implements OnInit {

  buildingId: any = "A";
  floorId: any = 0;
  firstRoom: RoomMap = new RoomMap();
  secondRoom: RoomMap = new RoomMap();

  selectedRenovationType = "merging";
  freeAppointmentRequestDTO : FreeAppointmentRequestDTO = new FreeAppointmentRequestDTO();
  freeAppointmentDates?: Date[];
  rooms?: RoomMap[];
  moveRequest: MoveRequest = new MoveRequest();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  successfulSchedule = false;

  constructor(private roomMapService: RoomMapService, private eventService: EventService, private _route: ActivatedRoute,  private router: Router) { 
    this.buildingId =  this._route.snapshot.paramMap.get('hospitalId');
    this.floorId = this._route.snapshot.paramMap.get('floorId');
  }

  ngOnInit(): void {
    this.roomMapService.getRoomsByBuildingFloor(this.buildingId, this.floorId).subscribe(res => {
      this.rooms = res;
    });     
    this.createEvent("RenovationTypePageOpened");
  }

  ngOnDestroy(): void {
    if(this.successfulSchedule != true){
      this.createEvent("Canceled");
    }
  }

  findFreeTimeSlots(){
    this.freeAppointmentRequestDTO.firstRoomId = this.firstRoom.id;
    this.freeAppointmentRequestDTO.secondRoomId = this.secondRoom.id;
    this.freeAppointmentRequestDTO.wantedStartDate = this.fixChosenDate(this.range.value.start!);
    this.freeAppointmentRequestDTO.wantedEndDate = this.fixChosenDate(this.range.value.end!);
    this.freeAppointmentRequestDTO.durationTimeUnit = "days";

    this.roomMapService.getFreeTimeSlotForRooms(this.freeAppointmentRequestDTO).subscribe(res => {
      this.freeAppointmentDates = res;
    });
  }

  addDays(date: Date) : Date{
    var result = new Date(date);
    result.setDate(result.getDate() + this.freeAppointmentRequestDTO.duration);
    return result;
  }

  fixChosenDate(date: Date) : Date{
    var result = new Date(date);
    result.setHours(1);
    return result;
  }

  scheduleRenovation(startDate: Date){
    this.moveRequest.firstRoomId = this.freeAppointmentRequestDTO.firstRoomId;
    this.moveRequest.secondRoomId = this.freeAppointmentRequestDTO.secondRoomId;
    this.moveRequest.duration = this.freeAppointmentRequestDTO.duration;
    this.moveRequest.durationTimeUnit = this.freeAppointmentRequestDTO.durationTimeUnit;
    this.moveRequest.chosenStartTime = this.fixChosenDate(startDate);


    if(this.selectedRenovationType == "merging"){
      this.moveRequest.type = "RenovationMerge";
      this.roomMapService.mergeRooms(this.moveRequest).subscribe(res => {
      });;
    }
    else{
      this.moveRequest.type = "RenovationSplit";
      this.roomMapService.splitRoom(this.moveRequest).subscribe(res => {
      });;
    }

    this.createEvent("RenovationScheduled");
    this.router.navigate(['manager/hospitalMap/hospital/' + this.buildingId +'/floor/'+ this.floorId])

  }

  createEvent(eventType: string){
    this.eventService.createEvent(eventType).subscribe(res => {
    });  
    if(eventType == "RenovationScheduled"){
      this.successfulSchedule = true;
    }
  }

}
