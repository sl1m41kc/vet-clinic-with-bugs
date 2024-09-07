import React from 'react';
import clsx from 'clsx';

import { IAdvantagesCard } from '../../types/IAdvantagesCard';

import styles from './advantagesCard.module.css';

const AdvantagesCard = ({
  title,
  description,
  changeColor,
}: IAdvantagesCard) => {
  return (
    <div className={clsx(styles.card, { [styles.changeColor]: changeColor })}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AdvantagesCard;
