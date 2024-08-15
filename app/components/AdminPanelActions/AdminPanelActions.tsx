"use client";
import Link from "next/link";

import { AddButton } from "@/app/UI/AddButton/AddButton";
import { SaveButton } from "@/app/UI/SaveButton/SaveButton";

import classes from "./adminPanelActions.module.css";
import { add } from "@dnd-kit/utilities";

interface IProps {
  title: string;
  addBtn?: {
    text: string;
    func?: () => void;
    link: string;
  };
  saveBtn: {
    func?: () => void;
  };
}

export const AdminPanelActions = ({ title, addBtn, saveBtn }: IProps) => {
  if (saveBtn.func === undefined) saveBtn.func = () => {};
  
  return (
    <section className="container">
      <div className={classes.prices}>
        <h1 className={classes.title}>{title}</h1>
        {addBtn && (
          <Link href={addBtn.link} scroll={false}>
            <AddButton onClick={addBtn.func} text={addBtn.text} />
          </Link>
        )}
        <SaveButton onClick={saveBtn.func} />
      </div>
    </section>
  );
};
