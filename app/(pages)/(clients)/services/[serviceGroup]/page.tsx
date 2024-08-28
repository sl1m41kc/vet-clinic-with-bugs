import clsx from "clsx";
import { notFound } from "next/navigation";

import { PageTemplate } from "@/app/components/PageTemplate/PageTemplate";
import AccordionItem from "@/app/components/AccordionItem/AccordionItem";

import { servicesData } from "@/app/data/servicesData";

import { IMAGES_PATH } from "@/app/Сonstants/pathsConsts";

import classes from "./serviceGroup.module.css";
import React from "react";

interface IProps {
  params: { serviceGroup: string };
  searchParams: { serviceActiveId: string };
}

export default function Home({ params, searchParams }: IProps) {
  const { serviceGroup } = params;
  const { serviceActiveId } = searchParams;

  const serviceGroupItem = servicesData.find(
    (item) => item.pathName === serviceGroup
  );

  if (!serviceGroupItem) { notFound(); }

  const { title, description, image, services } = serviceGroupItem;

  return (
    <PageTemplate image={`${IMAGES_PATH}${image}.png`}>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        {description && (
          description.map((descrContent, index) => {
            // Проверяем, является ли description пустым фрагментом
            if (React.isValidElement(descrContent) && descrContent.type === React.Fragment) {
              // Если это пустой фрагмент, выводим <p>
              return <p key={index}>{descrContent}</p>;
            }
            // Иначе, выводим переданный HTML-элемент
            return <React.Fragment key={index}>{descrContent}</React.Fragment>;
          })
        )}

        <ul className={classes.services}>
          {services?.map((service, index) => (
            <li key={clsx(index, service.text)}>
              <AccordionItem
                title={
                  service.text.charAt(0).toUpperCase() + service.text.slice(1)
                }
                isAccordion={service.isLink}
                actived={Number(serviceActiveId) === service.id}
              >
                <div className={classes.info}>
                  {service.description &&
                    service.description.map((description, index) => {
                      // Проверяем, является ли description пустым фрагментом
                      if (React.isValidElement(description) && description.type === React.Fragment) {
                        // Если это пустой фрагмент, выводим <p>
                        return <p key={index}>{description}</p>;
                      }
                      // Иначе, выводим переданный HTML-элемент
                      return <React.Fragment key={index}>{description}</React.Fragment>;
                    })}

                  {service.notes && (
                    <div className={classes.notes}>
                      {service.notes.map((note, index) => (
                        <p key={index} className={classes.note}>
                          {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionItem>
            </li>
          ))}
        </ul>
      </div>
    </PageTemplate>
  );
}
