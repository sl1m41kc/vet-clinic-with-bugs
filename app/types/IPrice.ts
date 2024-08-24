// ! нужно будет удалить
export interface IPriceSection {
  id: string;
  title: string;
  services: IPrice[];
  description?: string;
  note?: string;
}

// ! нужно будет удалить
export interface IPrice {
  id: string;
  title: string;
  price?: number;
  description?: string;
  services?: IPrice[];
}



export interface IGroupPrice {
  id: string;
  groupTitle: string;
  groupDescription?: string | null;
  groupNote?: string | null;
  services: IService[];
}

export interface IService {
  serviceTitle: string;
  serviceDescription?: string | null;
  servicePrice?: number | null;
  priceOptions: IPriceOption[];
}

export interface IPriceOption {
  optionTitle: string;
  optionDescription?: string | null;
  optionPrice: number;
}
