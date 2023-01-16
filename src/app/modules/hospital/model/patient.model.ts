export class Patient {
    patientId: number = 0;
    name: string = '';
    surname: string = '';
    email: string = '';
    password: string = '';
    isAcountActivated: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.patientId = obj.id;
            this.name = obj.name;
            this.surname = obj.surname; 
            this.email = obj.email;
            this.password = obj.password;
            this.isAcountActivated = obj.isAcountActivated;       
        }
    }
}