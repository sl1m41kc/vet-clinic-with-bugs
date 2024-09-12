import ArrowButton from '@/app/UI/ArrowButton/ArrowButton';
import Link from 'next/link';
import classes from './ActionCard.module.css';

interface IProps {
  title: string;
  description?: string;
  button?: {
    text: string;
    link: string;
    isBlank?: boolean;
    isPhone?: boolean;
  };
  phone?: {
    phone: string;
    link: string;
  };
  SVG?: JSX.Element;
}

const ActionCard = ({ title, description, button, phone, SVG }: IProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        {description && <p className={classes.description}>{description}</p>}
      </div>
      {button && button.text && button.link && (
        <a
          className={classes.link}
          href={button.isPhone ? `tel:${button.link}` : button.link}
          target={button.isBlank ? '_blank' : '_self'}
        >
          <ArrowButton text={button.text} isFill={true} />
        </a>
      )}
      {phone && (
        <a className={classes.link} href={phone.link}>
          <p className={classes.phone}>{phone.phone}</p>
        </a>
      )}
      {SVG && <div className={classes.svgWrapper}>{SVG}</div>}
    </div>
  );
};

export default ActionCard;
