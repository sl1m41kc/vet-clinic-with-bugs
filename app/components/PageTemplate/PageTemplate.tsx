import clsx from "clsx";
import Image from "next/image";

import classes from "./pageTemplate.module.css";

interface IProps {
  image: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ image, children }: IProps) => {
  return (
    <section className={clsx("container", classes.content)}>
      <div>
        <Image
          src={image}
          alt={image}
          width={500}
          height={500}
          className={classes.image}
          />
      </div>
      {children}
    </section>
  );
};
