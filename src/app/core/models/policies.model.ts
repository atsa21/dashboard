import { EPoliciesStatus } from "@core/enums";
import { LineModel } from "./line.model";
import { IKeyValue } from "./application.model";

export interface PoliciesModel {
  id: number;
  line: LineModel;
  premium: string;
  eff_date: string;
  exd_date: string;
  status: IKeyValue<EPoliciesStatus>;
  expiring_tech: number;
  expiring_premium: number;
  expiring_to_tech: number;
  renewal_to_tech: number;
  renewal_tech: number;
  renewal_premiun: number;
  rate_change: number;
  loss_ratio: number;
}