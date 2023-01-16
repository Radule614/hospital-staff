import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room.model';
import { Roomm } from '../model/roomm.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiHost + 'api/rooms', {headers: this.headers});
  }

  getRoomms(): Observable<Roomm[]> {
    return this.http.get<Roomm[]>(this.apiHost + 'api/rooms', {headers: this.headers});
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.apiHost + 'api/rooms/id/' + id, {headers: this.headers});
  }

  deleteRoom(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
  }

  createRoom(room: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/rooms', room, {headers: this.headers});
  }

  updateRoom(room: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/rooms/' + room.id, room, {headers: this.headers});
  }

  getRoomsByBuildingFloor(buildingId: any, floor: any): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiHost + 'api/rooms/' + buildingId + "/" + floor, {headers: this.headers});
  }

  checkMoveRequests(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/rooms/moveRequests/check', {headers: this.headers});
  }

}
