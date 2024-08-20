import clsx from "clsx";

import Link from "next/link";

import LogoSVG from "/public/Svg/logo_vetlekar_horizontal.svg";

import classes from "./notFound.module.css";

export default function NotFound() {
  return (
    <section className={clsx("container", classes.content)}>
      <h1 className={classes.title}>404</h1>
      <div className={classes.text}>
        <p className={classes.description}>
          Запрашиваемая страница не существует или была удалена.
        </p>
        <p className={classes.link}>
          Перейти на{" "}
          <Link href="/" className={classes.underline}>
            главную страницу
          </Link>
        </p>
      </div>
      <Link href="/"><LogoSVG className={classes.logo} /></Link>
    </section>
  );
};
