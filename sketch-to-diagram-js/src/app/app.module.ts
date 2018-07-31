import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SketchInferenceService } from './services/sketch-inference.service';
import { ContainerModule } from './containers';

@NgModule({
  imports: [
    BrowserModule,
    ContainerModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    SketchInferenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
