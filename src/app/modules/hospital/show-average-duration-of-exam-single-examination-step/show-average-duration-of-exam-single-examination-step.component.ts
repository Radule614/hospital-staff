import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-show-average-duration-of-exam-single-examination-step',
  templateUrl: './show-average-duration-of-exam-single-examination-step.component.html',
  styleUrls: ['./show-average-duration-of-exam-single-examination-step.component.css']
})
export class ShowAverageDurationOfExamSingleExaminationStepComponent implements OnInit  {
  public duration: number = 0;

  constructor(private examinationService: ExaminationService, private router: Router) { 
    Chart.register(...registerables);
  }
  
  ngOnInit(): void {
    this.examinationService.getAverageDurationOfSingleStep().subscribe(res => {
      this.duration = res.durationInSeconds;
      const barCanvasEle: any = document.getElementById('bar_chart')
      const barChart = new Chart(barCanvasEle.getContext('2d'), {
        type: 'bar',
          data: {
            labels: ['Single Step Average Duration'],
            datasets: [{
              label: 'Average Duration In Seconds',
              data: [this.duration],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)'
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
