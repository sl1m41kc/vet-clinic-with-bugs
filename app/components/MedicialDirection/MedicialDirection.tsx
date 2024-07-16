import React from 'react'
import { IMedicialDirection } from '@/app/types/IMedicialDirection'

import classes from './medicialDirection.module.css'

const MedicialDirection = ({title, description}: IMedicialDirection) => {
  return (
    <div className={classes.direction}>
        <h1 className={classes.title}>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default MedicialDirection