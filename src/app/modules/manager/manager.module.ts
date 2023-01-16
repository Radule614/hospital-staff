import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { ManagerRoutingModule } from "./manager-routing.module";
import { ManagerComponent } from "./manager.component";
import { NgLetModule } from 'ng-let';
import { BBRegisterComponent } from "./pages/bb-register/bb-register.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { BloodBankService } from "./services/blood-bank.service";
import { ManagerService } from "./services/manager.service";
import { ReportConfigurationComponent } from "./pages/report-configuration/report-configuration.component";
import { ManagerNavComponent } from "./components/nav/manager-nav.component";
import { UrgentOrderComponent } from "./modules/urgent-order/urgent-order.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { AppointmentStatisticsComponent } from './pages/appointment-statistics/appointment-statistics.component';
import { NumStepsChartComponent } from './pages/appointment-statistics/charts/num-steps-chart/num-steps-chart.component';
import { TimeStepsChartComponent } from './pages/appointment-statistics/charts/time-steps-chart/time-steps-chart.component';
import { AppointmentScheduleComponent } from './pages/appointment-statistics/charts/appointment-schedule/appointment-schedule.component';
import { SpecializationSelectedComponent } from './pages/appointment-statistics/charts/specialization-selected/specialization-selected.component';
import { GenerateReportsComponent } from "./modules/generate-reports/generate-reports.component";

@NgModule({
  providers:[BloodBankService, ManagerService],
  declarations: [
    ManagerComponent,
    FeedbackComponent,
    BBRegisterComponent,
    ManagerNavComponent,
    ReportConfigurationComponent,
    UrgentOrderComponent,
    NotificationsComponent,
    AppointmentStatisticsComponent,
    NumStepsChartComponent,
    TimeStepsChartComponent,
    AppointmentScheduleComponent,
    SpecializationSelectedComponent,
    GenerateReportsComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgLetModule
  ]
})
export class ManagerModule { }
