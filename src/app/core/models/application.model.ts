export interface PaginatedResModel<T> {
  count: number;
  results: T[];
}

export interface IKeyValue<T = unknown> {
  value: T;
  display: string;
  isSelected?: boolean;
  position?: number;
}

export interface TabModel<T = any> {
  id: number | string;
  display: string;
  value?: string;
  isSelected?: boolean;
  icon?: string;
  count?: number;
}

export interface TabNavigationModel extends TabModel {
  routerPath: string;
}
