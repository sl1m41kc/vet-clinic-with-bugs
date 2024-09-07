// Срок обновления кэша при fetch-запросах
export const REVALIDATE_TIME: number =
  Number(process.env.REVALIDATE_TIME) || 10;
