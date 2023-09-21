import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route2ChildComponent } from './route2-child/route2-child.component';
import { Route2Child2Component } from './route2-child2/route2-child2.component';
import { Route2Component } from './route2.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: Route2Component,
    children: [
      {
        path: 'child1',
        component: Route2ChildComponent,
      },
      {
        path: 'child2',
        component: Route2Child2Component,
      },
      {
        path: '',
        redirectTo: 'child1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class Route2RoutingModule {}
