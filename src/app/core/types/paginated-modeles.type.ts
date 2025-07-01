import { WorkQueueModel, PaginatedResModel, FilterConfigModel } from '../models';

export type PaginatedWorkQueue = PaginatedResModel<WorkQueueModel>;
export type PaginatedWorkQueueFilters = PaginatedResModel<FilterConfigModel>;
