import { Component, OnInit } from '@angular/core';
import { SourceService } from 'src/app/services/source.service';
import { ActivatedRoute } from '@angular/router';
import { SourceData } from 'src/app/interfaces/source.interface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public data: SourceData;

  constructor(private sourceService: SourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sourceService.data(params.file).subscribe((response) => {
        this.data = response;
      });
    });
  }

}
