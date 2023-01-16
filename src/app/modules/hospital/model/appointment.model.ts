import { Patient } from "./patient.model";

export class Appointment {
    id: number = 0;
    date: Date = new Date();
    time: string = '';
    doctorId: number = 0;
    patientId: number = 0;
    patient: Patient = new Patient();
    isFinished: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.AppointmentId;
            this.date = obj.date;
            this.time = '';
            this.doctorId = obj.doctorId;   
            this.patientId = obj.patientId;
            this.isFinished = obj.isFinished;
        }
    }
}