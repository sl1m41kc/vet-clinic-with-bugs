'use client'
import { Controller, useForm } from "react-hook-form";
import { IUser } from "@/app/types/IUser";
import { signIn } from "next-auth/react";
import LoginSVG from "@/public/Svg/login.svg";
import classes from "./page.module.css";
import clsx from "clsx";

export default function page() {
  const {control, handleSubmit} = useForm<IUser>()

  const onSubmit = async (data: IUser) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/admin/price', 
    });
  }

  return (
    <section className={clsx(classes.container, "container")}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={classes.title}>Вход для администратора</h1>
      <Controller 
        control={control}
        name="email"
        defaultValue=""
        render={({field}) => <input className={classes.input} {...field} type="email" placeholder="Логин" />}
      />
      <Controller 
        control={control}
        name="password"
        defaultValue=""
        render={({field}) => <input className={classes.input} {...field} type="password" placeholder="Пароль" />}
      />
      <button className={classes.button} type="submit">
        <LoginSVG className={classes.svg} />
        <p className={classes.text}>Войти</p>
      </button>
    </form>
    </section>
  );
}
