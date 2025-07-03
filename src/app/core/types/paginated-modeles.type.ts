import { WorkQueueModel, PaginatedResModel, FilterConfigModel, NewsModel } from '../models';

export type PaginatedWorkQueue = PaginatedResModel<WorkQueueModel>;
export type PaginatedWorkQueueFilters = PaginatedResModel<FilterConfigModel>;
export type PaginatedNews = PaginatedResModel<NewsModel>;
