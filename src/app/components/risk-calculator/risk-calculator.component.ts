import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.component.html',
  styleUrls: ['./risk-calculator.component.scss'],
})
export class RiskCalculatorComponent  implements OnInit {

  chart: any;
  domain: string = '';
  risk: string = 'external risk';

  formValid: boolean = false;
  showGraph: boolean = false;

  public doughnutChartLabels:string[] = ['Safety', 'Risk', 'Danger'];
  public doughnutChartData = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  createChart(){

    console.log('createChart()');


    this.showGraph = true;

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Data leaks', 'Malicous attacks', 'System failure', this.risk],
        datasets: [
          {
            data: [55,45, 100, 22],
            backgroundColor: ['rgb(189,19,26)','rgb(23,152,192)','rgb(160,28,138)','rgb(132,91,78)'],
          },
        ]
      },
      options: {
      }
    });
  }

}
