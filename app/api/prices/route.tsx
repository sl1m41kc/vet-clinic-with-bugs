import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

import type { IGroupPrice } from '@/app/types/IPrice';

// Делаем данный блок API принудительно динамическим
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Получение списка групп цен из базы данных
    const prices: IGroupPrice[] = await prisma.priceList.findMany();
    // Если запрос из БД ничего не вернул, выбрасываем ошибку
    if (prices.length === 0) {
      throw new Error();
    }
    return NextResponse.json(
      prices.sort((a, b) => a.sortOrder - b.sortOrder),
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Или цен нет, или произошла ошибка. Попробуйте еще раз' },
      { status: 404 }
    );
  }
}
