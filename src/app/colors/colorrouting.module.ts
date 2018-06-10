import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';


const routes : Routes = [
  {path : 'red', component: RedComponent},
  {path : 'green', component: GreenComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ColorroutingModule { }
