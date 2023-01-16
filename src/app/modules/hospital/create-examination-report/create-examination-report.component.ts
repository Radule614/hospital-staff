import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExaminationReport } from '../model/examination-report.model';
import { Symptom } from '../model/symptom.model';
import { SymptomService } from '../services/symptom.service';
import { Medicine } from '../model/medicine.model';
import { MedicineService } from '../services/medicine.service';
import { Recipe } from '../model/recipe.model';
import { ExaminationReportService } from '../services/examination-report.service';
import { PhysicianScheduleService } from '../services/physician-schedule.service';
import { Appointment } from '../model/appointment.model';
import { PhysicianSchedule } from '../model/physician-schedule.model';
import { ExaminationService } from '../services/examination.service';
import { UserDataService } from '../../pages/login/log-user-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-examination-report',
  templateUrl: './create-examination-report.component.html',
  styleUrls: ['./create-examination-report.component.css']
})
export class CreateExaminationReportComponent implements OnInit {

  public symptoms: Symptom[] = [];
  public selectedSymptoms: Symptom[] = [];
  public selectedSymptomIds = new FormControl('');
  public medicines: Medicine[] = [];
  public selectedMedicines: Medicine[] = [];
  public medicineIds: number[] = [];
  public appointments: Appointment[] = [];
  public selectedMedicinesIds = new FormControl('');
   wayOfUse: string = '';
  public recipe: Recipe = new Recipe();
  clicked: boolean = false;
  public physicianSchedule: PhysicianSchedule = new PhysicianSchedule();
  examinationReport: ExaminationReport = new ExaminationReport();
  public doctorId: number = 1;




  constructor(private symptomService: SymptomService, private _formBuilder: FormBuilder, private medicineService: MedicineService, private examinationReportService: ExaminationReportService, private physicianScheduleService: PhysicianScheduleService, private examinationService: ExaminationService, private userDataService : UserDataService) {

   }

  ngOnInit(): void {
    
    this.symptomService.getSymptoms().subscribe(res => {
      this.symptoms = res;
    })

    this.medicineService.getMedicines().subscribe(res => {
      this.medicines = res;
    })

    
      this.physicianScheduleService.getAppointments(this.doctorId).subscribe(res => {
        this.appointments = res;
        console.log(res);
      })
  
      this.physicianScheduleService.getPhysicianSchedule(this.doctorId).subscribe(res => {
        this.physicianSchedule = res;
      })
  
    
    
  }

  public setAppointmentToFinish() {
          this.physicianScheduleService.setAppointmentToFinish(this.examinationReport.appointmentId);
      }
    
  

  public createRecipe() {
    var i = 0;
    Object.entries(Object(this.selectedMedicinesIds.value)).forEach(([key, value], index) => {
      console.log(value);
      this.recipe.medicineIds[i] = Number(value);
      i++;
    }); 
    this.recipe.wayOfUse = this.wayOfUse.trim();
    this.examinationReport.recipes.push(this.recipe);
    this.recipe = new Recipe();
    this.selectedMedicinesIds = new FormControl('');
    this.wayOfUse = '';
  }

  public checkArray() {
    console.log(this.selectedSymptomIds.value);
  }

  public create() {
    this.examinationReport.symptomIds = [];
    var i = 0;
    Object.entries(Object(this.selectedSymptomIds.value)).forEach(([key, value], index) => {
      console.log(value);
      this.examinationReport.symptomIds[i] = Number(value);
      i++;
    });   
  }

  public viewReport() {
    this.clicked = true;
    this.selectedMedicines = [];
    this.selectedSymptoms = [];
    if (this.examinationReport.symptomIds.length !== 0) {
    this.symptomService.getSelectedSymptoms(this.examinationReport.symptomIds).subscribe(res => {
      this.selectedSymptoms = res;
      console.log(res);
    })
    }
    this.medicineIds = [];

    // for (var recipe:Recipe in this.examinationReport.recipes) {
    //   for (let medicine of recipe.medicines) {
    //     this.medicineIds.push(medicine.medicineId);
    //   }
    // }

    this.examinationReport.recipes.forEach((recipe) => {
      recipe.medicineIds.forEach(id => {
        this.medicineIds.push(id);
      });
    })


    if (this.medicineIds.length !== 0) {
    this.medicineService.getSelectedMedicines(this.medicineIds).subscribe(res => {
      this.selectedMedicines = res;
      console.log(this.selectedMedicines);
    })
  }

  }

  public createExaminationReport() {
    if (this.wayOfUse !== '') {
      this.createRecipe();
    }
    if (this.examinationReport.appointmentId === 0) {
      alert("Please select patient!");
    }
    else if (this.examinationReport.report === '') {
      alert('Please enter examination report');
    } 
    else {
      this.examinationReportService.createExaminationReport(this.examinationReport).subscribe(res => {
        this.physicianScheduleService.setAppointmentToFinish(this.examinationReport.appointmentId).subscribe(res => {
          alert("Created!");
        })
        console.log(this.examinationReport);
      })
    }
    
  }

  public startExamination() {
    this.examinationService.startExamination(this.examinationReport.appointmentId).subscribe(res => {

    })
  }

  public addSymptoms() {
    this.examinationService.addSymptoms(this.examinationReport.appointmentId).subscribe(res => {

    })
  }

  public addReport() {
    this.examinationService.addReport(this.examinationReport.appointmentId).subscribe(res => {

    })
  }

  public addRecipes() {
    this.examinationService.addRecipes(this.examinationReport.appointmentId).subscribe(res => {

    })
  }

  public finishExamination() {
    this.examinationService.finishExamination(this.examinationReport.appointmentId).subscribe(res => {

    })
  }

  public callAll() {
    this.create();
    this.addSymptoms();
  }

  public all() {
    this.createExaminationReport();
    this.finishExamination();
  }

  }


