import classes from './Error.module.css';

interface IProps {
  text: string;
}

export const Error = ({ text }: IProps) => {
  return (
    <div className={classes.loader}>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
