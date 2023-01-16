import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, tap } from "rxjs";
import { NavRoute } from "../../components/nav/manager-nav.component";

@Component({
  templateUrl: './eq-tender.component.html',
  styleUrls: ['./eq-tender.component.scss']
})
export class EqTenderComponent implements OnInit  {

  m_Routes: NavRoute[] = [
    {
      path: 'tenders',
      title: 'All Tenders'
    },
    {
      path: 'create',
      title: 'Create New'
    },
    {
      path: 'report',
      title: 'Report'
    }
  ];

  m_ActiveLink: string = this.m_Routes[0].path;
  m_ActiveLink$ = this.m_Router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    tap((route: any) => {
      const arr = route.url.split('/');
      this.m_ActiveLink = arr[arr.length - 1];
      if (this.m_ActiveLink === 'eq-tender' || this.m_ActiveLink === 'all')
        this.m_ActiveLink = 'tenders';
      
    })
  );

  constructor(private m_Route: ActivatedRoute, 
              private m_Router: Router) { }

  ngOnInit() {
    this.m_ActiveLink = this.m_Route.snapshot.firstChild?.url[0].path!;
    if (this.m_ActiveLink === 'eq-tender' || this.m_ActiveLink === 'all') 
      this.m_ActiveLink = 'tenders';
  }

  changeTab(path: string): void {
    this.m_ActiveLink = path
  }
}