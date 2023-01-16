import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AverageNumberOfExaminationSteps } from '../model/average-number-of-examination-steps.model';
import { ExaminationService } from '../services/examination.service';


@Component({
  selector: 'app-show-average-number-of-examination-steps',
  templateUrl: './show-average-number-of-examination-steps.component.html',
  styleUrls: ['./show-average-number-of-examination-steps.component.css']
})
export class ShowAverageNumberOfExaminationStepsComponent implements OnInit {
  public steps: number = 0; 

  constructor(private examinationService: ExaminationService, private router: Router) { 
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.examinationService.getAverageNumberOfExaminationSteps().subscribe(res => {
      this.steps = res.avgNumOfSteps;
      const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: [''],
          datasets: [{
            label: 'Average Number Of Steps',
            data: [this.steps],
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
  


