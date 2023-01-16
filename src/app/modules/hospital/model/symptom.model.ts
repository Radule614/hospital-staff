export class Symptom {
    symptomId: number = 0;
    name: string = '';
    
    public constructor(obj?: any) {
        if (obj) {
            this.symptomId = obj.symptomId;
            this.name = obj.name;
        }
    }
}
