import * as d3 from 'd3';
import { EventEmitter } from '@angular/core';
import { fromEvent, Observable, merge } from 'rxjs';
import { map, debounceTime, filter } from 'rxjs/operators';
import { fabric } from 'Fabric';


export interface CanvasConfig {
  container: d3.Selection<any, any, any, any>;
  pathEmitter?: EventEmitter<[number, number]>;
  backgroundColor?: string;
}

export interface BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

interface Point {
  x: number;
  y: number;
}

export class SketchCanvas {
  private sketchCanvas: fabric.Canvas;
  private canvasConfig: CanvasConfig;

  private mouseDownMoveSource: Observable<any>;
  private mouseUpSource: Observable<any>;
  private mouseDownSource: Observable<any>;

  public sketchFinished: Observable<void>;

  private start: fabric.Point;
  private end: fabric.Point;

  private mouseDown = false;

  constructor(canvasConfig: CanvasConfig) {
    this.configureCanvas(canvasConfig);
    const parentContainer = canvasConfig.container.node().parentNode.parentNode;
    this.sketchCanvas.setDimensions({
      width: parentContainer.offsetWidth,
      height: parentContainer.offsetHeight
    });
    this.sketchCanvas.renderAll();
  }

  private configureCanvas(canvasConfig: CanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.sketchCanvas = new fabric.Canvas(canvasConfig.container.node(), {
      backgroundColor: '#eaf0f9',
      isDrawingMode: true,
      selectionLineWidth: 3
    });
    this.sketchCanvas.freeDrawingBrush.color = 'black';
    this.sketchCanvas.freeDrawingBrush.width = 4;

    this.initializeEvents();
  }

  private initializeEvents() {
    this.mouseDownMoveSource = fromEvent(this.sketchCanvas, 'mouse:move').pipe(
      filter(() => this.mouseDown || this.sketchCanvas.isDrawingMode),
      map(r => {
        return {
          type: 'mouse:move',
          val: r
        };
      })
    );

    this.mouseDownSource = fromEvent(this.sketchCanvas, 'mouse:down').pipe(
      map(r => {
        return {
          type: 'mouse:down',
          val: r
        };
      })
    );

    this.mouseUpSource = fromEvent(this.sketchCanvas, 'mouse:up').pipe(
      map(r => {
        return {
          type: 'mouse:up',
          val: r
        };
      })
    );

    this.mouseDownSource.subscribe(res => {
      this.start = res.val.pointer;
      this.mouseDown = true;
    });

    this.mouseUpSource.subscribe(res => {
      this.end = res.val.pointer;
      this.mouseDown = false;
    });

    this.sketchFinished = merge(this.mouseDownMoveSource, this.mouseDownSource, this.mouseUpSource).pipe(
      debounceTime(750)
    );
  }

  public getSketchObjects() {
    return this.sketchCanvas.getObjects('path');
  }

  public getSketchBbox(): BoundingBox {
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

  public getPathRange(): [Point, Point] {
    return [this.start, this.end];
  }

  public toggleDrawingMode() {
    this.sketchCanvas.isDrawingMode = !this.sketchCanvas.isDrawingMode;
  }

  get isDrawingMode() {
    return this.sketchCanvas.isDrawingMode;
  }

  getActiveObject() {
    return this.sketchCanvas.getActiveObject();
  }

  deleteActiveObject() {
    this.sketchCanvas.remove(...this.sketchCanvas.getActiveObjects());
  }

  public renderCircle(bbox: BoundingBox) {
    const vertRadius = (bbox.maxY - bbox.minY) / 2;
    const horizRadius = (bbox.maxX - bbox.minX) / 2;
    let circle;
    if (Math.abs(1 - (vertRadius / horizRadius)) < .3) {
      circle = new fabric.Circle({
        left: bbox.minX,
        top: bbox.minY,
        radius: Math.max(vertRadius, horizRadius),
        strokeWidth: 5,
        stroke: 'black',
        fill: 'rgba(0,0,0,0)'
      });
    } else {
      circle = new fabric.Ellipse({
        left: bbox.minX,
        top: bbox.minY,
        rx: horizRadius,
        ry: vertRadius,
        strokeWidth: 5,
        stroke: 'black',
        fill: 'rgba(0,0,0,0)'
      });
    }
    this.sketchCanvas.add(circle);
  }

  public renderRect(bbox: BoundingBox) {
    const rect = new fabric.Rect({
      left: bbox.minX,
      top: bbox.minY,
      width: bbox.maxX - bbox.minX,
      height: bbox.maxY - bbox.minY,
      strokeWidth: 5,
      stroke: 'black',
      fill: 'rgba(0,0,0,0)'
    });
    this.sketchCanvas.add(rect);
  }

  public renderTriangle(bbox: BoundingBox) {
    const triangle = new fabric.Triangle({
      left: bbox.minX,
      top: bbox.minY,
      width: bbox.maxX - bbox.minX,
      height: bbox.maxY - bbox.minY,
      strokeWidth: 5,
      stroke: 'black',
      fill: 'rgba(0,0,0,0)',
    });
    this.sketchCanvas.add(triangle);
  }

  public renderHexagon(bbox: BoundingBox) {
    const radius = Math.max(bbox.maxX - bbox.minX, bbox.maxY - bbox.minY) / 2;
    const points = this.regularPolygonPoints(6, radius);
    const hexagon = new fabric.Polygon(points, {
      left: bbox.minX,
      top: bbox.minY,
      strokeWidth: 5,
      stroke: 'black',
      fill: 'rgba(0,0,0,0)',
      strokeLineJoin: 'bevil'
    });
    this.sketchCanvas.add(hexagon);
  }

  public renderStar(bbox: BoundingBox) {
    const outerRadius = Math.max(bbox.maxX - bbox.minX, bbox.maxY - bbox.minY) / 2;
    const innerRadius = outerRadius / 2;
    const points = this.starPolygonPoints(5, outerRadius, innerRadius);
    const star = new fabric.Polygon(points, {
      left: bbox.minX,
      top: bbox.minY,
      strokeWidth: 5,
      stroke: 'black',
      fill: 'rgba(0,0,0,0)',
      strokeLineJoin: 'bevil'
    });
    this.sketchCanvas.add(star);
  }

  public renderLine(pathRange: [Point, Point]) {
    const line = new fabric.Polyline(pathRange, {
      strokeWidth: 5,
      stroke: 'black'
    });
    this.sketchCanvas.add(line);
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

  private regularPolygonPoints(sideCount: number, radius: number) {
    const sweep = (Math.PI * 2) / sideCount;
    const cx = radius;
    const cy = radius;
    const points = [];
    for (let i = 0; i < sideCount; i++) {
        const x = cx + radius * Math.cos(i * sweep);
        const y = cy + radius * Math.sin(i * sweep);
        points.push({x: x, y: y});
    }
    return points;
  }

  private starPolygonPoints(spikeCount: number, outerRadius: number, innerRadius: number) {
    const cx = outerRadius;
    const cy = outerRadius;
    const sweep = Math.PI / spikeCount;
    const points = [];
    let angle = -Math.round(360 / spikeCount);

    for (let i = 0; i < spikeCount; i++) {
      let x = cx + Math.cos(angle) * outerRadius;
      let y = cy + Math.sin(angle) * outerRadius;
      points.push({x: x, y: y});
      angle += sweep;
      x = cx + Math.cos(angle) * innerRadius;
      y = cy + Math.sin(angle) * innerRadius;
      points.push({x: x, y: y});
      angle += sweep;
    }
    return points;
  }

  render(p: string, bbox: BoundingBox, pathRange: [Point, Point]) {
    switch (p) {
      case 'square':
        this.renderRect(bbox);
        break;
      case 'circle':
        this.renderCircle(bbox);
        break;
      case 'triangle':
        this.renderTriangle(bbox);
        break;
      case 'hexagon':
        this.renderHexagon(bbox);
        break;
      case 'star':
        this.renderStar(bbox);
        break;
      case 'line':
        this.renderLine(pathRange);
        break;
      default:
        return;
    }
  }

}
