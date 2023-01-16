import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { MatOptionModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { VacationRequestsDisplayComponent } from './vacation-requests-display/vacation-requests-display.component';
import { CreateVacationComponent } from './create-vacation/create-vacation.component';
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HospitalComponent } from "./hospital.component";
import { CreateBloodRequestComponent } from './create-blood-request/create-blood-request.component';
import { InpatientTreatmentsComponent } from './inpatient-treatments/inpatient-treatments.component';
import { CreateInpatientTreatmentComponent } from './create-inpatient-treatment/create-inpatient-treatment.component';
import { CreateInpatientTreatmentTherapyComponent } from './create-inpatient-treatment-therapy/create-inpatient-treatment-therapy.component';
import { CreateBloodUsageEvidencyComponent } from "./create-blood-usage-evidency/create-blood-usage-evidency.component";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CreateExaminationReportComponent } from './create-examination-report/create-examination-report.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { ScheduleRenovationComponent } from './schedule-renovation/schedule-renovation.component';
import {MatRadioModule} from '@angular/material/radio';
import { CreateConsiliumComponent } from "./create-consilium/create-consilium.component";
import { ViewConsiliumsComponent } from "./view-consiliums/view-consiliums.component";
import { ShowAverageNumberOfExaminationStepsComponent } from './show-average-number-of-examination-steps/show-average-number-of-examination-steps.component';
import { ShowAverageNumberOfVisitsToCertainExaminationStepsComponent } from './show-average-number-of-visits-to-certain-examination-steps/show-average-number-of-visits-to-certain-examination-steps.component';
import { ShowAverageDurationOfExamComponent } from './show-average-duration-of-exam/show-average-duration-of-exam.component';
import { ShowAverageDurationOfExamEachExaminationStepComponent } from './show-average-duration-of-exam-each-examination-step/show-average-duration-of-exam-each-examination-step.component';
import { ShowAverageDurationOfExamSingleExaminationStepComponent } from './show-average-duration-of-exam-single-examination-step/show-average-duration-of-exam-single-examination-step.component';
import { ShowExamStatsComponent } from './show-exam-stats/show-exam-stats.component';
import { CurrentBloodSupplyComponent } from './current-blood-supply/current-blood-supply.component';
import { ExaminationReportSearchComponent } from './examination-report-search/examination-report-search.component';
import { ShowAppointmentsComponent } from './show-appointments/show-appointments.component';





const routes: Routes = [
  {
    path: '', component: HospitalComponent, children: [
      { path: 'createconsilium', component: CreateConsiliumComponent },
      { path: 'consiliums', component: ViewConsiliumsComponent },
      { path: 'blood/supply', component: CurrentBloodSupplyComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'rooms/add', component: CreateRoomComponent },
      { path: 'rooms/:id', component: RoomDetailComponent },
      { path: 'rooms/:id/update', component: UpdateRoomComponent },
      { path: 'appointments/add', component: CreateAppointmentComponent },
      { path: 'appointment/:id/update', component: UpdateAppointmentComponent },
      { path: 'blood/request', component: CreateBloodRequestComponent },
      { path: 'inpatient-treatments', component: InpatientTreatmentsComponent },
      { path: 'inpatient-treatments/add', component: CreateInpatientTreatmentComponent },
      { path: 'inpatient-treatment-therapy/add', component: CreateInpatientTreatmentTherapyComponent },
      { path: 'examinationreport/create', component: CreateExaminationReportComponent },
      { path: 'examinationreport/search', component: ExaminationReportSearchComponent},
      { path: 'bloodUsageEvidency/add', component: CreateBloodUsageEvidencyComponent },
      { path: 'vacations', component: VacationRequestsDisplayComponent },
      { path: 'createvacation', component: CreateVacationComponent },
      { path: 'renovation/hospital/:hospitalId/floor/:floorId', component: ScheduleRenovationComponent },
      { path: 'avgnumofexaminationsteps', component: ShowAverageNumberOfExaminationStepsComponent },
      { path: 'avgnumofvisitstocertainexaminationstep', component: ShowAverageNumberOfVisitsToCertainExaminationStepsComponent},
      { path: 'avgdurationofexam', component: ShowAverageDurationOfExamComponent},
      { path: 'avgdurationofeachexamstep', component: ShowAverageDurationOfExamEachExaminationStepComponent},
      { path: 'avgdurationofsingleexamstep', component: ShowAverageDurationOfExamSingleExaminationStepComponent},
      { path: 'examstats', component: ShowExamStatsComponent},
      { path: 'appointments', component: ShowAppointmentsComponent},
      { path: '**', redirectTo: 'rooms', pathMatch: 'full' },
    ]
  }
];

@NgModule({
    declarations: [
        HospitalComponent,
        RoomsComponent,
        RoomDetailComponent,
        CreateRoomComponent,
        UpdateRoomComponent,
        CreateAppointmentComponent,
        UpdateAppointmentComponent,
        CreateBloodRequestComponent,
        InpatientTreatmentsComponent,
        CreateInpatientTreatmentComponent,
        CreateInpatientTreatmentTherapyComponent,
        CreateBloodUsageEvidencyComponent,
        VacationRequestsDisplayComponent,
        CreateVacationComponent,
        CreateExaminationReportComponent,
        ScheduleRenovationComponent,
        CreateConsiliumComponent,
        ViewConsiliumsComponent,
        ShowAverageNumberOfExaminationStepsComponent,
        ShowAverageNumberOfVisitsToCertainExaminationStepsComponent,
        ShowAverageDurationOfExamComponent,
        ShowAverageDurationOfExamEachExaminationStepComponent,
        ShowAverageDurationOfExamSingleExaminationStepComponent,
        ShowExamStatsComponent,
        CurrentBloodSupplyComponent,
        ExaminationReportSearchComponent,
        ShowAppointmentsComponent,
    ],
    exports: [RouterModule],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-EN' }
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        MatStepperModule,
        NgSelectModule,
        MatOptionModule,
        MatRadioModule,

    ]
})
export class HospitalModule { }
