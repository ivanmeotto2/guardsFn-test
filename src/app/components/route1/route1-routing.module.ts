import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1.component';
import { Route1ChildComponent } from './route1-child/route1-child.component';
import { Route1Child2Component } from './route1-child2/route1-child2.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: Route1Component,
    children: [
      {
        path: 'child1',
        component: Route1ChildComponent,
      },
      {
        path: 'child2',
        component: Route1Child2Component,
      },
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class Route1RoutingModule {}
