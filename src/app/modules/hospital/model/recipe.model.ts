import { Medicine } from "./medicine.model";

export class Recipe {
    recipeId: number = 0;
    medicineIds: number[] = [];
    medicines: Medicine[] = [];
    wayOfUse: string = '';
    dateOfIssue: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.recipeId = obj.recipeId;
            this.medicineIds = obj.medicineIds;
            this.medicines = obj.medicines;
            this.wayOfUse = obj.wayOfUse;
            this.dateOfIssue = obj.dateOfIssue; 
        }
    }

}
