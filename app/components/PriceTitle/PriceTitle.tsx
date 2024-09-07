import React from 'react';
import clsx from 'clsx';

import classes from './priceTitle.module.css';

interface IProps {
  children: React.ReactNode;
}

const PriceTitle = ({ children }: IProps) => {
  return (
    <section className={clsx('container', classes.content)}>
      <p>{children}</p>
    </section>
  );
};

export default PriceTitle;
