import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlexRoutingModule } from './alex-routing.module';
import { AlexComponent } from './alex/alex.component';

@NgModule({
  imports: [
    CommonModule,
    AlexRoutingModule
  ],
  declarations: [AlexComponent]
})
export class AlexModule { }
