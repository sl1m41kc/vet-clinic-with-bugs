import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { menuNavData } from '@/app/data/menuNavData';

import Contacts from '../Contacts/Contacts';
import CircleButton from '@/app/UI/СircleButton/CircleButton';

import LogoSVG from '/public/Svg/logo.svg';

import classes from './menuInterface.module.css';

const MenuInterface = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScrollbarWidth(
        window.innerWidth - document.documentElement.clientWidth
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }
  }, [isOpen, scrollbarWidth]);

  return (
    <>
      <div
        className={clsx(classes.blackout, isOpen && classes.active)}
      />
      <div className={clsx(classes.menu, isOpen && classes.open)}>
        <div className={classes.button} onClick={() => setIsOpen(false)}>
          <CircleButton image="cross" />
        </div>
        <div className={classes.content} onClick={(e) => e.stopPropagation()}>
          <div className={classes.contacts}>
            <Link
              className={classes.logo}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <LogoSVG />
            </Link>
            <Contacts style="menu" />
          </div>

          <ul className={classes.list}>
            {menuNavData.map((item, index) => (
              <li key={index} className={classes.item}>
                <Link
                  href={item.href}
                  className={classes.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuInterface;
