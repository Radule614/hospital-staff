export class AverageDurationOfSingleStep {
    public durationInSeconds: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.durationInSeconds = obj.durationInSeconds;
        }
    }
}
