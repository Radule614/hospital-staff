import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalMapComponent } from './modules/hospital/hospital-map/hospital-map.component';
import { HospitalFloorComponent } from './modules/hospital/hospital-floor/hospital-floor.component';
import { RoomsMapComponent } from './modules/hospital/rooms-map/rooms-map.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EquipmentSearchComponent } from "./modules/hospital/equipment-search/equipment-search.component";
import { RoomsSearchComponent } from "./modules/hospital/rooms-search/rooms-search.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { VacationRequestsComponent } from './modules/vacations/vacation-requests/vacation-requests.component';
import { AuthInterceptor } from './modules/pages/login/log-auth-interceptor.service';
import { DoctorsWorkloadComponent } from './modules/statistics/doctors-workload/doctors-workload.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RenovationStatisticComponent } from './modules/statistics/renovation-statistic/renovation-statistic.component';
import { CurrentBloodSupplyComponent } from './modules/hospital/current-blood-supply/current-blood-supply.component';





@NgModule({
    declarations: [
        AppComponent,
        HospitalMapComponent,
        HospitalFloorComponent,
        RoomsMapComponent,
        EquipmentSearchComponent,
        RoomsSearchComponent,
        VacationRequestsComponent,
        DoctorsWorkloadComponent,
        RenovationStatisticComponent
        
    ],
    providers: [    
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },],
    bootstrap: [AppComponent],
    imports: [
      
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        PagesModule,
        HospitalModule,
        Ng2SearchPipeModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatFormFieldModule
        
    ]
})
export class AppModule { }
