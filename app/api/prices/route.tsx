import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import { CreateGroupPriceSchema } from "@/app/types/IPrice";
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


export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateGroupPriceSchema.safeParse(body);

  // Если валидация прошла неуспешно, возвращаем список ошибок
  if (!validation.success) {
    return NextResponse.json( validation.error.errors, { status: 400 });
  }

  // Если валидация прошла успешно, создаем группу цен в базе данных
  const newGroupPrice: IGroupPrice = await prisma.priceList.create({
    data: validation.data,
  });

  return NextResponse.json( newGroupPrice.id , { status: 201 });

  // Если нужно вернуть весь объект, то можно так
  // return NextResponse.json({ newGroupPrice }, { status: 201 });

}
