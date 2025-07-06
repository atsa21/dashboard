import { EWinnability } from "@core/enums";
import { IKeyValue } from "./application.model";

export interface WinnabilityPositionModel {
  score: number;
  avg: number;
  competition: number;
}

export interface WinnabilityChangeModel {
  title: string;
  value: number;
}

export interface WinnabilityModel {
  id: number;
  winnability: IKeyValue<EWinnability>;
  position: WinnabilityPositionModel;
  increasing: WinnabilityChangeModel[];
  decreasing: WinnabilityChangeModel[]
}