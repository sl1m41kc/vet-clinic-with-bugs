import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import { BaseGroupPriceSchema } from "@/app/types/IPrice";
import type { IGroupPrice } from "@/app/types/IPrice";

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