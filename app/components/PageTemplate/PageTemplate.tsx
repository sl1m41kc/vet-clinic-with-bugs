import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, Suspense } from 'react';

import classes from './pageTemplate.module.css';

interface IProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  children: ReactNode;
}

export const PageTemplate = ({ image, children }: IProps) => {
  return (
    <section className={clsx('container', classes.content)}>
      <div className={classes.imageWrapper}>
        <Suspense fallback={<div className={classes.sceleton} />}>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className={classes.image}
            placeholder="blur"
          />
        </Suspense>
      </div>
      {children}
    </section>
  );
};
