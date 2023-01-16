import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as d3 from 'd3';
import { Doctor } from '../../manager/model/doctor.model';
import { DoctorService } from '../../hospital/services/doctor.service';
@Component({
  selector: 'app-doctors-workload',
  templateUrl: './doctors-workload.component.html',
  styleUrls: ['./doctors-workload.component.css']
})
export class DoctorsWorkloadComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  selectedDoctor?: Doctor;
  doctors: Doctor[] = [];

  numberToMonth = new Map<number, string>([
    [1, "Jan"],
    [2, "Feb"],
    [3, "Mar"],
    [4, "Apr"],
    [5, "Maj"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Avg"],
    [9, "Sep"],
    [10, "Okt"],
    [11, "Nov"],
    [12, "Dec"],
]);

  data = [
    {"Date": "Jan", "NumberOfAppointments": 200},
    {"Date": "Feb", "NumberOfAppointments": 171},
    {"Date": "Mar", "NumberOfAppointments": 183},
    {"Date": "Apr", "NumberOfAppointments": 209},
    {"Date": "Maj", "NumberOfAppointments": 154},
    {"Date": "Jun", "NumberOfAppointments": 211},
    {"Date": "Jul", "NumberOfAppointments": 205},
    {"Date": "Avg", "NumberOfAppointments": 176},
    {"Date": "Sep", "NumberOfAppointments": 186},
    {"Date": "Okt", "NumberOfAppointments": 203},
    {"Date": "Nov", "NumberOfAppointments": 194},
    {"Date": "Dec", "NumberOfAppointments": 181},
  ];

  private svg: any;
  private margin = 100;
  private width = 1300 - (this.margin * 2);
  private height = 700 - (this.margin * 2);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);


    this.doctorService.getDoctors().subscribe(res => {
      this.doctors = res;
    });
  }


  createSvg(): void {
    this.svg = d3.select(".col-12")
    .append("svg")
    .attr('class','graph')
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }


  drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Date))
    .padding(0.2);
  
    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 250])
    .range([this.height, 0]);
  
    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: any) => x(d.Date))
    .attr("y", (d: any) => y(d.NumberOfAppointments))
    .attr("width", x.bandwidth())
    .attr("height", (d: any) => this.height - y(d.NumberOfAppointments))
    .attr("fill", "#d04a35");
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);

    const startArr = dateRangeStart.value.split('/');
    const endArr = dateRangeEnd.value.split('/');

    this.data = [];
    if(startArr[0] == endArr[0]){
      for(let i = parseInt(startArr[1]); i <= parseInt(endArr[1]); i+=1){
        this.data.push({"Date": i.toString(), "NumberOfAppointments": Math.floor((Math.random() * 70) + 170)});
      }
    }
    else{
      for(let i = parseInt(startArr[0]); i <= parseInt(endArr[0]); i+=1){
        this.data.push({"Date": this.numberToMonth.get(i)!, "NumberOfAppointments": Math.floor((Math.random() * 70) + 170)});
      }
    }

    d3.selectAll(".graph").remove();
    this.createSvg();
    this.drawBars(this.data);

  }

}
