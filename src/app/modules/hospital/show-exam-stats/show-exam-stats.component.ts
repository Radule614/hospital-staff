import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-show-exam-stats',
  templateUrl: './show-exam-stats.component.html',
  styleUrls: ['./show-exam-stats.component.css']
})
export class ShowExamStatsComponent implements OnInit{
  public averageNumOfSteps: number = 0;
  public averageDurationOfExam: number = 0;
  public averageDurationOfSingleStep: number = 0;

  constructor(private examinationService: ExaminationService, private router: Router) { }
    
  ngOnInit(): void {
    this.examinationService.getAverageNumberOfExaminationSteps().subscribe(res => {
      this.averageNumOfSteps = res.avgNumOfSteps;
    })

    this.examinationService.getAverageDurationOfExam().subscribe(res => {
      this.averageDurationOfExam = res.durationInSeconds;
    })

    this.examinationService.getAverageDurationOfSingleStep().subscribe(res => {
      this.averageDurationOfSingleStep = res.durationInSeconds;
    })
  }

}
