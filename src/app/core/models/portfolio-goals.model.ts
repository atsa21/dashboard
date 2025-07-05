export interface PortfolioGoalItem {
  title: string;
  img: string;
  subtitle: string;
  is_arrow_title: boolean;
  percentage: number;
  value: number;
}

export interface PortfolioGoalObjectiveItem {
  value: number;
  objective_value: number;
  name?: string;
}

export interface PortfolioGoalsModel {
  ratio: PortfolioGoalItem;
  ratio_retentional: PortfolioGoalItem;
  business_target: PortfolioGoalObjectiveItem;
  gwp_target: PortfolioGoalObjectiveItem;
}