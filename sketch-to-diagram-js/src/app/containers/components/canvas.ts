import * as d3 from 'd3';
import { EventEmitter, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { fabric } from 'Fabric';

export interface CanvasConfig {
  container: d3.Selection<any, any, any, any>;
  pathEmitter?: EventEmitter<[number, number]>;
  backgroundColor?: string;
}

const DiagramObject = fabric.util.createClass(fabric.Polygon, {
  isDiagram: true,
  initialize: (options = {}) => {
    this.callSuper('initialize', options);
  },

  toObject: () => {
    this.callSuper('toObject');
  },

  _render: (ctx) => {
    this.callSuper('_render', ctx);
  }
});

const DiagramCircle = fabric.util.createClass(fabric.Circle, {
  isDiagram: true,
  initialize: (options = {}) => {
    this.callSuper('initialize', options)
  }
})

export class SketchCanvas {
  private diagramCanvas: fabric.Canvas;
  private sketchCanvas: fabric.Canvas;
  private canvasConfig: CanvasConfig;

  private mouseMoveSource: Observable<any>;
  private mouseUpSource: Observable<any>;
  private mouseDownSource: Observable<any>;


  constructor(canvasConfig: CanvasConfig) {
    this.configureCanvas(canvasConfig);
    const parentContainer = canvasConfig.container.node().parentNode.parentNode;
    this.sketchCanvas.setDimensions({
      width: parentContainer.offsetWidth,
      height: parentContainer.offsetHeight
    });
    this.sketchCanvas.renderAll();
  }

  configureCanvas(canvasConfig: CanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.sketchCanvas = new fabric.Canvas(canvasConfig.container.node(), {
      backgroundColor: '#eaf0f9',
      isDrawingMode: true,
    });
    this.sketchCanvas.freeDrawingBrush.color = 'black';
    this.sketchCanvas.freeDrawingBrush.width = 4;

    this.mouseMoveSource = fromEvent(this.sketchCanvas, 'mouse:move');
    this.mouseDownSource = fromEvent(this.sketchCanvas, 'mouse:down');
    this.mouseUpSource = fromEvent(this.sketchCanvas, 'mouse:up');
  }

  getSketchObjects() {
    return this.sketchCanvas.getObjects('path');
  }

  getSketchBbox() {
    const bbox = this.getSketchObjects().reduce((prev, curr) => {
      const coords = curr.aCoords;
      return {
        minX: Math.min(prev.minX, coords.tl.x),
        minY: Math.min(prev.minY, coords.tl.y),
        maxX: Math.max(prev.maxX, coords.br.x),
        maxY: Math.max(prev.maxY, coords.br.y)
      };
    }, {
      minX: Number.MAX_SAFE_INTEGER,
      minY: Number.MAX_SAFE_INTEGER,
      maxX: 0,
      maxY: 0
    });
    return bbox;
  }

  public getSketchImageData() {
    const dpi = window.devicePixelRatio;
    const bbox = this.getSketchBbox();
    const context = this.sketchCanvas.getContext();
    const imgData: ImageData = context.getImageData(
      Math.max(bbox.minX - 10, 0) * dpi,
      Math.max(bbox.minY - 10, 0) * dpi,
      (bbox.maxX - bbox.minX + 20) * dpi,
      (bbox.maxY - bbox.minY + 20) * dpi
    );

    return imgData;
  }

  public clearSketch() {
    this.getSketchObjects().map(i => this.sketchCanvas.fxRemove(i));
  }

}
