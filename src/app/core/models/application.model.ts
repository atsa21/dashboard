export interface PaginatedResModel<T> {
  count: number;
  results: T[];
}

export interface IKeyValue<T = unknown> {
  value: T;
  display: string;
  isSelected?: boolean;
}
