export interface IBike{
    ID_slug: string;
    name: string;
    type: string;
    color: string;
    wheel_size: number;
    price: number;
    description: string;
}

export interface IPaginationBikes<T> {
    page: number;
    limit: number;
    itemsCount: number;
    itemsFound: number;
    data: T[];
}
