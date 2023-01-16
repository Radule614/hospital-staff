import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ExaminationService } from '../services/examination.service';

@Component({
  selector: 'app-show-average-duration-of-exam',
  templateUrl: './show-average-duration-of-exam.component.html',
  styleUrls: ['./show-average-duration-of-exam.component.css']
})
export class ShowAverageDurationOfExamComponent implements OnInit {
  public averageDuration: number = 0; 

  constructor(private examinationService: ExaminationService, private router: Router) { 
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.examinationService.getAverageDurationOfExam().subscribe(res => {
      this.averageDuration = res.durationInSeconds;
      const barCanvasEle: any = document.getElementById('bar_chart')
      const barChart = new Chart(barCanvasEle.getContext('2d'), {
        type: 'bar',
          data: {
            labels: ['Exam Duration'],
            datasets: [{
              label: 'Average Duration In Seconds',
              data: [this.averageDuration],
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
