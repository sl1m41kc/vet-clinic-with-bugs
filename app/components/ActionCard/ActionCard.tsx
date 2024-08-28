import ArrowButton from "@/app/UI/ArrowButton/ArrowButton";
import Link from "next/link";
import classes from "./ActionCard.module.css";

interface IProps {
  title: string;
  description?: string;
  button?: {
    text: string;
    link: string;
    isBlank?: boolean
  },
  phone?: {
    phone: string
    link: string
  }
  SVG?: JSX.Element
}

const ActionCard = ({ title, description, button, phone, SVG }: IProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        {description && <p className={classes.description}>{description}</p>}
      </div>
      {button && button.text && button.link && <Link href={button.link} target={button.isBlank ? "_blank" : "_self"}><ArrowButton text={button.text} isFill={true} /></Link>}
      {phone && <Link href={phone.link}><p className={classes.phone}>{phone.phone}</p></Link>}
      {SVG && <div className={classes.svgWrapper}>{SVG}</div>}
    </div>
  );
};

export default ActionCard;
