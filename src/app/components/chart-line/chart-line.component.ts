import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { SourceItem } from 'src/app/interfaces/source.interface';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public data: SourceItem[];

  @ViewChild('chart', { static: true })
  public chartContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    const labels = [];
    const sessions = [];
    const conversions = [];

    this.data.forEach((item) => {
      labels.push(item.name ? item.name.substr(0, 16) : '(not set)');
      sessions.push(item.session);
      conversions.push(item.conversion);
    });

    this.chart(labels, sessions, conversions);
  }

  private chart(labels: any[], sessions: number[], conversions: number[]) {
    const line = new Chart(this.chartContainer.nativeElement, {
      type: 'line',
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
      },
      data: {
        labels,
        datasets: [
          {
            label: 'Sesiones',
            fill: false,
            backgroundColor: '#00c1c7',
            borderColor: '#00c1c7',
            data: sessions
          },
          {
            label: 'Conversiones',
            fill: false,
            backgroundColor: '#ffb928',
            borderColor: '#ffb928',
            data: conversions
          }
        ]
      }
    });
  }

}
