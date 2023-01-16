import { DateRange } from "./date-range.model";

export class WorkTime {
    dateRange: DateRange = new DateRange();
    startTime: string = '';
    endTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.dateRange = obj.dateRange;
            this.startTime = obj.startTime;
            this.endTime = obj.endTime;       
        }
    }


}
