import { EAccountStatus, EAccountType, EWinnability } from "@core/enums";
import { IKeyValue } from "./application.model";
import { LineModel } from "./line.model";
import { UserModel } from "./user.model";

export interface AccountItemModel {
  id: number;
  name: string;
  type: IKeyValue<EAccountType>;
}

export interface AccountModel {
  id: number;
  account: AccountItemModel;
  line: LineModel;
  broker: Partial<UserModel>;
  renewal_date: string;
  premium: string;
  rated_premium: number;
  loss_ratio: number;
  appetite: string;
  status: IKeyValue<EAccountStatus>;
  triage: number;
  winnability: IKeyValue<EWinnability>;
}