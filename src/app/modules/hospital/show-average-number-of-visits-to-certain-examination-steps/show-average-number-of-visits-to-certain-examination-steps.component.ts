import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-show-average-number-of-visits-to-certain-examination-steps',
  templateUrl: './show-average-number-of-visits-to-certain-examination-steps.component.html',
  styleUrls: ['./show-average-number-of-visits-to-certain-examination-steps.component.css']
})
export class ShowAverageNumberOfVisitsToCertainExaminationStepsComponent implements OnInit {
  public startExamination: number = 0;
  public selectSymptoms: number = 0;
  public enterReport: number = 0;
  public createRecipes: number = 0;
  public finishExamination: number = 0;

  constructor(private examinationService: ExaminationService, private router: Router) { 
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.examinationService.getAverageNumberOfVisitsToCertainStep().subscribe(res => {
      this.startExamination = res.startExamination;
      this.selectSymptoms = res.selectSymptoms;
      this.enterReport = res.enterReport;
      this.createRecipes = res.createRecipes;
      this.finishExamination = res.finishExamination;

      const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: ['Start Examination', 'Select Symptoms', 'Enter Report', 'Create Recipes', 'Finish Examination'],
          datasets: [{
            label: 'Average Number Of Visits',
            data: [this.startExamination, this.selectSymptoms, this.enterReport, this.createRecipes, this.finishExamination],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)'
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
