import { SktdMaterialModule } from './components/material.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentModule } from './components';


export const CONTAINERS = [
  AppComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    SktdMaterialModule
  ],
  declarations: CONTAINERS,
  exports: CONTAINERS
})

export class ContainerModule {}
