import { EWorkQueueStatus, EWorkQueueType } from "@core/enums";
import { UserModel } from "./user.model";
import { IKeyValue } from "./application.model";
import { ClientModel } from "./client.model";

export interface WorkQueueModel {
  id: string;
  assign: string;
  originator: UserModel;
  client: ClientModel;
  type: IKeyValue<EWorkQueueType>;
  status: IKeyValue<EWorkQueueStatus>;
  created: string;
}

export interface WorkQueueFilterModel {
  id: string;
  display: string;
  value: string;
  count: number;
  isSelected?: boolean;
}