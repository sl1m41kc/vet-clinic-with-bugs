import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import { BaseGroupPriceSchema } from "@/app/types/IPrice";
import type { IGroupPrice } from "@/app/types/IPrice";

interface IProps {
  params: { id: string };
}

export async function PUT(request: NextRequest, { params: { id } }: IProps) {
  const body = await request.json();

  const validation = BaseGroupPriceSchema.safeParse(body);
  // Если формат данных не соответствует, возвращаем ошибку 404 (Bad Request).
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  try {
    // Запрашиваем из БД пользователя с нужным id.
    const priceGroup = await prisma.priceList.findUnique({
      where: {
        id: id,
      }
    })
    // Если группы цен не существует, выбрасываем ошибку
    if (!priceGroup) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({ error: "Такая группа цен не найдена" }, { status: 404 });
  }

  // Иначе обновляем группу цен в БД
  try {
    const updatedGroupPrice: IGroupPrice = await prisma.priceList.update({
      data: validation.data,
      where: {
        id: id,
      },
    })

    // Возвращаем обновленного пользователя.
    return NextResponse.json({ updatedGroupPrice }, { status: 200});
  } catch (error) {
    return NextResponse.json({ error: "Что-то пошло не так. Попробуйте еще раз" }, { status: 500 });
  }

}
