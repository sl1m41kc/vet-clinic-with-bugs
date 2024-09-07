import classes from './PriceLoading.module.css';

export const PriceLoading = () => {
  return (
    <div className="container">
      <div className={classes.loader}>
        <p className={classes.text}>Данные загружаются...</p>
        <div className={classes.loading}></div>
      </div>
    </div>
  );
};
