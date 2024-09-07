import React from 'react';

import Link from 'next/link';

import classes from './vaccines.module.css';
import clsx from 'clsx';

const Vaccines = () => {
  return (
    <section>
      <p className={clsx('container', classes.text)}>
        Приведённые на&nbsp;нашем сайте цены на&nbsp;вакцины, а&nbsp;также
        информация об&nbsp;их&nbsp;наличии на&nbsp;складе носят ознакомительный
        характер и&nbsp;не&nbsp;являются публичной офертой, определённой пунктом
        2&nbsp;статьи 437&nbsp;ГК РФ. Для получения информации о&nbsp;наличии
        вакцин и&nbsp;их&nbsp;стоимости необходимо связаться с&nbsp;нами
        по&nbsp;телефону&nbsp;
        <Link href="tel:+73832850204">+7 (383) 285-02-04</Link>
      </p>
    </section>
  );
};

export default Vaccines;
