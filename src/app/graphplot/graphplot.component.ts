import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-graphplot',
  templateUrl: './graphplot.component.html',
  styleUrls: ['./graphplot.component.css']
})
export class GraphplotComponent implements OnInit {
   
  public chartBVP = [];
  public chartHR = []; 
  public chartTEMP = [];
  public chartEDA = [];  
  public chartAll = [];   
  public data: any[] = [];
  subscription: Subscription;
  public BVP: any[] = [];
  public HR: any[] = [];
  public TEMP: any[] = [];
  public EDA: any[] = [];
  public Timestamp: any[] = [];

  constructor(private service: AppService) {
    
   }

  ngOnInit() {
    this.subscription = this.service.displayData().subscribe(res => {
      if (res) {
        this.data = this.data.concat(res);
       
      } else {
        this.data = [];
      }
    });
    this.storeData();
   
  }

  storeData(){

    this.BVP = this.data.map( el => el.BVP)
    this.HR = this.data.map( el => el.HR)
    this.TEMP = this.data.map( el => el.TEMP)
    this.EDA = this.data.map( el => el.EDA)
    this.Timestamp = this.data.map( el => el.Timestamp)

    let chartBVP = [];
    let chartHR = [];
    let chartTEMP = [];
    let chartEDA = [];
   
    for(let i = 0 ; i < this.data.length ; i++){
      const obj:any = {};
      obj.x = this.Timestamp[i],
      obj.y = this.HR[i]
      chartHR.push(obj);
    }

    for(let i = 0 ; i < this.data.length ; i++){
      const obj:any = {};
      obj.x = this.Timestamp[i],
      obj.y = this.TEMP[i]
      chartTEMP.push(obj);
    }

    for(let i = 0 ; i < this.data.length ; i++){
      const obj:any = {};
      obj.x = this.Timestamp[i],
      obj.y = this.BVP[i]
      chartBVP.push(obj);
    }

    for(let i = 0 ; i < this.data.length ; i++){
      const obj:any = {};
      obj.x = this.Timestamp[i],
      obj.y = this.EDA[i]
      chartEDA.push(obj);
    }

    this.chartBVP = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.Timestamp, 
        datasets: [
          {
            data: chartBVP, 
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chartHR = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: this.Timestamp, 
        datasets: [
          {
            data: chartHR, 
            borderColor: '#DE3163',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chartTEMP = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: this.Timestamp, 
        datasets: [
          {
            data: chartTEMP, 
            borderColor: '#000000',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chartEDA = new Chart('canvas3', {
      type: 'line',
      data: {
        labels: this.Timestamp, 
        datasets: [
          {
            data: chartEDA, 
            borderColor: '#008000',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chartAll = new Chart('canvas4', {
      type: 'line',
      data: {
        labels: this.Timestamp, 
        datasets: [
          {
            data: chartBVP, 
            borderColor: '#00AEFF',
            fill: false
          },
          {
            data: chartHR, 
            borderColor:"#DE3163",
            fill: false
          },
          {
            data: chartTEMP, 
            borderColor: '#000000',
            fill: false
          },
          {
            data: chartEDA, 
            borderColor: '#008000',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              maxRotation: 0,
              minRotation: 0,
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
