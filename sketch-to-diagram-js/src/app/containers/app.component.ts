import { SketchInferenceService } from '../services/sketch-inference.service';
import { Component, EventEmitter, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-grid-list id="container" cols="4" rowHeight="fit">
    <mat-grid-tile colspan="3" rowspan="1">
      <sktd-sketch-diagram (pathEmitter)="emitPath($event)"></sktd-sketch-diagram>
    </mat-grid-tile>
    <mat-grid-tile colspan="1" rowspan="1">
      TEST COL 2
    </mat-grid-tile>
  </mat-grid-list>
  `,
  styles: [`
    #container {
      height: 98vh;
    }
    sktd-sketch-diagram {
      width: 100%;
      height: 100%
    }
  `]
})
export class AppComponent implements OnChanges, OnInit {
  title = 'sketch-to-diagram';
  private pathEmitter: EventEmitter<[number, number]>;
  constructor(private sketchInference: SketchInferenceService) {}

  ngOnChanges(c: SimpleChanges) {
    console.log("Simple Change", c);
  }

  ngOnInit() {
    console.log("Init", this.pathEmitter);
  }

  emitPath(n: [number, number]) {
    this.sketchInference.emitPath(n);
  }
}
