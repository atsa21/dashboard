import { appRouts } from '@core/constants';
import { TabNavigationModel } from '@core/models';

export const MainTabs: TabNavigationModel[] = [
  {
    id: 1,
    display: 'Dashboard',
    routerPath: appRouts.dashboard.routerPath,
    icon: 'assets/icons/dashboard.svg',
  },
  {
    id: 2,
    display: 'Accounts',
    routerPath: appRouts.accounts.routerPath,
    icon: 'assets/icons/accounts.svg',
  },
  {
    id: 3,
    display: 'Brokers',
    routerPath: appRouts.brokers.routerPath,
    icon: 'assets/icons/brokers.svg',
  },
    {
    id: 4,
    display: 'Submissions',
    routerPath: appRouts.submissions.routerPath,
    icon: 'assets/icons/submissions.svg',
  },
  {
    id: 5,
    display: 'Organizations',
    routerPath: appRouts.organizations.routerPath,
    icon: 'assets/icons/organization.svg',
  },
  {
    id: 6,
    display: 'Goals & Rules',
    routerPath: appRouts.goals_rules.routerPath,
    icon: 'assets/icons/goals.svg',
  },
  {
    id: 7,
    display: 'Admin',
    routerPath: appRouts.admin.routerPath,
    icon: 'assets/icons/admin.svg',
  },
];
