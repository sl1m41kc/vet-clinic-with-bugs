import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import type { IGroupPrice } from "@/app/types/IPrice";

// request используется, чтобы Next.js не кешировал запросы.
export async function GET(request: NextRequest)  {
  // Получение списка групп цен из базы данных
  const prices: IGroupPrice[] = await prisma.priceList.findMany();

  // Если запрос из БД ничего не вернул, возвращаем ошибку
  if (!prices) {
    return NextResponse.json({ error: "Что-то пошло не так, попробуйте обновить страницу" }, { status: 404 });
  }

  return NextResponse.json(prices, { status: 200 });
}
