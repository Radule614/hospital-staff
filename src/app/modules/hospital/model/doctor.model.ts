export class Doctor {

    doctorId: number = 0;
    name: string = '';
    surname: string = '';
    specializationId: string = '';
    roomId: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.doctorId = obj.doctorId;
            this.name = obj.name;
            this.surname = obj.surname;
            this.specializationId = obj.specializationId;
            this.roomId = obj.roomId;
        }
    }
}