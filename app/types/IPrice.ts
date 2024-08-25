import { z } from "zod";

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



// Определяем типы данных для валидации
export const PriceOptionSchema = z.object({
  optionTitle: z.string(),
  optionDescription: z.string().nullable().optional(), // nullable для значений, которые могут быть null
  optionPrice: z.number(),
});

export const ServiceSchema = z.object({
  serviceTitle: z.string(),
  serviceDescription: z.string().nullable().optional(),
  servicePrice: z.number().nullable().optional(),
  priceOptions: z.array(PriceOptionSchema),
});

// Тип для создания группы цен
export const CreateGroupPriceSchema = z.object({
  groupTitle: z.string(),
  groupDescription: z.string().nullable().optional(),
  groupNote: z.string().nullable().optional(),
  services: z.array(ServiceSchema),
});

export const GroupPriceSchema = CreateGroupPriceSchema.extend({
  id: z.string()
});

// На основе этих типов создаем интерфейсы (на самом деле типы,
// но в данном случае это не важно)
export type IGroupPrice = z.infer<typeof GroupPriceSchema>;
export type IService = z.infer<typeof ServiceSchema>;
export type IPriceOption = z.infer<typeof PriceOptionSchema>;

// export interface IGroupPrice {
//   id: string;
//   groupTitle: string;
//   groupDescription: string | null;
//   groupNote: string | null;
//   services: IService[];
// }

// export interface IService {
//   serviceTitle: string;
//   serviceDescription: string | null;
//   servicePrice: number | null;
//   priceOptions: IPriceOption[];
// }

// export interface IPriceOption {
//   optionTitle: string;
//   optionDescription: string | null;
//   optionPrice: number;
// }
