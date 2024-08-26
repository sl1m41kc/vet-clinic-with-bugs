import Link from 'next/link'
import classes from './AddressCard.module.css'
import YandexMApSVG from '@/public/Svg/YandexMap.svg'
import TwoGisSVG from '@/public/Svg/TwoGis.svg'
import RouteSVG from '@/public/Svg/Route.svg'

interface IProps {
  title: string,
  description: string,
  twoGis: string,
  yandexMap: string
}

export const AddressCard = ({ title, description, twoGis, yandexMap }: IProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <p className={classes.description}>{description}</p>
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div className={classes.buttons}>
        <p className={classes.subtext}>Посмотреть на карте</p>
        <div className={classes.actions}>
          <Link href={yandexMap}>
            <YandexMApSVG />
          </Link>
          <Link href={twoGis}>
            <TwoGisSVG />
          </Link>
        </div>
      </div>
    <RouteSVG className={classes.backgroundSVG} width={90} height={90} />
    </div>
  )
}