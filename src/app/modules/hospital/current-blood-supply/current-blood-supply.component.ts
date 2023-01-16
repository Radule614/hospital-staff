import { Component, OnInit } from '@angular/core';
import { BloodService } from '../services/blood.service';
import { EqTenderService } from '../services/eq-tender.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Blood } from '../model/blood.model';
import { EqTender } from '../model/eq-tender.model';
import { TenderItem } from '../model/eq-tender.model';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-current-blood-supply',
  templateUrl: './current-blood-supply.component.html',
  styleUrls: ['./current-blood-supply.component.css']
})
export class CurrentBloodSupplyComponent implements OnInit {

  constructor(private eqTenderService: EqTenderService,private bloodService: BloodService, private router: Router) { }

  public bloods: Blood[] = [];
  

  //public dataSource = new MatTableDataSource<EqTender>();
  public dataSource = new MatTableDataSource<Blood>();
  
  public tenders: EqTender[] = [];
  //public dataSource = new MatTableDataSource<Blood>();
  

  public displayedColumns = [/*'title','amount'*/'bloodType','quantityInMiliters','expiresOn','title',];

  ngOnInit(): void {
    this.eqTenderService.getTenders().subscribe(res => {
      this.tenders =res
      //this.dataSource.data = this.tenders;
      for(let t  of this.tenders )
      { 
        if(this.isInPast(t.expiresOn)&& t.state==0){
          for(let m of t.requirements)
          {
            let b = new Blood;
            b.bloodId = m.id
            b.bloodType = this.BloodType(m.type)
            b.quantityInLiters = m.amount
            b.expiresOn = t.expiresOn
            b.title = t.title
            this.bloods.push(b)
            
            
          }
        }
    }
      this.dataSource.data = this.bloods
      /*for(let t in this.tenders){
        alert(t.)
      }*/

//      alert(res.length)
    });
  /*  this.bloodService.getBloods().subscribe(res => {
      this.bloods = res;
      this.dataSource.data = this.bloods;
    });*/
  }

  isInPast(date: Date | null): boolean {
    if(!date) return false;
    var now = new Date();
    var n = new Date(date)
    now.setHours(0,0,0,0);
    if(n <= now) return true;
    return false;
  }


  BloodType(bloodId: number): string {
    if(bloodId == 0){
      return 'A+'
    }else if(bloodId == 1){
      return 'A-'
    }else if(bloodId == 2){
      return 'B+'
    }else if(bloodId == 3){
      return 'B-'
    }else if(bloodId == 4){
      return 'AB+'
    }else if(bloodId == 5){
      return 'AB-'
    }else if(bloodId == 6){
      return 'O+'
    }else if(bloodId == 7){
      return 'O-'
    }

    return 'LAZA'
  }


}
