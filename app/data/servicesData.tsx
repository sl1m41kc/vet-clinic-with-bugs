import HeartSVG from "@/public/Svg/Heart.svg";
import FlaskSVG from "@/public/Svg/Flask.svg";
import MedBowlSVG from "@/public/Svg/Med_bowl.svg";
import { IServiceGroup } from "../types/IServiceGroup";
import Link from "next/link";
import ArrowButton from "../UI/ArrowButton/ArrowButton";

export const servicesData: IServiceGroup[] = [
  {
    title: "Приемное отделение",
    services: [
      {
        text: "Вакцинация",
        isLink: true,
        id: 0,
        description: [
          <>
            Ежегодно наша клиника проводит более <b>3&nbsp;000</b>
            &nbsp;вакцинаций.
          </>,
          <>
            Мы&nbsp;прививаем кошек от&nbsp;бешенства, герпесвирусной инфекции,
            калицивирусной инфекции, панлейкопении, хламидиоза и&nbsp;лейкоза.
          </>,

          <>
            <b>Кошки должны получать вакцину ежегодно.</b> Первую прививку можно
            ставить уже в&nbsp;8&nbsp;недель.
          </>,

          <>
            Собаки прививаются от&nbsp;бешенства, инфекционного гепатита,
            парвовирусного энтерита и&nbsp;чумы плотоядных.
          </>,
          <>
            <b>Собаки должны получать вакцину ежегодно.</b> Первую прививку
            можно поставить в&nbsp;8&nbsp;недель. В&nbsp;случае высокого риска
            заражения есть специальные вакцины для щенков с&nbsp;6&nbsp;недель.
          </>,
          <>
            Перед вакцинацией Вашего питомца осмотрит врач и&nbsp;убедится, что
            нет противопоказаний к&nbsp;прививке.{" "}
            <b>Процедура занимает 20&ndash;30&nbsp;минут.</b> Особой подготовки
            не&nbsp;требуется.
          </>,
          <>
            <b>Лайфхак:</b> мы&nbsp;рекомендуем совмещать вакцинацию
            с&nbsp;ежегодной диспансеризацией животного. Так за&nbsp;один визит
            в&nbsp;клинику&nbsp;Вы можете пройти осмотр, сдать анализы
            и&nbsp;получить рекомендации по&nbsp;профилактике заболеваний.
          </>,
        ],
        notes: [
          <>Вакцинация проводится по&nbsp;предварительной записи</>,
          <>
            Не забудьте взять с собой ветеринарный паспорт (если его нет, мы
            оформим)
          </>,
        ],
      },

      {
        text: "Прием врача",
        isLink: true,
        id: 1,
        description: [
          <>
            В&nbsp;нашей клинике работают <b>более 30&nbsp;специалистов</b>{" "}
            различных направлений. Мы&nbsp;предлагаем широкий спектр
            ветеринарных услуг, включая консультации терапевта, хирурга,
            ортопеда, травматолога, дерматолога, офтальмолога, гастроэнтеролога,
            диетолога и&nbsp;кардиолога. Также у&nbsp;нас ведут прием
            специалисты по&nbsp;ультразвуковой диагностике, рентгенологии,
            стоматологии, анестезиологии, эндоскопии, цитологии
            и&nbsp;репродуктологии.
          </>,
        ],
        notes: [<>Приём врача осуществляется по&nbsp;предварительной записи</>],
      },

      {
        text: "Экстренный прием",
        isLink: true,
        id: 2,
        description: [
          <>
            Если ваш питомец в&nbsp;тяжелом состоянии и&nbsp;нет времени
            на&nbsp;планирование визита, просто позвоните в&nbsp;наш кол-центр.
            Вас направят в&nbsp;ближайший филиал,{" "}
            <b>где смогут оказать экстренную помощь</b> в&nbsp;кратчайшие сроки.
            К&nbsp;неотложным состояниям относятся: шок, потеря сознания,
            множественные травмы, переломы, эпистатус, кровотечение, тепловой
            удар, переохлаждение, острое расширение и&nbsp;заворот желудка,
            затрудненное дыхание, патологические роды и&nbsp;отравления.
          </>,
        ],
      },

      {
        text: "Чипирование",
        isLink: true,
        id: 3,
        description: [
          <>
            Чипирование&nbsp;&mdash; это современный способ идентификации
            животных. Под кожу питомцу вводится небольшой чип размером
            с&nbsp;рисовое зерно. С&nbsp;помощью специального устройства
            с&nbsp;чипа можно сканировать уникальный номер, который затем
            заносится в&nbsp;базу данных. Это позволяет легко идентифицировать
            найденное животное и&nbsp;быстро найти его владельца. В&nbsp;случае
            кражи чип поможет доказать, что вы&nbsp;&mdash; законный хозяин.
          </>,
        ],
        notes: [
          <>
            Чипы не&nbsp;имеют GPS, поэтому отслеживать местоположение животного
            на&nbsp;карте невозможно
          </>,
          <>Чипирование проводится по&nbsp;предварительной записи</>,
        ],
      },
    ],
    image: "receptionDepartment",
    pathName: "polyclinic",
  },

  {
    title: "Хирургия",
    services: [
      {
        text: "Лечение переломов любой сложности",
        isLink: true,
        id: 0,
        description: [
          <>
            Наша клиника специализируется на&nbsp;лечении переломов любой
            сложности. В&nbsp;штате работают четыре высококвалифицированных
            ортопеда, и&nbsp;за&nbsp;время нашего существования мы&nbsp;успешно
            вылечили <b>более тысячи переломов.</b>
          </>,
          <>
            Мы&nbsp;применяем передовые методы накостной и&nbsp;внутрикостной
            фиксации обломков для восстановления поврежденных костей. Наша
            главная цель&nbsp;&mdash; максимально восстановить опору
            на&nbsp;поврежденную конечность и&nbsp;облегчить болевые ощущения
            у&nbsp;вашего питомца. Для этого мы&nbsp;используем современные
            методики и&nbsp;регулярно обновляем свои знания на&nbsp;российских
            и&nbsp;международных конференциях.
          </>,
          <>
            Особое внимание мы&nbsp;уделяем анестезии и&nbsp;обезболиванию как
            во&nbsp;время операции, так и&nbsp;в&nbsp;послеоперационный период,
            чтобы обеспечить вашему питомцу комфортное и&nbsp;быстрое
            восстановление.
          </>,
        ],
      },

      {
        text: "Оперативное лечение патологий суставов",
        isLink: true,
        id: 1,
        description: [
          <>
            Наши четвероногие друзья, к&nbsp;сожалению, могут страдать
            от&nbsp;различных заболеваний суставов, которые требуют
            хирургического вмешательства. Мы&nbsp;предлагаем следующие передовые
            методы лечения:
          </>,
          <ul>
            <li>
              <b>Артропластика:</b> эндоскопическое лечение и&nbsp;диагностика
              суставов через небольшой прокол.
            </li>
            <li>
              <b>Резекционная артропластика ТБС:</b> удаление головки бедренной
              кости при переломах, дисплазии, остеоартрите и&nbsp;других
              патологиях, где органосохранное лечение невозможно.
            </li>
            <li>
              <b>
                Хирургическое лечение разрыва передней крестовидной связки (ПКС)
              </b>{" "}
              методом TPLO.
            </li>
            <li>
              <b>Лечение вывихов локтевого и&nbsp;коленного суставов.</b>
            </li>
          </ul>,
          <>
            Мы&nbsp;придаем особое значение мастерству наших хирургов,
            соблюдению стерильности и&nbsp;качественной анестезии. Наша команда
            регулярно осваивает современные техники и&nbsp;следит
            за&nbsp;новейшими достижениями в&nbsp;области ветеринарной хирургии.
            Мы&nbsp;также поддерживаем связь с&nbsp;владельцами после операции,
            чтобы реабилитация вашего питомца прошла максимально эффективно.
          </>,
        ],
      },

      {
        text: "Оперативное лечение при мочекаменной болезни (уретростомия)",
        isLink: true,
        id: 2,
        description: [
          <>
            Мочекаменная болезнь&nbsp;&mdash; одна из&nbsp;самых
            распространённых проблем у&nbsp;котов. Мы&nbsp;всегда стремимся
            стабилизировать состояние питомца с&nbsp;помощью терапевтических
            методов (лекарствами и&nbsp;диетой). Однако в&nbsp;тяжёлых случаях,
            когда эти меры не&nbsp;помогают, может потребоваться операция
            на&nbsp;уретре.
          </>,
          <>
            Такая операция значительно улучшает качество жизни животного
            и&nbsp;позволяет эффективно контролировать болезнь. В&nbsp;таких
            ситуациях мы&nbsp;обеспечиваем тесное сотрудничество между
            хирургическим и&nbsp;терапевтическим отделениями. Это гарантирует,
            что операция действительно необходима, проводится на&nbsp;высоком
            уровне и&nbsp;сопровождается качественной послеоперационной
            терапией.
          </>,
        ],
      },

      {
        text: "Полостные операции",
        isLink: true,
        id: 3,
        description: [
          <>
            В&nbsp;нашем штате работают хирурги, которые специализируются
            на&nbsp;внутриполостных операциях различной сложности. К&nbsp;этим
            операциям относится очень широкий спектр хирургических вмешательств:
            удаление инородных предметов из&nbsp;органов желудочно-кишечного
            тракта, хирургическое лечение шунтов, лечение гинекологических
            патологий, удаление желчного пузыря и&nbsp;многие другие жизненно
            необходимые операции.
          </>,
        ],
      },

      {
        text: "Эндоскопические операции",
        isLink: true,
        id: 4,
        description: [
          <>
            Эндоскопические операции&nbsp;&mdash; это современный метод
            малоинвазивной хирургии. С&nbsp;помощью специального оборудования
            мы&nbsp;можем &laquo;заглянуть&raquo; в&nbsp;брюшную полость
            и&nbsp;провести операцию через небольшой прокол. Это позволяет
            стерилизовать животное с&nbsp;минимальными разрезами и&nbsp;швами.
          </>,
          <>
            Гибкая эндоскопия помогает безопасно извлечь инородные предметы,
            например, съеденные игрушки, из&nbsp;желудка без необходимости
            в&nbsp;разрезе. Также мы&nbsp;используем эндоскопию для глубокой
            диагностики и&nbsp;лечения заболеваний:
          </>,
          <ul>
            <li>
              <b>Гастроскопия</b>&nbsp;&mdash; для обследования желудка;
            </li>
            <li>
              <b>Риноскопия</b>&nbsp;&mdash; для диагностики состояния слизистой
              носа;
            </li>
            <li>
              <b>Отоскопия</b>&nbsp;&mdash; для диагностики и&nbsp;лечения
              заболеваний ушей.
            </li>
          </ul>,
          <>
            Все наши филиалы оснащены современным эндоскопическим оборудованием,
            а&nbsp;наши хирурги прошли обучение в&nbsp;ведущих эндоскопических
            клиниках России.
          </>,
        ],
      },

      {
        text: "Удаление опухолей",
        isLink: true,
        id: 5,
        description: [
          <>
            Наши хирурги выполняют удаление новообразований различного типа
            и&nbsp;сложности. Мы&nbsp;работаем как с&nbsp;небольшими кожными
            образованиями, так и&nbsp;с&nbsp;более сложными случаями, такими
            как:
          </>,
          <ul>
            <li>
              <b>Удаление новообразований костей;</b>
            </li>
            <li>
              <b>Хирургическое вмешательство в&nbsp;брюшной полости;</b>
            </li>
            <li>
              <b>
                Удаление молочных желез и&nbsp;регионарных лимфатических узлов
              </b>{" "}
              при онкологии молочной железы.
            </li>
          </ul>,
          <>
            Мы&nbsp;обеспечиваем профессиональный подход и&nbsp;тщательное
            лечение в&nbsp;каждом случае.
          </>,
        ],
      },

      {
        text: "Пластические операции",
        isLink: true,
        id: 6,
        description: [
          <>
            Да, у&nbsp;животных также проводятся пластические операции,
            но&nbsp;только жизненно необходимые. К&nbsp;таким операциям
            относятся:
          </>,
          <ul>
            <li>
              <b>Пластика носа</b> у&nbsp;брахиоцефалов, чтобы позволить
              им&nbsp;полноценно дышать;
            </li>
            <li>
              <b>Пластика век</b> при завороте или других патологиях;
            </li>
            <li>
              <b>Кожная пластика</b> при обширных травмах и&nbsp;после ожогов;
            </li>
            <li>
              <b>И&nbsp;другие</b> виды пластических операций.
            </li>
          </ul>,
          <>
            Мы&nbsp;обеспечиваем необходимый уход и&nbsp;квалифицированное
            лечение, чтобы помочь вашему питомцу вернуться к&nbsp;полноценной
            жизни.
          </>,
        ],
      },

      {
        text: "Кастрация / стерилизация",
        isLink: true,
        id: 7,
        description: [
          <>
            Кастрация&nbsp;&mdash; одна из&nbsp;самых распространённых операций
            в&nbsp;ветеринарной медицине. Мы&nbsp;проводим её&nbsp;двумя
            основными методами: <b>лапаротомия</b> (через разрез брюшной стенки)
            и&nbsp;<b>лапароскопия</b> (через небольшой прокол).
          </>,
          <>
            Операция рекомендована для кошек и&nbsp;собак начиная {""}
            <b>с&nbsp;6&nbsp;месяцев.</b> Ранняя стерилизация возможна после
            дополнительной консультации с&nbsp;врачом. Для некоторых пород собак
            может быть рекомендована более поздняя кастрация, этот вопрос также
            следует обсудить с&nbsp;вашим ветеринаром.
          </>,
          <>
            Так как операция плановая и&nbsp;не&nbsp;носит экстренный характер,
            мы&nbsp;рекомендуем хорошо к&nbsp;ней подготовиться и&nbsp;снизить
            все риски:
          </>,
          <ul>
            <li>
              <b>Вакцинировать животное до&nbsp;операции;</b>
            </li>
            <li>
              <b>Пройти плановый осмотр у&nbsp;терапевта;</b>
            </li>
            <li>
              <b>Сдать общий и&nbsp;биохимический анализ крови;</b>
            </li>
            <li>
              Терапевт может также порекомендовать <b>скрининг сердца</b>,
              особенно для пород из&nbsp;группы риска по&nbsp;кардиозаболеваниям
              и&nbsp;для возрастных животных.
            </li>
          </ul>,
          <>
            Операции по&nbsp;кастрации и&nbsp;стерилизации мы&nbsp;всегда
            назначаем на&nbsp;утро. Это связано с&nbsp;тем, что мы&nbsp;четко
            планируем наш операционный день, подготавливаем инструменты,
            операционную и&nbsp;место в&nbsp;стационаре, чтобы ваше животное
            весь день пробыло под наблюдением врача стационара, а&nbsp;вечером
            вы&nbsp;смогли забрать своего питомца домой. Мы&nbsp;не&nbsp;отдаём
            животных в&nbsp;состоянии наркоза, так как это неоправданный риск.
            Животное после операции должно пойти домой своими ногами,
            со&nbsp;стабильными давлением и&nbsp;температурой, без риска для
            жизни.
          </>,
          <>
            Самые популярны мифы, с&nbsp;которыми нам приходятся сталкиваться
            в&nbsp;разговорах с&nbsp;владельцами:
          </>,
          <ul>
            <li>
              <i>Животное должно хоть раз родить для здоровья.</i>
              <br /> Это <b>неправда,</b> роды ни&nbsp;одному виду
              на&nbsp;планете не&nbsp;добавляют здоровья, но&nbsp;несут
              за&nbsp;собой много рисков. Гинекологические и&nbsp;онкологические
              заболевания встречаются и&nbsp;у&nbsp;рожавших,
              и&nbsp;у&nbsp;нерожавших особей.
            </li>
            <li>
              <i>Животное хочет испытать радость материнства.</i>
              <br /> <b>Неправда,</b> у&nbsp;животных нет мечт
              об&nbsp;их&nbsp;роли в&nbsp;социуме.
            </li>
            <li>
              <i>Кастрированные животные толстеют.</i>
              <br /> Это только <b>отчасти правда.</b> Кастрированные животные
              могут стать более спокойными из-за снижения агрессии
              и&nbsp;переживаний о&nbsp;поиске &laquo;второй половинки&raquo;,
              соответственно будут тратить меньше калорий. Проблема решается
              уменьшением калорийности суточного рациона.
            </li>
          </ul>,
        ],
      },
    ],
    SVG: <HeartSVG />,
    image: "receptionDepartment",
    pathName: "surgery",
  },

  {
    title: "Лаборатория",
    description: [
      <>
        Наша клиника оснащена собственным лабораторным оборудованием, что
        позволяет проводить широкий спектр анализов: общий и&nbsp;биохимический
        анализы крови, экспресс-диагностику бабезиоза (пироплазмоза),
        цитологические исследования, анализ мочи с&nbsp;исследованием осадка,
        экспресс-тесты на&nbsp;инфекционные заболевания и&nbsp;дерматологические
        исследования.{" "}
        <b>Результаты этих анализов будут готовы менее чем за&nbsp;час.</b>
      </>,
      <>
        Кроме того, мы&nbsp;сотрудничаем с&nbsp;ведущими независимыми
        лабораториями, что даёт нам возможность выполнять более сложные
        исследования: гистологию, генетические тесты, бактериологические посевы,
        ПЦР-диагностику инфекционных заболеваний, анализ на&nbsp;титры
        к&nbsp;бешенству и&nbsp;многое другое. Сроки выполнения таких анализов
        варьируются от&nbsp;6&nbsp;часов до&nbsp;14&nbsp;дней в&nbsp;зависимости
        от&nbsp;их&nbsp;сложности.
      </>,
      <>
        <b>Некоторые анализы должны проводиться на&nbsp;голодный желудок.</b>{" "}
        Записаться на&nbsp;диагностику можно по&nbsp;телефону клиники.
      </>,
    ],
    services: [
      {
        text: "Общий анализ крови",
        isLink: true,
        id: 0,
        description: [
          <>
            Кровь взаимодействует со&nbsp;всеми тканями организма, поэтому при
            различных заболеваниях её&nbsp;состав быстро меняется. Врач,
            анализируя общий анализ крови, может выявить инфекции, отравления,
            обезвоживание, онкологические и&nbsp;другие заболевания. Результаты
            анализа доступны уже через <b>15&nbsp;минут.</b>
          </>,
        ],
        notes: [
          <>
            Рекомендовано проводить на&nbsp;голодный желудок, в&nbsp;остром
            состоянии рекомендацией можно пренебречь.
          </>,
          <>Диагностика проводится по&nbsp;предварительной записи</>,
        ],
      },

      {
        text: "Биохимический анализ крови",
        isLink: true,
        id: 1,
        description: [
          <>
            Это один из&nbsp;самых востребованных методов лабораторной
            диагностики в&nbsp;ветеринарной медицине. Он&nbsp;помогает быстро
            оценить состояние внутренних органов, таких как печень, желчный
            пузырь, поджелудочная железа, почки и&nbsp;другие, что позволяет
            поставить диагноз и&nbsp;подобрать эффективное лечение. Этот метод
            также используется для ежегодной проверки здоровья питомца
            и&nbsp;подготовки к&nbsp;хирургическим операциям.
          </>,
        ],
        notes: [
          <>
            Рекомендовано проводить на&nbsp;голодный желудок, в&nbsp;остром
            состоянии рекомендацией можно пренебречь.
          </>,
          <>Диагностика проводится по&nbsp;предварительной записи</>,
        ],
      },

      {
        text: "Экспресс-тесты на инфекции",
        isLink: true,
        id: 2,
        description: [
          <>
            Экспресс-тесты на&nbsp;инфекции&nbsp;&mdash; это быстрые тесты,
            основанные на&nbsp;методе иммунохроматографического анализа (ИХА).
            Процедура занимает всего <b>5&ndash;20 минут</b> и&nbsp;требует
            образец смыва или крови. Эти тесты определяют наличие антител или
            антигенов, но&nbsp;не&nbsp;показывают их&nbsp;количество или степень
            заражения. Несмотря на&nbsp;это, они очень полезны для ранней
            диагностики инфекций и&nbsp;быстрого начала лечения. Особенно они
            пригодятся, если вы&nbsp;подобрали животное на&nbsp;улице
            и&nbsp;хотите убедиться, что оно безопасно для вашего домашнего
            питомца.
          </>,
        ],
      },

      {
        text: "Экспресс-тест на пироплазмоз",
        isLink: true,
        id: 3,
        description: [
          <>
            Пироплазмоз (бабезиоз)&nbsp;&mdash; это заболевание, которое
            передается собакам через укусы клещей. Первые симптомы включают
            вялость, отказ от&nbsp;еды, изменение цвета мочи и&nbsp;повышение
            температуры. Анализ на&nbsp;бабезиоз можно проводить уже через сутки
            после укуса, и&nbsp;результаты будут готовы примерно через {" "}
            <b>30&nbsp;минут.</b>
          </>,
        ],
        notes: [
          <>Специальной подготовки к&nbsp;анализу не&nbsp;требуется</>,
          <>Проводится по&nbsp;предварительной записи</>,
        ],
      },

      {
        text: "Цитология",
        isLink: true,
        id: 4,
        description: [
          <>
            Цитологическое исследование&nbsp;&mdash; это метод лабораторной
            диагностики, который позволяет выявить изменения в&nbsp;клетках,
            а&nbsp;также наличие микроорганизмов и&nbsp;включений как внутри,
            так и&nbsp;снаружи клеток. Для анализа используются мазки-отпечатки,
            смывы, соскобы с&nbsp;поверхности органов и&nbsp;тканей,
            а&nbsp;также жидкости из&nbsp;полостей тела, полученные
            во&nbsp;время операций.
          </>,
          <>
            В&nbsp;результате исследования врач может обнаружить паразитов,
            бактерии, грибки или патологические изменения в&nbsp;клетках.
          </>,
        ],
        notes: [
          <>Специальная подготовка не&nbsp;требуется</>,
          <>Диагностика проводится по&nbsp;предварительной записи</>,
        ],
      },

      {
        text: "Гистология",
        isLink: true,
        id: 5,
        description: [
          <>
            Гистология&nbsp;&mdash; это анализ тканей, который помогает выявить
            нарушения их&nbsp;структуры, воспалительные процессы, а&nbsp;также
            диагностировать доброкачественные и&nbsp;злокачественные
            образования.
          </>,
        ],
        notes: [
          <>
            Данный анализ проводится по&nbsp;предварительной записи
            по&nbsp;направлению врача
          </>,
        ],
      },

      {
        text: "Анализ мочи",
        isLink: true,
        id: 6,
        description: [
          <>
            Это информативный метод лабораторной диагностики, который позволяет
            врачу выявить в&nbsp;моче клетки воспаления, бактерии, соли
            и&nbsp;кровь. Он&nbsp;чаще всего используется для диагностики
            заболеваний мочевыделительной системы, но&nbsp;биохимическое
            исследование мочи также может указать на&nbsp;проблемы
            с&nbsp;другими органами и&nbsp;системами.
          </>,
          <>
            Для получения точных результатов важно правильно собрать материал.
            Моча должна быть собрана в&nbsp;стерильную емкость и&nbsp;сразу
            доставлена на&nbsp;анализ. Моча из&nbsp;необработанного лотка или
            собранная с&nbsp;пола для исследования не&nbsp;подходит.
            В&nbsp;некоторых случаях мочу забирают методом цистоцентеза
            (проколом), чтобы исключить попадание посторонних веществ
            и&nbsp;бактерий, которые могут исказить результаты.
          </>,
        ],
      },
    ],
    SVG: <FlaskSVG />,
    image: "receptionDepartment",
    pathName: "laboratory",
  },

  {
    title: "Госпитализация",
    services: [
      {
        text: "Дневной стационар",
        isLink: true,
        id: 0,
        description: [
          <>
            В&nbsp;нашем дневном стационаре питомцы получают необходимое лечение
            и&nbsp;внимание в&nbsp;течение дня. Это идеальный выбор для
            животных, которым требуется регулярное введение препаратов или
            наблюдение в&nbsp;течение нескольких часов, но&nbsp;которые могут
            комфортно вернуться домой вечером. Наши ветеринары и&nbsp;медсестры
            обеспечат тщательный уход и&nbsp;контроль, пока ваше животное
            находится у&nbsp;нас.
          </>,
        ],
      },

      {
        text: "Интенсивная терапия",
        isLink: true,
        id: 1,
        description: [
          <>
            Наше отделение интенсивной терапии предназначено для животных,
            которым требуется постоянное медицинское наблюдение
            и&nbsp;интенсивное лечение. Мы&nbsp;предлагаем круглосуточный уход
            для питомцев с&nbsp;тяжелыми заболеваниями, такими как патологии
            сердца и&nbsp;легких, или тем, кто восстанавливается после серьезных
            операций. В&nbsp;этом отделении ваши питомцы находятся под
            пристальным вниманием опытных специалистов и&nbsp;имеют доступ
            к&nbsp;специализированному оборудованию, включая кислородные камеры
            и&nbsp;мониторинг жизненно важных показателей.
          </>,
        ],
      },

      {
        text: "Круглосуточный стационар",
        isLink: true,
        id: 2,
        description: [
          <>
            Круглосуточный стационар обеспечивает непрерывный медицинский уход
            для животных, которым требуется круглосуточное наблюдение
            и&nbsp;лечение. Это особенно важно в&nbsp;случаях тяжелых болезней,
            после сложных операций или в&nbsp;период реабилитации, когда
            постоянное присутствие медицинского персонала и&nbsp;мониторинг
            состояния необходимы для обеспечения оптимального восстановления
            и&nbsp;комфорта вашего питомца. Наши специалисты будут следить
            за&nbsp;состоянием вашего животного в&nbsp;любое время дня
            и&nbsp;ночи, обеспечивая высокий уровень заботы и&nbsp;внимания.
          </>,
        ],
      },
    ],
    image: "receptionDepartment",
    pathName: "hospitalization",
  },

  {
    title: "Диагностика",
    services: [
      {
        text: "Рентген",
        isLink: true,
        id: 0,
        description: [
          <>
            Все наши филиалы оснащены современными цифровыми рентгенологическими
            установками, которые обеспечивают высококачественные снимки всего
            за&nbsp;несколько минут.
          </>,
          <>
            Мы&nbsp;проводим различные рентгенологические исследования, включая:
          </>,
          <ul>
            <li>
              Рентген <b>головы;</b>
            </li>
            <li>
              Рентген <b>грудной полости;</b>
            </li>
            <li>
              Рентген <b>брюшной полости;</b>
            </li>
            <li>
              Рентген <b>конечностей;</b>
            </li>
            <li>
              Рентген <b>с&nbsp;применением контрастных веществ;</b>
            </li>
            <li>
              <b>Рентгенологическое исследование ТБС</b> с&nbsp;заключением для
              РКФ.
            </li>
          </ul>,
          <>
            В&nbsp;филиалах на&nbsp;Красном проспекте и&nbsp;на&nbsp;Зорге также
            доступны <b>рентгенологические исследования зубов.</b>
          </>,
        ],
        notes: [
          <>Дополнительная подготовка требуется только для диагностики ТБС</>,
          <>Записаться можно по&nbsp;телефону нашей клиники</>,
        ],
      },

      {
        text: "Узи",
        isLink: true,
        id: 1,
        description: [
          <>
            Ультразвуковое исследование&nbsp;&mdash; это современный
            и&nbsp;безболезненный метод диагностики, который позволяет
            &laquo;заглянуть&raquo; внутрь животного. В&nbsp;наших клиниках
            используются высококачественные УЗИ-аппараты, которые обеспечивают
            точные и&nbsp;детализированные результаты.
          </>,
          <>Мы&nbsp;проводим ультразвуковое обследование для:</>,
          <ul>
            <li>
              <b>Органов брюшной полости;</b>
            </li>
            <li>
              <b>Щитовидной железы;</b>
            </li>
            <li>
              <b>Репродуктивных органов</b> у&nbsp;самцов и&nbsp;самок;
            </li>
            <li>
              <b>Органов мочевыделительной системы;</b>
            </li>
            <li>
              <b>Экстренных исследований</b> при травмах для исключения
              кровотечений;
            </li>
            <li>
              <b>Грудной полости.</b>
            </li>
          </ul>,
          <>
            Наши специалисты готовы провести всестороннюю диагностику для
            выявления проблем и&nbsp;обеспечения наилучшего ухода за&nbsp;вашим
            питомцем.
          </>,
        ],
        notes: [
          <>
            Специальная подготовка: рекомендуется предварительная голодная
            диета. В&nbsp;экстренных случаях&nbsp;&mdash; без подготовки.
          </>,
          <>
            Ультразвуковое исследование проводится по&nbsp;предварительной
            записи
          </>,
        ],
      },

      {
        text: "Узи сердца",
        isLink: true,
        id: 2,
        description: [
          <>
            В&nbsp;нашей клинике установлен{" "}
            <b>УЗИ-аппарат экспертного класса,</b> который обеспечивает
            высокоточную диагностику патологий сердца.
          </>,
          <>
            Мы&nbsp;рекомендуем проводить периодическое исследование сердца
            породам из&nbsp;группы риска по&nbsp;кардиологическим заболеваниям.
          </>,
          <>
            <b>Кошки:</b>
          </>,
          <ul>
            <li>рэгдоллы</li>
            <li>сфинксы</li>
            <li>мейн-куны</li>
            <li>британские, шотландские, персидские породы</li>
            <li>бенгальские кошки</li>
            <li>экзотические короткошерстные</li>
            <li>американские короткошерстные</li>
            <li>норвежские лесные</li>
            <li>ориентальные кошки</li>
            <li>бирманские кошки (Священная бирма)</li>
            <li>бурмы</li>
            <li>корниш-рексы</li>
            <li>девон-рексы</li>
          </ul>,
          <>
            <b>Собаки:</b>
          </>,
          <ul>
            <li>ирландские волкодавы</li>
            <li>боксеры</li>
            <li>доберманы</li>
            <li>немецкие доги</li>
            <li>немецкие овчарки</li>
            <li>ньюфаундленды</li>
            <li>английские бульдоги</li>
            <li>французские бульдоги</li>
            <li>алабаи</li>
            <li>кавказские овчарки</li>
            <li>таксы</li>
            <li>терьеры (все)</li>
            <li>чихуахуа</li>
            <li>пудели</li>
            <li>кавалеры кинг-чарльз-спаниели</li>
          </ul>,
        ],
        notes: [
          <>Специальная подготовка не&nbsp;требуется</>,
          <>УЗИ сердца проводится по&nbsp;предварительной записи</>,
        ],
      },

      {
        text: "ЭКГ",
        isLink: true,
        id: 3,
        description: [
          <>
            Электрокардиограмма (ЭКГ) выполняется по&nbsp;назначению
            врача-кардиолога и&nbsp;необходима для оценки работы сердца при
            аритмиях, обмороках и&nbsp;других состояниях, связанных
            с&nbsp;нарушением электрической проводимости. В&nbsp;ветеринарии ЭКГ
            не&nbsp;является рутинной процедурой, как в&nbsp;медицине для людей.
            Вместо этого перед операцией или в&nbsp;рамках ежегодного
            обследования рекомендуется проводить ультразвуковое исследование
            сердца, чтобы получить более полную картину состояния здоровья
            вашего питомца.
          </>,
        ],
      },

      {
        text: "Эндоскопическая диагностика",
        isLink: true,
        id: 4,
        description: [
          <>
            Современный высокоточный метод диагностики. Может применяться
            в&nbsp;случаях, когда УЗИ и&nbsp;рентген недостаточно информативны.
            Эндоскопическое оборудование позволяет детально визуализировать
            органы брюшной полости, суставы, а&nbsp;также провести исследование
            уха, носа и&nbsp;мочевого пузыря. Этот метод не&nbsp;только помогает
            обнаружить инородные предметы, но&nbsp;и&nbsp;позволяет сразу
            извлечь их&nbsp;в&nbsp;ходе диагностики.
          </>,
        ],
        notes: [
          <>
            Исследование проводится только в&nbsp;состоянии седации
            и&nbsp;по&nbsp;направлению лечащего врача.
          </>,
        ],
      },
    ],
    image: "receptionDepartment",
    pathName: "diagnostics",
  },

  {
    title: "Аптека",
    services: [
      {
        text: "Ветеринарные диеты",
        isLink: false,
        id: 0,
      },

      {
        text: "Витамины",
        isLink: false,
        id: 1,
      },

      {
        text: "Конакеон, ветмедин",
        isLink: false,
        id: 2,
      },

      {
        text: "Нестероидные противовоспалительные препараты",
        isLink: false,
        id: 3,
      },

      {
        text: "Препараты для лечения мочевыделительной системы",
        isLink: false,
        id: 4,
      },

      {
        text: "Средства против блох, клещей, внутренних паразитов",
        isLink: false,
        id: 5,
      },

      {
        text: "хондропротекторы",
        isLink: false,
        id: 6,
      },
    ],
    SVG: <MedBowlSVG />,
    image: "receptionDepartment",
    pathName: "pharmacy",
  },

  {
    title: "Зоотовары",
    services: [
      {
        text: "Аксессуары",
        isLink: false,
        id: 0,
      },

      {
        text: "Игрушки",
        isLink: false,
        id: 1,
      },

      {
        text: "Корма",
        isLink: false,
        id: 2,
      },

      {
        text: "Переноски, лежанки",
        isLink: false,
        id: 3,
      },

      {
        text: "Cредства гигиены",
        isLink: false,
        id: 4,
      },

      {
        text: "Cредства груминга",
        isLink: false,
        id: 5,
      },
    ],
    image: "receptionDepartment",
    pathName: "petSupplies",
  },
];
