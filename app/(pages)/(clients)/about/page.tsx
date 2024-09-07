import { PageTemplate } from '@/app/components/PageTemplate/PageTemplate';
import classes from './page.module.css';
import { ABOUT_CONTENT_DATA } from '@/app/data/aboutContentData';
import clsx from 'clsx';
import Image from 'next/image';

export default function page() {
  return (
    <PageTemplate image={ABOUT_CONTENT_DATA.image}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>{ABOUT_CONTENT_DATA.title}</h1>
        <div className={classes.content}>
          {ABOUT_CONTENT_DATA.content.map((item, index) => (
            <div className={classes.item} key={clsx(index, item.title)}>
              <h2 className={classes.subtitle}>{item.title}</h2>
              <div className={classes.textWrapper}>
                {item.description.map((description, index) => (
                  <p key={clsx(index, description)} className={classes.text}>
                    {description}
                  </p>
                ))}
              </div>
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={1920}
                  height={1080}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
