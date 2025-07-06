import { IKeyValue } from "@core/models";

export interface DetailsSidebarModel {
  title: string;
  count: number;
  isSelected: boolean;
  items: IKeyValue<string>[];
}