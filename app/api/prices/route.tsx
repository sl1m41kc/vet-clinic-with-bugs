import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import type { IGroupPrice } from "@/app/types/IPrice";

export async function GET()  {
  // Получение списка групп цен из базы данных
  const prices: IGroupPrice[] = await prisma.priceList.findMany();

  // Если запрос из БД ничего не вернул, возвращаем ошибку
  if (!prices) {
    return NextResponse.json({ error: "Что-то пошло не так, попробуйте обновить страницу" }, { status: 404 });
  }

  return NextResponse.json(prices, { status: 200 });
}
