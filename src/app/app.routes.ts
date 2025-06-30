import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { mainRoutes } from './pages/main/main.routes';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: appRouts.main.routerPath,
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: appRouts.main.routerPath,
  },
];
