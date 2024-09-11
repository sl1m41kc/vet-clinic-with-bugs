import { IGroupPrice, IPriceSection } from '@/app/types/IPrice';

export const PRICE_DATA: IPriceSection[] = [
  {
    id: '0-section',
    title: 'Консультации',
    services: [
      {
        id: '0',
        title: 'Консультация врача',
        price: 1500,
      },

      {
        id: '1',
        title: 'Консультация врача',
        price: 1500,
      },
    ],
  },
  {
    id: '1-section',
    title: 'Лабораторные методы исследования',
    description:
      'Все исследования проводятся в лаборатории клиники в течении 15 минут',
    services: [
      {
        id: '0',
        title: 'УЗИ брюшной полости',
        price: 1500,
      },

      {
        id: '1',
        title: 'Контрастная внутривенная урография',
        description:
          '(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)',
        price: 1500,
      },

      {
        id: '2',
        title:
          'Оперативное лечение разрыва краниальной крестовидной связки по методу TPLO',
        description:
          '(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)',
        services: [
          {
            id: '0',
            title: 'Вакцинация от клещей',
            description:
              '(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)',
            price: 25000,
          },

          {
            id: '1',
            title: 'Чиста полости рта',
            description:
              '(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)',
            price: 35000,
          },
        ],
      },

      {
        id: '3',
        title: 'Чистка лапок животного',
        description:
          '(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)',
        price: 1500,
      },
    ],
    note: 'Стоимость указана без учета расходных материалов и препаратов',
  },
];

export const DEFAULT_PRICE_DATA: IGroupPrice[] = [];

export const DEFAULT_PRICE_SECTION_DATA: IGroupPrice = {
  id: '',
  sortOrder: 0,
  groupTitle: '',
  groupDescription: '',
  services: [],
  groupNote: '',
};
