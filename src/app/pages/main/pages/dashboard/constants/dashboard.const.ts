import { FilterConfigModel, TableColumnsModel } from "@core/models";

export const WorkQueueTableColumns: TableColumnsModel[] = [
  {
    key: 'name',
    display: 'File'
  },
  {
    key: 'status',
    display: 'Status'
  },
  {
    key: 'updatedAt',
    display: 'Updated at'
  },
];

export const WorkQueueTableFilters: FilterConfigModel[] = [
  {
    value: 'assign',
    display: 'Assign',
    options: [
      {
        value: '',
        display: '',
      },
    ],
  },
];
