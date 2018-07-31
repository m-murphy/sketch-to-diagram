import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadModel, Model, fromPixels, image, scalar, Rank, Tensor, tidy } from '@tensorflow/tfjs';

@Injectable()
export class SketchInferenceService {
  private IMAGE_DIMENSION: [number, number] = [28, 28];
  private model: Model;

  private pathSubject: Subject<[number, number]> = new Subject();


  constructor() {
    console.log('Loading Model');
    from(loadModel('/assets/model.json')).subscribe(m => {
      this.model = m;
      console.log('Model Succesfully Loaded', this.model);
    });

    this.pathSubject.pipe(
      map(n => n[0] + n[1] * 2)
    ).subscribe(n => {
      console.log("Path Subscription", n);
    });

  }

  preprocess(imgData): Tensor<Rank> {
    return tidy(() => {
      const tensor = fromPixels(imgData, 1);
      const resized = image.resizeBilinear(tensor, this.IMAGE_DIMENSION).toFloat();
      const offset = scalar(255.0);
      const normalized = scalar(1.0).sub(resized.div(offset));
      const batched = normalized.expandDims(0);
      return batched;
    });
  }

  predict(imgData): Tensor<Rank> | Tensor<Rank>[] {
    const prediction = this.model.predict(this.preprocess(imgData));
    console.log('Prediction:', prediction);
    return prediction;
  }

  emitPath(n: [number, number]) {
    console.log("Emit Path: ", n);
    this.pathSubject.next(n);
  }
}
