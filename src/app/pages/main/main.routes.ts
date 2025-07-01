import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { MainComponent } from './main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { BrokersComponent } from './pages/brokers/brokers.component';
import { GoalsRulesComponent } from './pages/goals-rules/goals-rules.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { AdminComponent } from './pages/admin/admin.component';

export const children: Routes = [
  { 
    path: appRouts.dashboard.routerPath,
    component: DashboardComponent,
  },
  { 
    path: appRouts.accounts.routerPath,
    component: AccountsComponent,
  },
  { 
    path: appRouts.brokers.routerPath,
    component: BrokersComponent,
  },
  { 
    path: appRouts.submissions.routerPath,
    component: SubmissionsComponent,
  },
  { 
    path: appRouts.organizations.routerPath,
    component: OrganizationsComponent,
  },
  { 
    path: appRouts.goals_rules.routerPath,
    component: GoalsRulesComponent,
  },
  { 
    path: appRouts.admin.routerPath,
    component: AdminComponent,
  },
];

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: children
  },
];