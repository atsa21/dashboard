import { IKeyValue } from "./application.model";

export interface TableColumnsModel {
  key: string;
  display: string;
}

export interface FilterConfigModel {
  value: string;
  display?: string;
  options: IKeyValue[];
}