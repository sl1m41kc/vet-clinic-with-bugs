import LogOutSVG from '/public/Svg/logout.svg'

import classes from './ExitButton.module.css'

export const ExitButton = () => {
  return (
    <button className={classes.button}>
        <LogOutSVG className={classes.svg}/>
        <p>Выйти</p>
    </button>
  )
}