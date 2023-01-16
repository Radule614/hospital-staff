import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { HospitalMapComponent } from './modules/hospital/hospital-map/hospital-map.component';
import { HospitalFloorComponent } from './modules/hospital/hospital-floor/hospital-floor.component';
import { RoomsMapComponent } from "./modules/hospital/rooms-map/rooms-map.component";
import { DoctorAppointmentDisplayComponent } from "./modules/pages/doctor-appointment-display/doctor-appointment-display.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { VacationRequestsDisplayComponent } from "./modules/hospital/vacation-requests-display/vacation-requests-display.component";
import { CreateVacationComponent } from "./modules/hospital/create-vacation/create-vacation.component";
import { VacationRequestsComponent } from "./modules/vacations/vacation-requests/vacation-requests.component";
import { ScheduleRenovationComponent } from './modules/hospital/schedule-renovation/schedule-renovation.component';
import { CreateConsiliumComponent } from "./modules/hospital/create-consilium/create-consilium.component";
import { AuthGuard } from "./modules/pages/login/log-auth.guard";
import { DoctorsWorkloadComponent } from "./modules/statistics/doctors-workload/doctors-workload.component";
import { RenovationStatisticComponent } from "./modules/statistics/renovation-statistic/renovation-statistic.component";
import { CurrentBloodSupplyComponent } from './modules/hospital/current-blood-supply/current-blood-supply.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctor-appointment-display', component : DoctorAppointmentDisplayComponent},
  { path: 'create-consilium', component : CreateConsiliumComponent},
  { path: 'blood/supply', component: CurrentBloodSupplyComponent },
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager/manager.module').then(m => m.ManagerModule)
  },
  { path: 'create-vacation-display', component : CreateVacationComponent  },
  { path: 'vacation-requests-display' , component : VacationRequestsDisplayComponent },
  {
    path: 'hospital',
    loadChildren: () => import('./modules/hospital/hospital.module').then(m => m.HospitalModule),
    //canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'vacationRequests', component: VacationRequestsComponent },
  { path: 'blood/supply', component: CurrentBloodSupplyComponent  },
  
  
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
