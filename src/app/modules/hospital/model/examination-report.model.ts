import { Recipe } from "./recipe.model";
import { Symptom } from "./symptom.model";

export class ExaminationReport {
    examinationReportId: number = 0;
    symptomIds: number[] = [];
    symptoms: Symptom[] = [];
    report: string = '';
    recipes: Recipe[] = [];
    appointmentId: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.examinationReportId = obj.examinationReportId;
            this.symptomIds = obj.symptomIds;
            this.symptoms = obj.symptoms;
            this.report = obj.report;
            this.recipes = obj.recipes;
            this.appointmentId = obj.appointmentId;
        }
    }
}
