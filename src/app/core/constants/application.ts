import { PaginatedResModel } from "@core/models";

export const DefaultPagination = <T>() =>
  ({
    count: 0,
    results: [],
  } as T);