import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatGridListModule
  ],
})
export class SktdMaterialModule { }
