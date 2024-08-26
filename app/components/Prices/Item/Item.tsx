import clsx from "clsx";

import type { IService } from "@/app/types/IPrice";

import classes from "./item.module.css";

interface IProps {
  services: IService[];
  groupNote?: string | null;
}

export const Item = ({ services, groupNote }: IProps) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={clsx(index, service.serviceTitle)}
          className={clsx(!groupNote && classes.hasntNote)}
        >
          <div className={clsx(classes.service, classes.service_item)}>
            <div className={classes.text}>
              <h1 className={clsx(classes.title, classes.service_title)}>
                {service.serviceTitle}
              </h1>
              {service.serviceDescription && (
                <p>{service.serviceDescription}</p>
              )}
            </div>
            {service.servicePrice && (
              <p className={classes.price}>
                {service.servicePrice}{" "}
                <span className={classes.rub}>&nbsp;₽</span>
              </p>
            )}
          </div>
          {service.priceOptions.length != 0 &&
            service.priceOptions.map((priceOption, index) => (
              <div
                key={clsx(index, priceOption.optionTitle)}
                className={clsx(
                  classes.service,
                  classes.service_item,
                  classes.sub_service
                )}
              >
                <div className={classes.text}>
                  <h1 className={clsx(classes.title, classes.service_title)}>
                    {priceOption.optionTitle}
                  </h1>
                  {priceOption && <p>{priceOption.optionDescription}</p>}
                </div>
                <p className={classes.price}>
                  {priceOption.optionPrice} <span className={classes.rub}> ₽</span>
                </p>
              </div>
            ))}
        </div>
      ))}
      {groupNote && <p className={classes.note}>{groupNote}</p>}
    </>
  );
};
