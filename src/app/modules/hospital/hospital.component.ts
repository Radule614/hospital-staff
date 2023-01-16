import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../pages/login/log-auth.service";

@Component({
  template: `<mat-toolbar color="primary">
  <mat-toolbar-row>
    <button mat-icon-button>
      <mat-icon (click)="sidebarmenu.toggle()">menu</mat-icon>
    </button>
    <h2>Welcome</h2>
  </mat-toolbar-row>
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav #sidebarmenu>
    <mat-nav-list>
      <a mat-list-item [routerLink]="'/hospital/examinationreport/create'"> Examination </a>
      <a mat-list-item [routerLink]="'/hospital/appointments/add'"> Schedule appointment </a>
      <a mat-list-item [routerLink]="'/hospital/appointments'"> Appointments </a>
      <a mat-list-item [routerLink]="'/hospital/createconsilium'"> Schedule consilium </a>
      <a mat-list-item [routerLink]="'/hospital/consiliums'"> Consiliums </a>
      <a mat-list-item [routerLink]="'/hospital/bloodUsageEvidency/add'"> Get blood </a>
      <a mat-list-item [routerLink]="'/hospital/examinationreport/search'"> Examination reports </a>
      <a mat-list-item [routerLink]="'/hospital/blood/supply'"> Current blood supply </a>
      <a mat-list-item [routerLink]="'/hospital/blood/request'"> Send blood request </a>
      <a mat-list-item [routerLink]="'/hospital/inpatient-treatments/add'"> Create inpatient treatment </a>
      <a mat-list-item [routerLink]="'/hospital/inpatient-treatments'"> Inpatient treatments </a>
      <a mat-list-item [routerLink]="'/hospital/createvacation'"> Send vacation request </a>
      <a mat-list-item (click)="logOut()" href="#" mat-list-item>
        Logout
      </a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <div style="height: 92vh">
      <router-outlet></router-outlet>
    </div>
  </mat-sidenav-content>
</mat-sidenav-container>
`
})
export class HospitalComponent {

  constructor(private authService: AuthService, private router: Router) { }

  public logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 