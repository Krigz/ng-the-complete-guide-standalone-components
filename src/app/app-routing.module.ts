import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    // component: AboutComponent, // not loaded lazily
    loadComponent: () => import('./about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () => // lazy loading vvv
      import('./dashboard/routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
