export interface IPriceSection {
  title: string;
  services: IPrice[];
  description?: string;
  note?: string;
}

export interface IPrice {
  id: string;
  title: string;
  price?: number;
  description?: string;
  services?: IPrice[];
}
