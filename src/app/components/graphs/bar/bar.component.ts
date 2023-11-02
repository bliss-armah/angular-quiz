import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule,CanvasJSAngularChartsModule],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class ColumnComponent {
  chart: any;

  chartOptions = {
    title: {
      text: 'Popularity Statistics',
      verticalAlign: 'top',
      horizontalAlign: 'left',
      margin: 45,
    },
    dataPointMaxWidth: 20,
    animationEnabled: true,
    axisX: {
      tickLength: 10,
      tickColor: '',
      lineColor: 'transparent',
    
    },
    axisY: {
      tickLength: 10,
      tickColor: '',
      lineColor: 'transparent',
      gridColor: "#E8E8E8",
      suffix: ' K',
      minimum: 0,
      maximum: 900,
    },
    data: [
      {
        type: 'column',
        radius:  "90%", 
        dataPoints: [
          { label: 'HTML', y: 280 },
          { label: 'CSS', y: 300 },
          { label: 'JS', y: 400 },
          { label: 'Figma', y: 420 },
          { label: 'typescript', y: 450 },
          { label: 'others', y: 300 },
        ],
      },
    ],
  };
}
