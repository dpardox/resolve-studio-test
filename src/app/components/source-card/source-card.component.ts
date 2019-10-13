import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Source } from 'webpack-sources';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-source-card',
  templateUrl: './source-card.component.html',
  styleUrls: ['./source-card.component.scss']
})
export class SourceCardComponent implements OnInit {

  @Input()
  public source: Source;

  @Output()
  public deleted = new EventEmitter();

  constructor(private sourceService: SourceService) { }

  ngOnInit() { }

  public delete(id: number) {
    if (confirm('Confirme para eliminar la empresa')) {
      this.sourceService.delete(id).subscribe((response) => {
        this.deleted.emit({ id: response.id });
      });
    }
  }

}