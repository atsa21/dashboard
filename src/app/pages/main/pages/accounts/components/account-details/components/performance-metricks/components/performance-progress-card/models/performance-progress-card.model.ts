export interface PerformanceProgressCardValue {
  name: string;
  value: number;
  objective_value: number;
}

export interface PerformanceProgressCardModel {
  title: string;
  value: PerformanceProgressCardValue[];
}