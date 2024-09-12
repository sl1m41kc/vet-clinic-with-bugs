import { IAboutContent } from '../types/IAboutContent';
import OnePhoto from '../../public/Images/about/1.jpg';
import MainPhoto from '../../public/Images/about/main.jpg';

export const ABOUT_CONTENT_DATA: IAboutContent = {
  title: <>О&nbsp;нашей клинике</>,
  content: [
    {
      title: <>История и&nbsp;развитие клиники</>,
      description: [
        <>
          Ветеринарная клиника &laquo;Ветлекарь&raquo; начала свою работу
          1&nbsp;июня 2013&nbsp;года.
        </>,
        <>
          Первый филиал открылся на&nbsp;улице Кропоткина, 132. Спустя год, 22
          октября 2014&nbsp;года, мы&nbsp;запустили второй филиал
          на&nbsp;Красном проспекте, 169/1. В&nbsp;июне 2020 года наш третий
          филиал открылся по&nbsp;адресу Зорге, 77А.
        </>,
      ],
    },
    {
      title: <>Профессиональная команда</>,
      description: [
        <>
          Мы&nbsp;поставили перед собой задачу создать клинику, которая будет
          максимально удобной и&nbsp;полезной для наших клиентов. В&nbsp;центре
          этой идеи &mdash;&nbsp;команда профессионалов, для которых ветеринария
          не&nbsp;просто работа, а призвание и&nbsp;смысл жизни.
          Мы&nbsp;тщательно подбирали специалистов, заинтересованных
          в&nbsp;своем деле, готовых вкладывать силы и&nbsp;знания в здоровье
          ваших питомцев.
        </>,
      ],
    },
    {
      title: <>Удобное расположение</>,
      description: [
        <>
          Не&nbsp;менее важным было найти подходящие помещения для наших клиник.
          Мы стремились обеспечить удобное расположение рядом
          с&nbsp;транспортными развязками, чтобы вам было легко добраться,
          а&nbsp;вашим питомцам &mdash; комфортно заходить в&nbsp;клинику. Для
          хозяев мы&nbsp;постарались создать уютную атмосферу ожидания.
        </>,
      ],
    },
    {
      title: (
        <>Современное оснащение и&nbsp;комплексный подход к&nbsp;лечению</>
      ),
      description: [
        <>
          Оборудование клиник также заслуживает внимания. Мы&nbsp;сделали все
          возможное, чтобы ваш питомец мог пройти полное диагностическое и
          лечебное обследование на&nbsp;месте. У&nbsp;нас есть терапевтическое и
          хирургическое отделения, современное диагностическое оборудование,
          включая рентген, УЗИ и&nbsp;лабораторию. Также мы&nbsp;предлагаем
          услуги стационара, ветеринарной аптеки и&nbsp;зоотовары.
        </>,
      ],
      image: {
        src: OnePhoto,
        alt: 'Современное оснащение и комплексный подход к лечению',
      },
    },
    {
      title: <>Забота, которую мы&nbsp;разделяем</>,
      description: [
        <>
          Мы&nbsp;стремимся не&nbsp;только к&nbsp;профессионализму,
          но&nbsp;и&nbsp;к&nbsp;тому, чтобы каждый визит в&nbsp;нашу клинику был
          максимально комфортным для вас и&nbsp;ваших питомцев. Наша команда
          всегда готова помочь, ответить на&nbsp;вопросы и поддержать
          в&nbsp;любой ситуации. Мы&nbsp;рады быть частью вашей заботы о
          здоровье ваших любимцев и&nbsp;всегда открыты для вас.
        </>,
      ],
    },
  ],
  image: {
    src: MainPhoto,
    alt: 'О нашей клинике',
  },
};
