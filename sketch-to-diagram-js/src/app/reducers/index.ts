import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSketchDiagram from './sketch-diagram.reducer';

export interface State {

  sketchDiagram: fromSketchDiagram.State;
}

export const reducers: ActionReducerMap<State> = {

  sketchDiagram: fromSketchDiagram.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
