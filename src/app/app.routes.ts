import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { mainRoutes } from './pages/main/main.routes';

export const routes: Routes = [
  ...mainRoutes,
  {
    path: '**',
    redirectTo: appRouts.main.routerPath,
  },
];
