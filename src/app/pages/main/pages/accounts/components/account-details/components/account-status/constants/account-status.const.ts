import { EAccountItemStatus } from "@core/enums";
import { IKeyValue } from "@core/models";

export const AccountStatusList: IKeyValue<EAccountItemStatus>[] = [
  {
    display: 'Submitted',
    value: EAccountItemStatus.Submitted,
    position: 1,
  },
  {
    display: 'Review',
    value: EAccountItemStatus.Review,
    position: 2,
  },
  {
    display: 'Quote',
    value: EAccountItemStatus.Quote,
    position: 3,
  },
  {
    display: 'Bind',
    value: EAccountItemStatus.Bind,
    position: 4,
  },
  {
    display: 'Issue',
    value: EAccountItemStatus.Issue,
    position: 5
  },
  {
    display: 'Renew',
    value: EAccountItemStatus.Renew,
    position: 6
  }
]
