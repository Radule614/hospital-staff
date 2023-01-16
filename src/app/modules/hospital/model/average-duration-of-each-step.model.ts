export class AverageDurationOfEachStep {
    selectSymptomsInSeconds: number = 0;
    enterReportInSeconds: number = 0;
    createRecipesInSeconds: number = 0;
    finishExaminationInSeconds: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.selectSymptomsInSeconds = obj.selectSymptomsInSeconds;
            this.enterReportInSeconds = obj.enterReportInSeconds;
            this.createRecipesInSeconds = obj.createRecipesInSeconds;
            this.finishExaminationInSeconds = obj.finishExaminationInSeconds;
        }
    }
}
