export class AverageNumberOfVisitsToCertainStep {
            startExamination: number = 0;
            selectSymptoms: number = 0;
            enterReport: number = 0;
            createRecipes: number = 0;
            finishExamination: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.startExamination = obj.startExamination;
            this.selectSymptoms = obj.selectSymptoms;
            this.enterReport = obj.enterReport;
            this.createRecipes = obj.createRecipes;
            this.finishExamination = obj.finishExamination;
        }
    }
}
