import { ECommunicationType } from "@core/enums";
import { IKeyValue } from "./application.model";
import { UserModel } from "./user.model";

export interface CommunicationModel {
  id: number;
  title: string;
  type: IKeyValue<ECommunicationType>;
  created: {
    created_by: Partial<UserModel>;
    created_on: string;
  };
  text: string;
  attachments_count: number;
}