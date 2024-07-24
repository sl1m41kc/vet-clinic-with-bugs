import { IServiceCard } from "../types/IServiceCard";

import HeartSVG from '@/public/Svg/Heart.svg'
import FlaskSVG from '@/public/Svg/Flask.svg'
import MedBowlSVG from '@/public/Svg/Med_bowl.svg'

export const servicesData: IServiceCard[] = [
  {
    title: "Поликлиника",
    services: [
      {
        text: "вакцинация",
        isLink: true,
      },

      {
        text: "прием врача",
        isLink: true,
      },

      {
        text: "терапия",
        isLink: false,
      },

      {
        text: "чипирование",
        isLink: true,
      },
    ],
  },

  {
    title: "Хирургия",
    services: [
      {
        text: "вправление вывихов",
        isLink: true,
      },

      {
        text: "кастрация",
        isLink: true,
      },

      {
        text: "кесарево сечение",
        isLink: false,
      },

      {
        text: "лечение переломов любой сложности",
        isLink: false,
      },

      {
        text: "оперативное лечение паталогий суставов",
        isLink: false,
      },

      {
        text: "оперативное  лечение при мочекаменной болезни",
        isLink: false,
      },

      {
        text: "полостные операции",
        isLink: true,
      },

      {
        text: "стерилизация",
        isLink: true,
      },
    ],
    SVG: <HeartSVG />,
  },

  {
    title: "Лаборатория",
    services: [
      {
        text: "гистология",
        isLink: true,
      },

      {
        text: "исследование крови",
        isLink: true,
      },

      {
        text: "исследование крови на бабезиос (цитоплазма)",
        isLink: false,
      },

      {
        text: "исследование мочи и кала",
        isLink: true,
      },

      {
        text: "цитология",
        isLink: true,
      },
    ],
    SVG: <FlaskSVG />,
  },

  {
    title: "Госпитализация",
    services: [
      {
        text: "дневной стационар",
        isLink: true,
      },

      {
        text: "интенсивная терапия",
        isLink: true,
      },

      {
        text: "инфекционный стационар",
        isLink: false,
      },

      {
        text: "круглосуточный стационар",
        isLink: true,
      },
    ],
  },

  {
    title: "Диагностика",
    services: [
      {
        text: "диагностика инфекционных и инвазионных заболеваний",
        isLink: false,
      },

      {
        text: "рентген",
        isLink: true,
      },

      {
        text: "узи",
        isLink: false,
      },
    ],
  },

  {
    title: "Аптека",
    services: [
      {
        text: "ветеринарные диеты",
        isLink: true,
      },

      {
        text: "витамины",
        isLink: true,
      },

      {
        text: "конакеон, ветмедин",
        isLink: false,
      },

      {
        text: "нестероидные противовоспалительные препараты",
        isLink: false,
      },

      {
        text: "препараты для лечения мочевыделительной системы",
        isLink: false,
      },

      {
        text: "средства против блох, клещей, внутренних паразитов",
        isLink: false,
      },

      {
        text: "хондропротекторы",
        isLink: true,
      },
    ],
    SVG: <MedBowlSVG />,
  },

  {
    title: "Зоотовары",
    services: [
      {
        text: "аксессуары",
        isLink: true,
      },

      {
        text: "игрушки",
        isLink: true,
      },

      {
        text: "корма",
        isLink: false,
      },

      {
        text: "переноски, лежанки",
        isLink: true,
      },

      {
        text: "средства гигиены",
        isLink: true,
      },

      {
        text: "средства груминга",
        isLink: false,
      },
    ],
  },
];
