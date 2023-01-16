export class DateRange {
    start: Date = new Date();
    end: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.start = obj.start;
            this.end = obj.end;   
        }
    }
}
