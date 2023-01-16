import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Analytics{
  analytic: string;
  number: number;
}
@Component({
  selector: 'app-appointment-statistics',
  templateUrl: './appointment-statistics.component.html',
  styleUrls: ['./appointment-statistics.component.css']
})
export class AppointmentStatisticsComponent implements OnInit {

  public analytics : Analytics[] = [{ analytic : 'Avg Num Of Steps To Schedule', number : 12},
  { analytic : 'Avg Time To Schedule In Minutes', number : 10}];
  displayedColumns: string[] = ['analytic', 'number'];
  public dataSource = new MatTableDataSource(this.analytics);
  
  constructor() { }

  ngOnInit(): void {
  }

}
