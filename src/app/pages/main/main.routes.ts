import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { MainComponent } from './main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const mainRoutes: Routes = [
  {
    path: appRouts.main.routerPath,
    component: MainComponent,
    children: [
      { 
        path: appRouts.dashboard.routerPath,
        component: DashboardComponent,
      },
      { 
        path: appRouts.dashboard.routerPath,
        component: DashboardComponent,
      },
    ],
  },
];