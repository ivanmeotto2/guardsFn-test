import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'route-1',
    loadChildren: () => import('./components/route1/route1.module').then((m) => m.Route1Module),
  },
  {
    path: 'route-2',
    loadChildren: () => import('./components/route2/route2.module').then((m) => m.Route2Module),
    canActivate: [authGuard],
    canActivateChild: [authGuard],
  },
  {
    path: '',
    redirectTo: 'route-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
