import clsx from "clsx";

import { IPriceSection } from "@/app/types/IPrice";

import classes from "./item.module.css";

export const Item = ({ services, note }: IPriceSection) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={clsx(index, service.title)}
          className={clsx(!note && classes.hasntNote)}
        >
          <div className={clsx(classes.service, classes.service_item)}>
            <div className={classes.text}>
              <h1 className={clsx(classes.title, classes.service_title)}>
                {service.title}
              </h1>
              <p>{service.description}</p>
            </div>
            {service.price && (
              <p className={classes.price}>
                {service.price} <span className={classes.rub}> ₽</span>
              </p>
            )}
          </div>
          {service.services &&
            service.services.map((service, index) => (
              <div
                key={clsx(index, service.title)}
                className={clsx(
                  classes.service,
                  classes.service_item,
                  classes.sub_service
                )}
              >
                <div className={classes.text}>
                  <h1 className={clsx(classes.title, classes.service_title)}>
                    {service.title}
                  </h1>
                  <p>{service.description}</p>
                </div>
                <p className={classes.price}>
                  {service.price} <span className={classes.rub}> ₽</span>
                </p>
              </div>
            ))}
        </div>
      ))}
      {note && <p className={classes.note}>{note}</p>}
    </>
  );
};
