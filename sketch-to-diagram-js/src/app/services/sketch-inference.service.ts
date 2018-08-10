import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { loadModel, Model, fromPixels, image, scalar, Rank, Tensor, tidy, zeros } from '@tensorflow/tfjs';
import * as d3 from 'd3';

@Injectable()
export class SketchInferenceService {
  private IMAGE_DIMENSION: [number, number] = [28, 28];
  private model: Model;
  private classes: {[id: string]: string};

  constructor() {
    from(d3.json('/assets/class_names.json')).subscribe((d: {[id: string]: string}) => {
      this.classes = d;
    });

    from(loadModel('/assets/model.json')).subscribe(m => {
      this.model = m;
    });
  }

  private preprocess(imgData): Tensor<Rank> {
    return tidy(() => {
      const tensor = fromPixels(imgData, 1);
      const resized = image.resizeBilinear(tensor, [28, 28]).toFloat();
      const offset = scalar(255.0);
      const normalized = scalar(1.0).sub(resized.div(offset));
      const batched = normalized.expandDims(0);
      return batched;
    });
  }

  public predict(imgData): [string, number][] {
    const preprocessed = this.preprocess(imgData);
    const prediction = <Float32Array>(this.model.predict(preprocessed) as Tensor).dataSync();
    const results = [];

    prediction.forEach((v, i) => {
      results.push([this.classes[i], v]);
    });

    const topPrediction = results.reduce((prev, curr) => {
      if (prev) {
        if (curr[1] > prev[1]) {
          return curr;
        } else {
          return prev;
        }
      } else {
        return curr;
      }
    });

    return topPrediction;
  }

}
