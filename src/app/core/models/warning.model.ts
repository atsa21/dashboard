import { IKeyValue } from "./application.model";

export interface WarningModel {
  id: number;
  title: string;
  type: IKeyValue<string>;
  subtitle: string;
  action: string;
}