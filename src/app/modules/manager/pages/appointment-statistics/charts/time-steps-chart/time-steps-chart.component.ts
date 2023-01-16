import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-time-steps-chart',
  templateUrl: './time-steps-chart.component.html',
  styleUrls: ['./time-steps-chart.component.css']
})
export class TimeStepsChartComponent implements OnInit{
  ngOnInit(): void {
    var myChart4 = new Chart("myChart4", {
      type: 'bar',
      data: {
          labels: ['First Step', 'Second Step', 'Thrid Step', 'Fourth Step'],
          datasets: [{
              label: 'avg time of visits in minutes',
              data: [13, 1, 3, 8],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
