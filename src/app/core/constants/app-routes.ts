export type AppRouting =
  | 'main'
  | 'dashboard'
  | 'accounts'
  | 'brokers'
  | 'submissions'
  | 'organizations'
  | 'goals_rules'
  | 'admin'
  | 'account_id';

export const appRouts: Record<
AppRouting,
{
  routerPath: string;
  fullPath?: string;
}
> = {
  main: { routerPath: '' },
  dashboard: { routerPath: 'dashboard' },
  accounts: { routerPath: 'accounts' },
  brokers: { routerPath: 'brokers' },
  submissions: { routerPath: 'submissions' },
  organizations: { routerPath: 'organizations' },
  goals_rules: { routerPath: 'goals_rules' },
  admin: { routerPath: 'admin' },
  account_id: { routerPath: ':id' },
}