import { ETableItemType } from "@core/enums";

export interface TableColumnsModel {
  key: string;
  display: string;
  type: ETableItemType;
  obj_keys?: string[];
  subtitle_key?: string;
  icon?: string;
  blue_text?: boolean;
  colored?: boolean;
  largeMoney?: boolean;
}

export interface FilterConfigModel {
  value: string;
  display: string;
  count?: number;
  isSelected?: boolean;
}