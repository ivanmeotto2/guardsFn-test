import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2ChildComponent } from './route2-child/route2-child.component';
import { Route2Child2Component } from './route2-child2/route2-child2.component';

@NgModule({
  declarations: [Route2ChildComponent, Route2Child2Component],
  imports: [CommonModule, Route2RoutingModule],
})
export class Route2Module {}
