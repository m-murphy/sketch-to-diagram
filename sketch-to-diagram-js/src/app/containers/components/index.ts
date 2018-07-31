import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SktdMaterialModule } from './material.module';


export const COMPONENTS = [

];

@NgModule({
  imports: [
    CommonModule,
    SktdMaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ComponentModule {}
