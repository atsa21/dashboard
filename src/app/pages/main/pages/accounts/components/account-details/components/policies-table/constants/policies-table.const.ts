import { ETableItemType } from "@core/enums";
import { TableColumnsModel } from "@core/models";

export const PoliciesTableColumns: TableColumnsModel[] = [
  {
    key: 'line',
    display: 'Line',
    type: ETableItemType.LineIcon,
    subtitle_key: 'name',
  },
  {
    key: 'eff_date',
    display: 'Eff.date',
    type: ETableItemType.Date,
  },
  {
    key: 'exp_date',
    display: 'Exp.Date',
    type: ETableItemType.Date,
  },
  {
    key: 'status',
    display: 'Status',
    type: ETableItemType.Status,
  },
  {
    key: 'expiring_tech',
    display: 'expiring Tech',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'expiring_premium',
    display: 'expiring premium',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'expiring_to_tech',
    display: 'expiring to tech',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'renewal_to_tech',
    display: 'renewal to tech',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'renewal_tech',
    display: 'renewal tech',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'renewal_premiun',
    display: 'renewal premiun',
    type: ETableItemType.Money,
    largeMoney: true,
  },
  {
    key: 'rate_change',
    display: 'rate change',
    type: ETableItemType.Rate,
  },
  {
    key: 'loss_ratio',
    display: 'loss ratio',
    type: ETableItemType.Ratio,
    colored: true,
  },
  {
    key: 'menu.svg',
    display: '',
    type: ETableItemType.Menu,
  },
];

export const PoliciesChips = [
  {
    value: 'filter',
    display: 'Filter',
  },
  {
    value: 'group',
    display: 'Group',
  },
];