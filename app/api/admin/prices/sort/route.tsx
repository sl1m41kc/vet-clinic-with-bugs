import { ListIdSchema } from '@/app/types/IPrice';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const listId = await request.json();

  const validation = ListIdSchema.safeParse(listId);
  if (!validation.success) {
    return new Response(JSON.stringify({ error: validation.error }), {
      status: 400,
    });
  }

  listId.forEach(async (id: string, index: number) => {
    const groupPrice = await prisma.priceList.findUnique({ where: { id } });
    if (!groupPrice) {
      return NextResponse.json(
        { error: 'Не найдена группа с ценой id: ' + id },
        { status: 400 }
      );
    }

    await prisma.priceList.update({
      where: { id },
      data: { sortOrder: index },
    });
  });

  const prices = await prisma.priceList.findMany();
  if (prices.length === 0) {
    return NextResponse.json(
      { error: "Не найдено ни одной цены" },
      { status: 400 }
    );
  }

  return NextResponse.json({ prices }, { status: 200 });
}
