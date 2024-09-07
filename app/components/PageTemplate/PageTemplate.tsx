import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, Suspense } from 'react';

import classes from './pageTemplate.module.css';

interface IProps {
  image: string;
  children: ReactNode;
}

export const PageTemplate = ({ image, children }: IProps) => {
  return (
    <section className={clsx('container', classes.content)}>
      <div className={classes.imageWrapper}>
        <Suspense fallback={<div className={classes.sceleton} />}>
          <Image
            src={image}
            alt={image}
            width={500}
            height={500}
            className={classes.image}
          />
        </Suspense>
      </div>
      {children}
    </section>
  );
};
