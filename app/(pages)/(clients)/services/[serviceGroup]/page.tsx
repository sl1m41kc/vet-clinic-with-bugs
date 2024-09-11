'use client';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { scroller } from 'react-scroll';
import { PageTemplate } from '@/app/components/PageTemplate/PageTemplate';
import AccordionItem from '@/app/components/AccordionItem/AccordionItem';
import { servicesData } from '@/app/data/servicesData';
import { IMAGES_PATH } from '@/app/Сonstants/pathsConsts';
import classes from './serviceGroup.module.css';
import React, { useEffect } from 'react';

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

  if (!serviceGroupItem) {
    notFound();
  }

  const { title, description, image, services } = serviceGroupItem;

  useEffect(() => {
    if (serviceActiveId) {
      const element = document.getElementById(`service-${serviceActiveId}`);
      if (element) {
        scroller.scrollTo(`service-${serviceActiveId}`, {
          duration: 800,
          delay: 0,
          smooth: true,
          offset: -100,
        });
      }
    }
  }, [serviceActiveId]);

  return (
    <PageTemplate image={`${IMAGES_PATH}${image}.png`}>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        {description && (
          <div className={classes.textBlock}>
            {description.map((descrContent, index) => {
              // Проверяем, является ли description пустым фрагментом
              if (
                React.isValidElement(descrContent) &&
                descrContent.type === React.Fragment
              ) {
                // Если это пустой фрагмент, выводим <p>
                return <p key={index}>{descrContent}</p>;
              }
              // Иначе, выводим переданный HTML-элемент
              return (
                <React.Fragment key={index}>{descrContent}</React.Fragment>
              );
            })}
          </div>
        )}

        <ul className={classes.services}>
          {services?.map((service, index) => (
            <li id={`service-${service.id}`} key={clsx(index, service.text)}>
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
                      if (
                        React.isValidElement(description) &&
                        description.type === React.Fragment
                      ) {
                        // Если это пустой фрагмент, выводим <p>
                        return (
                          <p key={index} className={classes.description}>
                            {description}
                          </p>
                        );
                      }
                      // Иначе, выводим переданный HTML-элемент
                      return (
                        <React.Fragment key={index}>
                          {description}
                        </React.Fragment>
                      );
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
