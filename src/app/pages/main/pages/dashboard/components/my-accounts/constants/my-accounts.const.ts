import { ETableItemType } from "@core/enums";
import { TableColumnsModel } from "@core/models";

export const MyAccountsTableColumns: TableColumnsModel[] = [
  {
    key: 'account',
    display: 'Account Name/Type',
    type: ETableItemType.Subtext,
    obj_keys: ['name', 'last_name', 'type'],
    subtitle_key: 'display',
  },
  {
    key: 'line',
    display: 'Line',
    type: ETableItemType.KeyValue,
    subtitle_key: 'name',
  },
  {
    key: 'broker',
    display: 'Broker',
    type: ETableItemType.Subtext,
    obj_keys: ['name', 'last_name'],
  },
  {
    key: 'renewal_date',
    display: 'Renewal date',
    type: ETableItemType.Date,
  },
  {
    key: 'premium',
    display: 'Premium',
    type: ETableItemType.Money,
    blue_text: true,
  },
  {
    key: 'rated_premium',
    display: 'Rated Premium',
    type: ETableItemType.Money,
  },
  {
    key: 'loss_ratio',
    display: 'Loss Ratio',
    type: ETableItemType.Ratio,
    colored: true,
  },
  {
    key: 'appetite',
    display: 'Appetite',
    type: ETableItemType.Ratio,
  },
  {
    key: 'status',
    display: 'Status',
    type: ETableItemType.Status,
  },
  {
    key: 'triage',
    display: 'Triage',
    type: ETableItemType.Ratio,
    blue_text: true,
  },
  {
    key: 'winnability',
    display: 'Winnability',
    type: ETableItemType.Ratio,
    blue_text: true,
  },
  {
    key: 'menu.svg',
    display: '',
    type: ETableItemType.Menu,
  },
];

export const MyAccountChips = [
  {
    value: 'filter',
    display: 'Filter',
  },
  {
    value: 'sort',
    display: 'Sort',
  },
  {
    value: 'group',
    display: 'Group',
  },
];