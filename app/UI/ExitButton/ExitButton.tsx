'use client'
import LogOutSVG from '/public/Svg/logout.svg'

import classes from './ExitButton.module.css'
import { signOut } from 'next-auth/react';

export const ExitButton = () => {

  const onClick = () => {
    signOut();
  }

  return (
    <button className={classes.button} onClick={onClick}>
        <LogOutSVG className={classes.svg}/>
        <p>Выйти</p>
    </button>
  )
}