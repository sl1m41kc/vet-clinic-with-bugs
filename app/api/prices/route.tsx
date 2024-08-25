import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import { BaseGroupPriceSchema } from "@/app/types/IPrice";
import type { IGroupPrice } from "@/app/types/IPrice";

export async function GET() {
  try {
    // Получение списка групп цен из базы данных
    const prices: IGroupPrice[] = await prisma.priceList.findMany();
    // Если запрос из БД ничего не вернул, выбрасываем ошибку
    if (prices.length === 0) {
      throw new Error();
    }
    return NextResponse.json(prices, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Или цен нет, или произошла ошибка. Попробуйте еще раз" },
      { status: 404 }
    );
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = BaseGroupPriceSchema.safeParse(body);
  // Если валидация прошла неуспешно, возвращаем список ошибок
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Если валидация прошла успешно, создаем группу цен в базе данных
  try {
  const newGroupPrice: IGroupPrice = await prisma.priceList.create({
    data: validation.data,
  });
  return NextResponse.json(newGroupPrice.id, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Что-то пошло не так. Попробуйте еще раз" }, { status: 500 });
  }

  // Если нужно вернуть весь объект, то можно так
  // return NextResponse.json({ newGroupPrice }, { status: 201 });
}
