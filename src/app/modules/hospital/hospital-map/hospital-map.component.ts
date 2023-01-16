import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BuildingMap } from '../model/building-map.model';
import { Building } from '../model/building.model';

@Component({
  selector: 'app-hospital-map',
  templateUrl: './hospital-map.component.html',
  styleUrls: ['./hospital-map.component.scss']
})
export class HospitalMapComponent implements OnInit {

  constructor() { }

  private svg: any;
  svgWidth = 1000;
  svgHeight = 800;
  private buildingList :BuildingMap[] = [new BuildingMap(new Building("A", "Bolnica", 3), 10, 10, 400, 780),
                                        new BuildingMap(new Building("B", "Laboratorija", 4), 500, 10, 490, 450)];

  ngOnInit(): void {
    this.createSvg();
    this.createRect(this.buildingList);
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
    .attr("width", this.svgWidth)
    .attr("height", this.svgHeight)
    .attr("class", "svg-container");
  }

  private createRect(buildingMapList: BuildingMap[]): void{
    var tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('background', '#f4f4f4')
    .style('padding', '10px 10px')
    .style('border', '1px #333 solid')
    .style('border-radius', '5px')
    .style('opacity', '0')
    .style('z-index', 10)
    .style('white-space','pre-wrap')
    .text('a simple tooltip')

    var rect2 = this.svg.selectAll("rect")
    .data(buildingMapList)
    .enter()
    .append("a")
    .attr("xlink:href", function(d: any){
      return "manager/hospitalMap/hospital/" + d.building.id;
    })
    .append("rect")
    .attr("x", function(d: any, i: any){
      return d.x;
    })
    .attr("y", function(d: any, i: any){
      return d.y;
    })
    .attr("width", function(d: any, i: any){
      return d.width;
    })
    .attr("height", function(d: any, i: any){
      return d.height;
    })
    .attr("fill", "#DEDFE1")
    .attr("stroke", "black")
    .on("mouseover", function(this: any, d: any, i: any){
      d3.select(this)
        .attr("fill", "#c2c3c4")
        .style("cursor", "pointer")
      tooltip.transition()
        .style('opacity', 1)
        .style('left', (d.pageX - 50)+'px')
        .style('top', (d.pageY)+'px')
        .text("Building ID: " + i.building.id + "\n" + "Name: " + i.building.name + "\n")
    })
    .on("mouseout", function(this: any){
      d3.select(this)
        .transition()
        .duration(500)
        .attr("fill", "#DEDFE1")
        .style("cursor", "default")

      tooltip.transition()
        .style('opacity', 0)
    });


    this.svg.selectAll("text")
    .data(buildingMapList)
    .enter()
    .append("text")
    .attr("x", function(d: any, i: any){
      return d.x + d.width / 2
    })
    .attr("y", function(d: any, i: any){
      return d.y + d.height / 2
    })
    .attr("font-family", "Montserrat")
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .text(function(d: any, i: any)
    {
      return d.building.name;
    })
    .style("text-anchor", "middle");

  }
  
}


