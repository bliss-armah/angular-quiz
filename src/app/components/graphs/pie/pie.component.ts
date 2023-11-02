import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent {
  chartOptions = {
	  animationEnabled: true,
    title: {
      text: 'Performance Records',
      verticalAlign: 'top',
      horizontalAlign: 'left',
      margin: 45,
    },
	  data: [{
		type: "doughnut",
		// yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 38, name: "Html" },
		  { y: 30, name: "Javascript" },
		  { y: 8, name: "Others" },
		  { y: 22, name: "CSS" },
		]
	  }]
	}
}
