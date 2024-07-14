import React from 'react'
import clsx from 'clsx'

interface IProps {
    title: string,
    description: string,
    changeColor: boolean
}

import styles from './advantagesCard.module.css'

const AdvantagesCard = ({title, description, changeColor}: IProps) => {
  return (
    <div className={clsx(styles.card, {[styles.changeColor]: changeColor})}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
    </div>
  )
}

export default AdvantagesCard