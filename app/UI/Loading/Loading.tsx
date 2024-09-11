import classes from './Loading.module.css';

export const Loading = () => {
  return (
    <div className="container">
      <div className={classes.loader}>
        <p className={classes.text}>Данные загружаются...</p>
        <div className={classes.loading} />
      </div>
    </div>
  );
};
