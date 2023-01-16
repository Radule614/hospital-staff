export class Vacation {
    id: number = 0;
    startDate: Date = new Date();
    endDate: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.startDate = obj.startDate;
            this.endDate = obj.endDate;       
        }
    }
}
