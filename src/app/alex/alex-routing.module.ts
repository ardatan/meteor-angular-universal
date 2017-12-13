import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlexComponent } from './alex/alex.component';

const routes: Routes = [
  {path: '', component: AlexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlexRoutingModule { }
