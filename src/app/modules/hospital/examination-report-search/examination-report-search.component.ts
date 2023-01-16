import { Component, Input } from '@angular/core';
import { ExaminationReport } from '../model/examination-report.model';
import { ExaminationReportService } from '../services/examination-report.service';

@Component({
  selector: 'app-examination-report-search',
  templateUrl: './examination-report-search.component.html',
  styleUrls: ['./examination-report-search.component.css']
})
export class ExaminationReportSearchComponent {

public examinationReports: ExaminationReport[] = [];

public searchedExaminationReports : ExaminationReport[] = [];

public dataSource : ExaminationReport[] = [];

public listMedicines : String[] = [];

searchText : String = "";

medicineNameString : String = "";

constructor(private service : ExaminationReportService) {}

public getExaminationReport()
{
  if(this.searchText == "")
  {
    this.listMedicines.length = 0;
    this.dataSource = this.examinationReports; 
      this.putMedicinesInList(this.examinationReports);
  }
  else 
  {
    this.listMedicines.length = 0;
    this.service.getExaminationReport(this.searchText).subscribe(res => {
      this.searchedExaminationReports = res;
        this.dataSource = this.searchedExaminationReports;
          this.putMedicinesInList(this.searchedExaminationReports);
    });
  }
}

public putMedicinesInList(examinationReps : ExaminationReport[])
{
  for(let examinationRep of examinationReps)
  {
    for(let recipe of examinationRep.recipes)
    {
      for(let medicine of recipe.medicines)
      {
        this.medicineNameString = this.medicineNameString + " " + medicine.name.toString();
      }
      this.listMedicines.push(this.medicineNameString);
      this.medicineNameString = "";
    }
  }
}

ngOnInit(): void {
  this.service.getExaminationReports().subscribe(res => {
    this.examinationReports = res;
      this.dataSource = this.examinationReports;
        this.putMedicinesInList(this.examinationReports);
  }); 
  }
}
