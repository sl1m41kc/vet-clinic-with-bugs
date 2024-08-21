"use client";
import { useEffect } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import CloseSVG from "/public/Svg/close.svg";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, isOpen, setIsOpen }: IProps) => {
  if (!isOpen || typeof window === "undefined") return null;

  const handleCLose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={handleCLose} />

      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <div className={classes.closePanel}>
            <div className={classes.close} onClick={handleCLose}>
              <CloseSVG className={classes.svg} />
            </div>
          </div>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
};
