export interface IBike{
    ID_slug: string;
    name: string;
    type: string;
    color: string;
    wheel_size: number;
    price: number;
    description: string;
    status: string;
}

export interface IPaginationBikes<T> {
    page: number;
    limit: number;
    itemsCount: number;
    itemsFound: number;
    availableBikes: null,
    bookedBikes: null,
    averageBikeCost: number,
    data: T[];
}
