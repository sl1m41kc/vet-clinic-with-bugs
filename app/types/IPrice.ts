interface IPrice {
    title: string,
    description?: string,
    price?: string,
    services?: IPrice[]
}

export interface IService {
    title: string,
    description?: string,
    services: IPrice[],
    note: string
}