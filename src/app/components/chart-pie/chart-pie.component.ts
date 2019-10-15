import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { SourceItem } from 'src/app/interfaces/source.interface';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public data: SourceItem[];

  @ViewChild('chart', { static: true })
  public chartContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    const labels = [];
    const conversions = [];

    this.data.forEach((item) => {
      labels.push(item.name ? item.name.substr(0, 16) : '(not set)');
      conversions.push(item.conversion);
    });

    this.chart(labels, conversions);
  }

  private chart(labels: any[], conversions: number[]) {
    const pie = new Chart(this.chartContainer.nativeElement, {
      type: 'pie',
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        }
      },
      data: {
        labels,
        datasets: [{
          data: conversions,
          backgroundColor: [
            '#ff0030', '#00c1c7', '#ffb928', '#7aac41', '#007bff', '#6610f2', '#6f42c1', '#e83e8c',
            '#dc3545', '#fd7e14', '#ffc107', '#28a745', '#20c997', '#17a2b8', '#6c757d', '#343a40',
            '#007bff', '#6c757d', '#28a745', '#17a2b8', '#ffc107', '#dc3545', '#f8f9fa', '#343a40',
          ],
        }]
      }
    });
  }

}
