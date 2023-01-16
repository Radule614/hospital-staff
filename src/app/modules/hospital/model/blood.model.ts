export class Blood {
    bloodId: number = 0;
    bloodType: string = '';
    quantityInLiters: number = 0;
    expiresOn: Date|null = new Date();
    title: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.bloodId = obj.bloodId;
            this.bloodType = obj.bloodType;
            this.quantityInLiters = obj.quantityInLiters;
            this.expiresOn = obj.dateRangeStart;
            this.title = obj.title
        }
    }
}




