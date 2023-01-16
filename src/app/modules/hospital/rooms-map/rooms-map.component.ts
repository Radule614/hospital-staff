import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';
import * as d3 from 'd3';
import { Equipment } from '../model/equipment.model';
import { RoomMap } from '../model/room-map.model';
import { Room } from '../model/room.model';
import { EquipmentService } from '../services/equipment.service';
import { RoomMapService } from '../services/room-map.service';
import {ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MoveRequest } from '../model/move-request';
import { RoomService } from '../services/room.service';


@Component({
  selector: 'app-rooms-map',
  templateUrl: './rooms-map.component.html',
  styleUrls: ['./rooms-map.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('0.7s ease-out', 
                    style({ transform: 'translateX(0)', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'inOutAnimationMap', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('0.7s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RoomsMapComponent implements OnInit {

  constructor(private roomMapService: RoomMapService, private equipmentService: EquipmentService, private roomService: RoomService,
    private _route: ActivatedRoute, private router: Router) {
      
    this.buildingId = this._route.snapshot.paramMap.get('id');
    this.floorId = this._route.snapshot.paramMap.get('floorId');
    this.roomId = this._route.snapshot.paramMap.get('roomId');
   }

  private svg: any;
  private svgWidth = 1000;
  private svgHeight = 800;
  private rooms: RoomMap[] = [];

  @ViewChild(MatTable) equipmentTable!: MatTable<any>;
  displayedColumns = ['name', 'quantity'];
  dispayedColumnsWithMove = [...this.displayedColumns, 'move'];

  @ViewChild(MatTable) requestsTable!: MatTable<any>;
  displayedColumnsRequests = ['type', 'chosenStartTime'];
  dispayedColumnsRequestsWithMove = [...this.displayedColumnsRequests, 'move'];


  buildingId: any = "A";
  floorId: any = 1;
  roomId!: any;
  selectedRoom: Room = new Room();
  selectedRoomEquipment: Equipment[] = [];
  selectedEquipment? : Equipment | null;
  allRooms: RoomMap[] = [];
  requests: MoveRequest[] = [];
  selectedRequest? : MoveRequest | null;

  
  minDate: Date = new Date(2022, 10, 10);
  
  ngOnInit(): void {

    this.roomService.checkMoveRequests().subscribe(res => {
      if(res == true){
        location.reload();
      }
    });

    if (this.buildingId == "A"){
      this.svgWidth = 400;
      this.svgHeight = 790;
    }
    else if(this.buildingId == "B"){
      this.svgWidth = 1000;
      this.svgHeight = 800;
    }



    this.roomMapService.getRoomsByBuildingFloor(this.buildingId, this.floorId).subscribe(res => {
      this.rooms = res;
      this.createSvg();
      this.createRect(this.rooms, this.selectedRoom, this.selectedRoomEquipment, this.requests, 
        this.equipmentTable,  this.requestsTable, this.roomId);
    });

    this.roomMapService.getAllRooms().subscribe(res => {
      this.allRooms = res;
    });

    if(this.roomId != null){
      this.equipmentService.getEquipmentByRoomId(this.roomId).subscribe((res: any) => {
        this.selectedRoomEquipment.splice(0,this.selectedRoomEquipment.length);
        this.selectedRoomEquipment.push(...res);
        this.equipmentTable.renderRows();
      })
    }
    
    
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.svgWidth)
    .attr("height", this.svgHeight)
    .attr("class", "svg-container");
  }

  private createRect(rooms: RoomMap[], selectedRoom: Room, selectedRoomEquipment: Equipment[], requests: MoveRequest[], table: any, requestTable: any, roomId: any): void{
    var service = this.equipmentService;
    var roomService = this.roomService;
    var roomMapService = this.roomMapService;
    var rect = this.svg.selectAll("rect")
    .data(rooms)
    .enter()
    .append("a")
    .append("rect")
    .attr("x", function(d: any, i: any){
      return d.x;
    })
    .attr("y", function(d: any, i: any){
      return d.y;
    })
    .attr("width", function(d: any, i: any){
      return d.width;
    })
    .attr("height", function(d: any, i: any){
      return d.height;
    })
    .attr("fill", function(d: any){
      if(roomId == d.id){
        return "#bcbec2";
      }
      return "#DEDFE1";
    })
    .attr("stroke", function(d: any){
      if(roomId == d.id){
        return "#673AB7";
      }
      return "black";
    })
    .attr("stroke-width", function(d: any){
      if(roomId == d.id){
        return "3";
      }
      return "1";
    })
    .on("mouseover", function(this: any, d: any, i: any){
      d3.select(this)
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer");
    })
    .on("mouseout", function(this: any){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default");
    })
    .on("click", function(this: any, d: any, i: any){
      console.log(i);
      console.log(i.floor);
      selectedRoom.number = i.number;
      selectedRoom.buildingId = i.buildingId;
      selectedRoom.floor = i.floor;
      selectedRoom.description = i.description;

      roomService.getRoom(i.id).subscribe((res: any) => {
        if(res.buildingId == "A"){
          selectedRoom.buildingId = "Bolnica";
        }
        else{
          selectedRoom.buildingId = "Laboratorija";
        }
        selectedRoom.floor = res.floor;
        selectedRoom.description = res.description;
      })

      service.getEquipmentByRoomId(i.id).subscribe((res: any) => {
        selectedRoomEquipment.splice(0,selectedRoomEquipment.length);
        selectedRoomEquipment.push(...res);
        table.renderRows();
      })

      roomMapService.getRequestsForRoom(i.id).subscribe((res: any) =>{
        requests.splice(0,requests.length);
        requests.push(...res);
        requestTable.renderRows();
      }) 

    });


    this.svg.selectAll("text")
    .data(rooms)
    .enter()
    .append("text")
    .attr("x", function(d: any, i: any){
      return d.x + d.width / 2
    })
    .attr("y", function(d: any, i: any){
      return d.y + d.height / 2
    })
    .attr("font-family", "Montserrat")
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .text(function(d: any, i: any)
    {
      return d.number;
    })
    .style("text-anchor", "middle");
  }

  redirectToRenovation(){
    this.router.navigate(['manager/renovation/hospital/' + this.buildingId +'/floor/'+ this.floorId])
  }

  cancelRequest(request: MoveRequest){
    this.roomMapService.cancelRequest(request.id).subscribe((res: any) => {
    });

    let index = this.requests.indexOf(request);
    this.requests.splice(index, 1);
    this.requestsTable.renderRows();

  }

}
