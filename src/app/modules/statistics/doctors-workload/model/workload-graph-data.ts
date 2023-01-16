export class WorkloadGraphData {
    date: string = "";
    numberOfAppointments: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            
            this.date = obj.date;
            this.numberOfAppointments = obj.numberOfAppointments;
        }
    }

}