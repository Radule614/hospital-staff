import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-show-average-duration-of-exam-each-examination-step',
  templateUrl: './show-average-duration-of-exam-each-examination-step.component.html',
  styleUrls: ['./show-average-duration-of-exam-each-examination-step.component.css']
})
export class ShowAverageDurationOfExamEachExaminationStepComponent implements OnInit {
  public selectSymptomsInSeconds: number = 0;
  public enterReportInSeconds: number = 0;
  public createRecipesInSeconds: number = 0;
  public finishExaminationInSeconds: number = 0;

  constructor(private examinationService: ExaminationService, private router: Router) { 
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.examinationService.getAverageDurationOfEachStep().subscribe(res => {
      this.selectSymptomsInSeconds = res.selectSymptomsInSeconds;
      this.enterReportInSeconds = res.enterReportInSeconds;
      this.createRecipesInSeconds = res.createRecipesInSeconds;
      this.finishExaminationInSeconds = res.finishExaminationInSeconds;
      const barCanvasEle: any = document.getElementById('bar_chart')
      const barChart = new Chart(barCanvasEle.getContext('2d'), {
        type: 'bar',
          data: {
            labels: ['Select Symptoms', 'Enter Report', 'Create Recipes', 'Finish Exam'],
            datasets: [{
              label: 'Average Duration In Seconds',
              data: [this.selectSymptomsInSeconds, this.enterReportInSeconds, this.createRecipesInSeconds, this.finishExaminationInSeconds],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
          }
        });
    })
  }

}
