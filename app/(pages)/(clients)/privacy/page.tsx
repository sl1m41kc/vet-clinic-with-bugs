import { PRIVACY_DATA } from '@/app/data/privacyData';
import classes from './page.module.css';
import clsx from 'clsx';

export default function Page() {
  const { title, content } = PRIVACY_DATA;

  return (
    <section className={clsx('container', classes.container)}>
      <h1 className={classes.title}>{title}</h1>
      {content.map((item, index) => (
        <div key={index} className={classes.item}>
          {item.title && <h2 className={classes.subtitle}>{item.title}</h2>}
          <ul className={classes.content}>
            {item.content.map((content, index) => (
              <li key={index} className={classes.text}>
                {content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
