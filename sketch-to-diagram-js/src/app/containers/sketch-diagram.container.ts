import { CanvasConfig, SVGCanvas } from './components/canvas';
import { Component, ChangeDetectionStrategy, ElementRef, SimpleChanges, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'sktd-sketch-diagram',
  template: `
    <div id="sketch-diagram-canvas"></div>
  `,
  styles: [`
    #sketch-diagram-canvas {
      height: 100%;
      width: 100%
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SketchDiagramComponent implements OnChanges, OnInit {

  private canvasConfig: CanvasConfig;
  private canvas: SVGCanvas;

  @Output() pathEmitter: EventEmitter<[number, number]> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  render() {
    console.log("Rendering");
    d3.select(this.elementRef.nativeElement).select('#sketch-diagram-canvas').select('*').remove();
    this.canvasConfig = {
      container: d3.select(this.elementRef.nativeElement).select('#sketch-diagram-canvas'),
      pathEmitter: this.pathEmitter
    };
    this.canvas = new SVGCanvas(this.canvasConfig);
  }

  ngOnInit() {
    setTimeout(() => {
      this.render();
    });
  }

  ngOnChanges(c: SimpleChanges) {
    setTimeout(() => {
      this.render();
    });
  }
}
