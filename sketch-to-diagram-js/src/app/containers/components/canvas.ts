import { Observable, Subject, Subscription } from 'rxjs';
import * as d3 from 'd3';
import { EventEmitter, Output } from '@angular/core';

export interface CanvasConfig {
  container: any;
  pathEmitter?: EventEmitter<[number, number]>;
  backgroundColor?: string;
}

export class SVGCanvas {
  private canvas: d3.Selection<any, any, any, any>;
  private canvasConfig: CanvasConfig;
  private fullWidth: number;
  private fullHeight: number;

  private line = d3.line().curve(d3.curveBasis);
  private svg;

  constructor(canvasConfig: CanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.canvas = canvasConfig.container
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('background-color', canvasConfig.backgroundColor || '#e8efee')

    this.svg = d3.select('svg').call(
      d3.drag()
        // .container(() => this)
        .subject(() => {
          const p = [d3.event.x, d3.event.y];
          return [p, p];
        })
        .on("start", this.dragStarted.bind(this))
       );

  }

  dragStarted() {
    console.log(this);
    const d = d3.event.subject;
    console.log("D", d);
    // const svg = this.canvas.select('svg').container((() => this));
    const active = this.svg.append('path').datum(d);
    let x0 = d3.event.x;
    let y0 = d3.event.y;

    console.log(x0, y0, this.svg, active, d, d3.event);

    d3.event.on('drag', () => {
      const x1 = d3.event.x;
      const y1 = d3.event.y;
      const dx = x1 - x0;
      const dy = y1 - y0;

      console.log(x1, y1, this.svg, d);

      if (dx * dx + dy * dy > 100) {
        d.push([x0 = x1, y0 = y1]);
      } else {
        d[d.length - 1] = [x1, y1];
      }

      if (this.canvasConfig.pathEmitter) {
        this.canvasConfig.pathEmitter.emit(d[d.length - 1]);
      }

      active.attr('d', this.line);
    });
  }

}
