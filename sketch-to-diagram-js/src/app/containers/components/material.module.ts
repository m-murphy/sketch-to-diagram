import { NgModule } from '@angular/core';
import { MatGridListModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatGridListModule,
    MatButtonModule
  ],
})
export class SktdMaterialModule { }
