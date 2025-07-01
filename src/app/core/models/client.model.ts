import { LineModel } from "./line.model";

export interface ClientModel {
  id: string;
  name: string;
  line: LineModel;
}