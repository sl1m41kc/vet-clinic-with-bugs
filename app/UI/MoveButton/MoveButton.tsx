import classes from './MoveButton.module.css'
import DragIndocatorSVG from '/public/Svg/DragIndicator.svg'

interface IProps {
    listeners: any
}

export const MoveButton = ({listeners}: IProps) => {
  return (
    <div {...listeners} className={classes.button}>
        <DragIndocatorSVG className={classes.svg} />
    </div>
  )
}