import { Component, OnInit } from '@angular/core';
import { Bed } from '../model/bed.model';
import { InpatientTreatment } from '../model/inpatient-treatment.model';
import { Patient } from '../model/patient.model';
import { Room } from '../model/room.model';
import { Roomm } from '../model/roomm.model';
import { InpatientTreatmentService } from '../services/inpatient-treatment.service';
import { PatientService } from '../services/patient.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-create-inpatient-treatment',
  templateUrl: './create-inpatient-treatment.component.html',
  styleUrls: ['./create-inpatient-treatment.component.css']
})
export class CreateInpatientTreatmentComponent implements OnInit {

  public patients: Patient[]  =[];
  public rooms: Roomm[] = [];
  public beds: Bed[] = [];
  public inpatientTreatment: InpatientTreatment = new InpatientTreatment();
  public isRoomSelected: boolean = true;

  constructor(private patientService: PatientService, private roomService: RoomService, private inpatientTreatmentService: InpatientTreatmentService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })

    this.roomService.getRoomms().subscribe(res => {
      this.rooms = res;
    })
  }

  public getFreeBeds() {
    this.isRoomSelected = false;
    this.beds = [];
    for (var room of this.rooms) {
      if (room.id === this.inpatientTreatment.roomId) {
        for (var bed of room.beds) {
          if (bed.isAvailable === true) {
            this.beds.push(bed);
          }
        }
      }
    }
  }

  public createInpatientTreatment() {
    if (this.isValid()) {
      this.inpatientTreatment.dateOfAdmission.setHours(this.inpatientTreatment.dateOfAdmission.getHours() + 1);
      this.inpatientTreatmentService.createInpatientTreatment(this.inpatientTreatment).subscribe(res => {
        alert("Created!");
      });
      } else {
        alert("All fields must be filled!");
      }
  }

  private isValid(): boolean {
    return this.inpatientTreatment.patientId.toString() != '' && this.inpatientTreatment.reasonForAdmission != '' && this.inpatientTreatment.roomId.toString() != ''
    && this.inpatientTreatment.bedId.toString() != '' && this.inpatientTreatment.dateOfAdmission.toString() != '';
  }

}
