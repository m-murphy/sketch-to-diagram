import { CanvasConfig, SketchCanvas } from './components/canvas';
import { SketchInferenceService } from '../services/sketch-inference.service';
import { Component, SimpleChanges, OnChanges, OnInit, ElementRef } from '@angular/core';
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
      <div class="button-row">
        <button mat-raised-button color="primary" (click)="toggleDrawingMode()">{{mode}}</button>
        <button mat-raised-button color="warn" [disabled]="!isObjectActive" (click)="deleteActiveObject()">DELETE OBJECT</button>
      </div>
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

    .button-row button {
      margin-right: 8px;
    }
  `]
})
export class AppComponent implements  OnInit {
  title = 'sketch-to-diagram';

  private canvasConfig: CanvasConfig;
  private canvas: SketchCanvas;
  private prediction: any;

  constructor(private sketchInference: SketchInferenceService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    // Go for one tick before rendering canvas
    setTimeout(() => {
      this.canvasConfig = {
        container: d3.select(this.elementRef.nativeElement).select('#sketch-diagram-canvas'),
      };
      this.canvas = new SketchCanvas(this.canvasConfig);
      this.canvas.sketchFinished.subscribe(() => {
        this.predict();
      });
    });
  }

  toggleDrawingMode() {
    this.canvas.toggleDrawingMode();

  }

  predict() {
    const bbox = this.canvas.getSketchBbox();
    const pathRange = this.canvas.getPathRange();
    const imgData = this.canvas.getSketchImageData();

    if (imgData) {
      this.prediction = this.sketchInference.predict(imgData);

      if (this.prediction[1] > .8) {
        this.canvas.render(this.prediction[0], bbox, pathRange);
      }
      this.canvas.clearSketch();
    }
  }

  get mode() {
    if (this.canvas) {
      return this.canvas.isDrawingMode ? 'EDITING MODE' : 'DRAWING MODE';
    } else {
      return 'LOADING';
    }
  }

  get isObjectActive() {
    if (this.canvas) {
      return this.getActiveObject();
    } else {
      return false;
    }
  }

  getActiveObject() {
    return this.canvas.getActiveObject();
  }

  deleteActiveObject() {
    this.canvas.deleteActiveObject();
  }

}
