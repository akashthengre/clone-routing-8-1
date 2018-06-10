import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1c1Component } from '../Feature1/f1c1/f1c1.component';
import { F1c2Component } from '../Feature1/f1c2/f1c2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule
  ],
  declarations: [F1c1Component, F1c2Component],
  exports: [F1c1Component, F1c2Component, SharedModule]
})
export class Feature1Module { }
