import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { DoctorAppointmentDisplayComponent } from './doctor-appointment-display/doctor-appointment-display.component';
import { MaterialModule } from "src/app/material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  { path: 'appointments', component: DoctorAppointmentDisplayComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    DoctorAppointmentDisplayComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
  ],
  exports: [
  ],
})
export class PagesModule { }
