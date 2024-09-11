import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

import type { IGroupPrice } from '@/app/types/IPrice';

// Делаем данный блок API принудительно динамическим
export const dynamic = 'force-dynamic';

export async function GET(
  _: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Получение списка групп цен из базы данных
    const price: IGroupPrice | null = await prisma.priceList.findUnique({
      where: { id },
    });
    // Если запрос из БД ничего не вернул, выбрасываем ошибку
    if (!price) throw new Error();
    return NextResponse.json(price, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Или цен нет, или произошла ошибка. Попробуйте еще раз' },
      { status: 404 }
    );
  }
}
