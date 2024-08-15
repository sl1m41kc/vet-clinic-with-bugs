import { IPriceSection } from "@/app/types/IPrice";

export const PRICE_DATA: IPriceSection[] = [
  {
    title: "Консультации",
    services: [
      {
        id: "0",
        title: "Консультация врача",
        price: 1500,
      },

      {
        id: "1",
        title: "Консультация врача",
        price: 1500,
      }
    ]
  },
  {
    title: "Лабораторные методы исследования",
    description:
      "Все исследования проводятся в лаборатории клиники в течении 15 минут",
    services: [
      {
        id: "0",
        title: "УЗИ брюшной полости",
        price: 1500,
      },

      {
        id: "1",
        title: "Контрастная внутривенная урография",
        description:
          "(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)",
        price: 1500,
      },

      {
        id: "2",
        title:
          "Оперативное лечение разрыва краниальной крестовидной связки по методу TPLO",
        description:
          "(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)",
        services: [
          {
            id: "0",
            title: "Контрастная внутривенная урография",
            description:
              "(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)",
            price: 25000,
          },

          {
            id: "1",
            title:
              "Полная хирургическая обработка ран проникающих брюшной стенки с повреждением органов брюшной полости",
            description:
              "(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)",
            price: 35000,
          },
        ],
      },

      {
        id: "3",
        title: "Контрастная внутривенная урография",
        description:
          "(включает в себя стоимость контраста, не менее 3 снимков, расходные материалы)",
        price: 1500,
      },
    ],
    note: "Стоимость указана без учета расходных материалов и препаратов",
  },
];