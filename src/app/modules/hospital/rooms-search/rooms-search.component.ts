import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RoomMap } from '../model/room-map.model';
import { RoomMapService } from '../services/room-map.service';


@Component({
  selector: 'app-rooms-search',
  templateUrl: './rooms-search.component.html',
  styleUrls: ['./rooms-search.component.css']
})
export class RoomsSearchComponent implements OnInit {

  searchText! : string;
  rooms : any;
  displayedColumns: string[] = ['number', 'floor', 'building', "location"];


 @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private roomMapService: RoomMapService) { }

  ngOnInit(): void {
    this.roomMapService.getAllRooms().subscribe(res => {
      this.rooms = new MatTableDataSource<RoomMap>(res.sort(function(a,b){ return (a.number > b.number) ? 1 : -1}));
      this.rooms.paginator = this.paginator;
    })
  }


  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.rooms.filter = filterValue.trim().toLowerCase();
  }

  getBuildingName(buildingId: string): string {
    if(buildingId == "A"){
      return "Bolnica";
    }
    return "Laboratorija"
  }

}
