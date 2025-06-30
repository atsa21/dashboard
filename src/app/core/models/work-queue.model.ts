import { EWorkQueueStatus, EWorkQueueType } from "@core/enums";
import { UserModel } from "./user.model";

export interface WorkQueueModel {
  id: string;
  assign: UserModel;
  originator: UserModel;
  client:UserModel;
  type: EWorkQueueType;
  status: EWorkQueueStatus;
  created: string;
}