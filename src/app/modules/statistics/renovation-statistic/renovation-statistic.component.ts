import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event-service.service';
import { Chart, ChartData } from 'chart.js/auto';


@Component({
  selector: 'app-renovation-statistic',
  templateUrl: './renovation-statistic.component.html',
  styleUrls: ['./renovation-statistic.component.css']
})
export class RenovationStatisticComponent implements OnInit {

  constructor(private eventService: EventService) { }

  chart: any;

  averageNumberOfViewsForEachStepDatasets: ChartData <'bar', {key: string, value: number} []> = {
    datasets: [],
  };

  averagePageTimeInSecondsDatasets: ChartData <'bar', {key: string, value: number} []> = {
    datasets: [],
  };

  averageNumberOfViewsForEachStepCanceledDatasets: ChartData <'bar', {key: string, value: number} []> = {
    datasets: [],
  };

  averagePageTimeInSecondsCanceledDatasets: ChartData <'bar', {key: string, value: number} []> = {
    datasets: [],
  };

  numberOfSuccessfulSchedules: number = 0;
  numberOfCanceledSchedules: number = 0;

  averageNumberOfStepsForSuccessfulSchedule: any = 0;
  averageNumberOfStepsForCanceledSchedule: any = 0;
  averageTimeForSuccessfulSchedule: any = 0;
  averageTimeForCanceledSchedule: any = 0;


  ngOnInit(): void {
    this.eventService.getAverageNumberOfViewsForEachStep().subscribe(res => {
      this.averageNumberOfViewsForEachStepDatasets = {
        datasets: [{
          data: res,
          label: "Broj otvaranja stranica pri uspesnom zakazivanju",
          backgroundColor : "#3F51B5"
        }],
      };
      this.createAverageNumberOfViewsForEachStepChart();
    });

    this.eventService.getAveragePageTimeInSeconds().subscribe(res => {
      this.averagePageTimeInSecondsDatasets = {
        datasets: [{
          data: res,
          label: "Prosecno vreme provedeno na stranici pri uspesnom zakazivanju u sekundama",
          backgroundColor : "#3F51B5"
        }],
      };
      this.createAveragePageTimeInSecondsChart();
    });

    this.eventService.getAverageNumberOfViewsForEachStepCanceled().subscribe(res => {
      this.averageNumberOfViewsForEachStepCanceledDatasets = {
        datasets: [{
          data: res,
          label: "Broj otvaranja stranica pri neuspesnom zakazivanju",
          backgroundColor : "#ba000d"
        }],
      };
      this.createAverageNumberOfViewsForEachStepCanceledChart();
    });

    this.eventService.getAveragePageTimeInSecondsCanceled().subscribe(res => {
      this.averagePageTimeInSecondsCanceledDatasets = {
        datasets: [{
          data: res,
          label: "Prosecno vreme provedeno na stranici pri neuspesnom zakazivanju u sekundama",
          backgroundColor : "#ba000d"
        }],
      };
      this.createAveragePageTimeInSecondsCanceledChart();
    });

    this.eventService.getNumberOfSuccessfulScheduling().subscribe(res => {
      this.numberOfSuccessfulSchedules = res;
      this.eventService.getNumberOfUnsuccessfulScheduling().subscribe(res => {
        this.numberOfCanceledSchedules = res;
        this.createNumberOfSchedulesChart();
      });
    });

    this.eventService.getAverageNumberOfStepsForSuccessfulSchedule().subscribe(res => {
      this.averageNumberOfStepsForSuccessfulSchedule = res;
      this.averageNumberOfStepsForSuccessfulSchedule = Math.round(this.averageNumberOfStepsForSuccessfulSchedule * 10) / 10
    });
    this.eventService.getAverageNumberOfStepsForCanceledSchedule().subscribe(res => {
      this.averageNumberOfStepsForCanceledSchedule = res;
      this.averageNumberOfStepsForCanceledSchedule = Math.round(this.averageNumberOfStepsForCanceledSchedule * 10) / 10
    });
    this.eventService.getAverageTimeForSuccessfulSchedule().subscribe(res => {
      this.averageTimeForSuccessfulSchedule = res;
      this.averageTimeForSuccessfulSchedule = Math.round(this.averageTimeForSuccessfulSchedule * 10) / 10
    });
    this.eventService.getAverageTimeForCanceledSchedule().subscribe(res => {
      this.averageTimeForCanceledSchedule = res;
      this.averageTimeForCanceledSchedule = Math.round(this.averageTimeForCanceledSchedule * 10) / 10
    });
    
    
  }





  createAverageNumberOfViewsForEachStepChart(){
    this.chart = new Chart("AverageNumberOfViewsForEachStep", {
      type: 'bar',
      data: this.averageNumberOfViewsForEachStepDatasets,
      options: {
      }
    });
  }

  createAveragePageTimeInSecondsChart(){
    this.chart = new Chart("AveragePageTimeInSeconds", {
      type: 'bar',
      data: this.averagePageTimeInSecondsDatasets,
      options: {
      }
    });
  }

  createAverageNumberOfViewsForEachStepCanceledChart(){
    this.chart = new Chart("AverageNumberOfViewsForEachStepCanceled", {
      type: 'bar',
      data: this.averageNumberOfViewsForEachStepCanceledDatasets,
      options: {
      }
    });
  }

  createAveragePageTimeInSecondsCanceledChart(){
    this.chart = new Chart("AveragePageTimeInSecondsCanceled", {
      type: 'bar',
      data: this.averagePageTimeInSecondsCanceledDatasets,
      options: {
      }
    });
  }

  createNumberOfSchedulesChart(){
    this.chart = new Chart("NumberOfSchedules", {
      type: 'pie',
      data: {
        datasets: [{
          data: [this.numberOfSuccessfulSchedules, this.numberOfCanceledSchedules],
          backgroundColor: ["#3F51B5", "#ba000d"]
        }],
        labels:["Uspesno zakazivanje", "Neuspesno zakazivanje"],
      },
      options: {
        aspectRatio:2
      }
    });
  }
}
