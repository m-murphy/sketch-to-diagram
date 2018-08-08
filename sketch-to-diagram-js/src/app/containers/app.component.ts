import { CanvasConfig, SketchCanvas } from './components/canvas';
import { SketchInferenceService } from '../services/sketch-inference.service';
import { Component, EventEmitter, SimpleChanges, OnChanges, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';


// <mat-grid-tile colspan="1" rowspan="1">
// <canvas id="debug-canvas"></canvas>
// </mat-grid-tile>
@Component({
  selector: 'sktd-root',
  template: `
  <mat-grid-list id="container" cols="6" rowHeight="fit">
    <mat-grid-tile colspan="5" rowspan="2">
      <div class='sketch-diagram-container'>
        <canvas id="sketch-diagram-canvas"></canvas>
      </div>
    </mat-grid-tile>
    <mat-grid-tile colspan="1" rowspan="2">
      <button mat-raised-button (click)="predict()">Predict</button>
      {{prediction | json}}
    </mat-grid-tile>
  </mat-grid-list>
  `,
  styles: [`
    #container {
      height: 98vh;
    }

    .sketch-diagram-container {
      width: 100%;
      height: 100%
    }

    #sketch-diagram-canvas {
      height: 100%;
      width: 100%
    }
  `]
})
export class AppComponent implements OnChanges, OnInit {
  title = 'sketch-to-diagram';

  private canvasConfig: CanvasConfig;
  private canvas: SketchCanvas;
  private prediction: any;

  private debugCanvas;
  private debugContext;

  private pathEmitter: EventEmitter<[number, number]>;
  constructor(private sketchInference: SketchInferenceService, private elementRef: ElementRef) {
  }

  ngOnChanges(c: SimpleChanges) {
  }

  ngOnInit() {
    // this.debugCanvas = d3.select(this.elementRef.nativeElement).select('#debug-canvas').node();
    // this.debugContext = this.debugCanvas.getContext('2d');
    setTimeout(() => {
      this.canvasConfig = {
        container: d3.select(this.elementRef.nativeElement).select('#sketch-diagram-canvas'),
        pathEmitter: this.pathEmitter
      };
      this.canvas = new SketchCanvas(this.canvasConfig);
    });
  }

  predict() {
    const bbox = this.canvas.getSketchBbox();
    const imgData = this.canvas.getSketchImageData();

    this.prediction = this.sketchInference.predict(imgData);
    console.log(this.prediction);
    this.canvas.clearSketch();

  }

}
