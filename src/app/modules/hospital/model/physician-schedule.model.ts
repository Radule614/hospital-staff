import { Appointment } from "./appointment.model";
import { Doctor } from "./doctor.model";
import { Vacation } from "./vacation.model";
import { WorkTime } from "./work-time.model";

export class PhysicianSchedule {
    physicianScheduleId: number = 0;
    doctorId: number = 0;
    doctor: Doctor = new Doctor();
    workTimes: WorkTime[] = [];
    appointments: Appointment[] = [];
    vacations: Vacation[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.physicianScheduleId = obj.physicianScheduleId;
            this.doctorId = obj.doctorId;
            this.doctor = obj.doctor;
            this.workTimes = obj.workTimes;
            this.appointments = obj.appointments;
            this.vacations = obj.vacations;
        }
    }

}
