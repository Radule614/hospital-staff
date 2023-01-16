import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-hospital-floor',
  templateUrl: './hospital-floor.component.html',
  styleUrls: ['./hospital-floor.component.scss']
})
export class HospitalFloorComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
   }

  private id: any;
  private flatsList: number[] = [0, 1, 2];
  private svg: any;
  private width = 1000;
  private height = 800;
  private flatHeight = 0;

  ngOnInit(): void {
    this.flatHeight = this.height / this.flatsList.length
    this.createSvg();
    this.createRect(this.flatHeight, this.id);
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .attr("class", "svg-container");
  }

  private createRect(flatHeight: number, buildingId: string): void{

    var rect = this.svg.selectAll("rect")
    .data(this.flatsList)
    .enter()
    .append("a")
    .attr("xlink:href", function(this: any, d: any){
      return "manager/hospitalMap/hospital/" + buildingId + "/floor/" + d;
    })
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d: any){
      return flatHeight * d;
    })
    .attr("width", this.width)
    .attr("height", this.flatHeight)
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black")
    .on("mouseover", function(this: any, d: any, i: any){
      d3.select(this)
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer")
    })
    .on("mouseout", function(this: any){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default")
    });


    this.svg.selectAll("text")
    .data(this.flatsList)
    .enter()
    .append("text")
    .attr("x", function(this: any){
      return 1000 / 2;
    })
    .attr("y", function(d: any){
      return flatHeight * d + flatHeight / 2;
    })
    .attr("font-family", "Montserrat")
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .text(function(d: any)
    {
      if(d == 0){
        return "Prizemlje";
      }
      return "Sprat " + d;
    })
    .style("text-anchor", "middle");
  }

  }


