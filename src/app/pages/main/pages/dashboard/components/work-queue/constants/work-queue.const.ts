import { ETableItemType } from "@core/enums";
import { TableColumnsModel } from "@core/models";

export const WorkQueueTableColumns: TableColumnsModel[] = [
  {
    key: 'originator',
    display: 'Originator',
    type: ETableItemType.User,
    obj_keys: ['name', 'last_name'],
  },
  {
    key: 'client',
    display: 'Client',
    type: ETableItemType.Subtext,
    obj_keys: ['name', 'line'],
    subtitle_key: 'name',
  },
  {
    key: 'type',
    display: 'Type',
    type: ETableItemType.KeyValue,
  },
  {
    key: 'status',
    display: 'Status',
    type: ETableItemType.Status,
  },
  {
    key: 'created',
    display: 'Created',
    type: ETableItemType.Date,
  },
  {
    key: 'menu.svg',
    display: '',
    type: ETableItemType.Menu,
  },
];
