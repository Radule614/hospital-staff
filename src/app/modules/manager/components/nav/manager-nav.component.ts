import { Component } from "@angular/core";

export interface NavRoute {
  path: string;
  title: string;
}

@Component({
  selector: 'app-manager-nav',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.scss']
})
export class ManagerNavComponent {
  m_Routes: NavRoute[] = [
    {
      path: 'feedback',
      title: 'Feedback'
    },
    {
      path: 'hospitalMap',
      title: 'Hospital Map'
    },
    {
      path: 'bb-register',
      title: 'Blood bank register'
    },
    {
      path: 'bb-news',
      title: 'Blood bank news'
    },
    {
      path: 'blood-req',
      title: 'Blood Requests'
    },
    {
      path: 'report-configuration',
      title: 'Report Configuration'
    },
    {
      path: 'eq-tender',
      title: 'Equipment Tenders'
    },
    {
      path: 'urgent-order',
      title: 'Urgent Blood Order'
    },
    {
      path: 'monthly-blood-supply',
      title: 'Monthly blood supply'
    },
    {
      path: 'notifications',
      title: 'Notifications'
    },
    {
      path: 'appointment-statistics',
      title: 'Appointment Statistics'
    },
    {
      path: 'renovationStatistic',
      title: 'Renovation Statistics'
    },
    {
      path: 'generate-reports',
      title: 'Generate Reports'
    }
  ];

  constructor() { }
}
