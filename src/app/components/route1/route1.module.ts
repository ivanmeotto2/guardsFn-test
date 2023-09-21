import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route1-routing.module';
import { Route1ChildComponent } from './route1-child/route1-child.component';
import { Route1Child2Component } from './route1-child2/route1-child2.component';

@NgModule({
  declarations: [
    Route1ChildComponent,
    Route1Child2Component
  ],
  imports: [CommonModule, Route1RoutingModule],
})
export class Route1Module {}
