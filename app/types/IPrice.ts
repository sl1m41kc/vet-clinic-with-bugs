import { z } from 'zod';

// Определяем типы данных для валидации
export const PriceOptionSchema = z.object({
  optionTitle: z.string(),
  optionDescription: z.string().nullable().optional(), // nullable для значений, которые могут быть null
  optionPricePrefix: z.string().nullable().optional(),
  optionPrice: z.number(),
});

export const ServiceSchema = z.object({
  serviceTitle: z.string(),
  serviceDescription: z.string().nullable().optional(),
  servicePricePrefix: z.string().nullable().optional(),
  servicePrice: z.number().nullable().optional(),
  priceOptions: z.array(PriceOptionSchema),
});

// Тип для создания группы цен
export const BaseGroupPriceSchema = z.object({
  sortOrder: z.number().default(0),
  groupTitle: z.string(),
  groupDescription: z.string().nullable().optional(),
  groupNote: z.string().nullable().optional(),
  services: z.array(ServiceSchema),
});

export const GroupPriceSchema = BaseGroupPriceSchema.extend({
  id: z.string(),
});

export const ListIdSchema = z.array(z.string());

// На основе этих типов создаем интерфейсы (на самом деле типы,
// но в данном случае это не важно)
export type IGroupPrice = z.infer<typeof GroupPriceSchema>;
export type IService = z.infer<typeof ServiceSchema>;
export type IPriceOption = z.infer<typeof PriceOptionSchema>;
