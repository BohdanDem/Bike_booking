export interface IQuery {
  page: number;
  limit: number;
  sortedBy: string;

  [key: string]: string | number;
}

export interface IPaginationResponse<T> {
  page: number;
  limit: number;
  itemsCount: number;
  itemsFound: number;
  availableBikes: number;
  bookedBikes: number;
  averageBikeCost: number;
  data: T[];
}
