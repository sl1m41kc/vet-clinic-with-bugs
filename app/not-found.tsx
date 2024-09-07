import Link from 'next/link';

import LogoSVG from '/public/Svg/logo.svg';

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center md:gap-[150px] h-screen text-[--clr1] gap-[60px]">
      <h1 className="md:text-[12.25em] font-bold text-[--clr3] text-[9em]">
        404
      </h1>
      <div className="flex flex-col md:gap-[30px] text-center gap-[20px]">
        <p className="text-[1.125em] leading-[130%]">
          Запрашиваемая страница не существует или была удалена.
        </p>
        <p className="text-[1.5em]">
          Перейти на{' '}
          <Link href="/" className="border-b border-[--clr3]">
            главную страницу
          </Link>
        </p>
      </div>
      <Link href="/">
        <LogoSVG className="md:w-[300px] w-[200px]" />
      </Link>
    </section>
  );
}
