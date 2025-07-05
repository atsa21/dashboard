import { AccountModel } from "@core/models";
import { PerformanceMetricksComponent } from "../performance-metricks.component";
import { PerformanceProgressCardModel } from "../components/performance-progress-card/models/performance-progress-card.model";

export const PerformanceCards = (
  context: PerformanceMetricksComponent,
  account: AccountModel | null
): any => {
  return [
    {
      title: 'Winnability',
      display: account?.winnability.display,
      value: account?.winnability.value,
      isWinnability: true,
      action: 'See all factors'
    },
    {
      title: 'Loss Ratio',
      display: account?.loss_ratio + '%',
      value: account?.loss_ratio,
      target: 'vs 42% target',
      action: 'View history'
    },
    {
      title: 'Premium Growth',
      display: '12%',
      value: '12%',
      target: 'YoY increase',
      subtarget: '$123M vs $150M Target',
      action: 'View trend'
    }
  ]
}

export const PerformanceProgressCard: PerformanceProgressCardModel = {
  title: 'Exposute Distribution',
  value: [
    {
      name: 'Marine Cargo:',
      value: 71.4,
      objective_value: 100,
    },
    {
      name: 'General Liability:',
      value: 20,
      objective_value: 100,
    },
    {
      name: 'Workers Comp:',
      value: 8.6,
      objective_value: 100,
    }
  ]
}
