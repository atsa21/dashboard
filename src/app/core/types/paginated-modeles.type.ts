import { AccountModel } from '@core/models/account.model';
import { WorkQueueModel, PaginatedResModel, FilterConfigModel, NewsModel, WarningModel, PoliciesModel, CommunicationModel } from '../models';

export type PaginatedWorkQueue = PaginatedResModel<WorkQueueModel>;
export type PaginatedWorkQueueFilters = PaginatedResModel<FilterConfigModel>;
export type PaginatedNews = PaginatedResModel<NewsModel>;
export type PaginatedAccounts = PaginatedResModel<AccountModel>;
export type PaginatedWarnings = PaginatedResModel<WarningModel>;
export type PaginatedPolicies = PaginatedResModel<PoliciesModel>;
export type PaginatedCommunication = PaginatedResModel<CommunicationModel>;
