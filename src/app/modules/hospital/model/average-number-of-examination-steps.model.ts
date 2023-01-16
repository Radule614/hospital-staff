export class AverageNumberOfExaminationSteps {
    avgNumOfSteps: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.avgNumOfSteps = obj.avgNumOfSteps;
        }
    }
}
